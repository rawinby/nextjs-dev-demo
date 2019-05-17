import React , { Component } from "react";
import PropTypes from "prop-types";
import Head from 'next/head';
import Swal from 'sweetalert2';
import _ from 'lodash';

import { connect } from "react-redux";
import { reduxForm, Field, change, untouch } from "redux-form";
import { InputForm, renderDateTimePicker, renderSelectField, renderRadioField, renderCheckboxField } from "../components/FormTest/InputForm";
import { InputField } from "../components/FormTest/InputField";
import { testPost } from "../actions/TestActions";


class Index extends Component {

	constructor(props) {
        super(props);
	}
	

    renderFields(InputField) {
        return InputField.map(( { label ,name, type, required, autoFocus = false, placeholder, maxlength, min, max, options } ) => {
			if(type == "date"){
				return (
					<Field
						key={name} 
						label={label}
						name={name} 
						type={type} 
						required={required} 
						autoFocus={autoFocus} 
						placeholder={placeholder} 
						showTime={true}
						component={renderDateTimePicker}
					/>
				)
			
			}
			else if(type == "select"){
				return (
				<React.Fragment key={name}>
					<Field key={name} name={name} label={label} className="form-control" required={required} component={renderSelectField}>
					{options.map((el, i) => 
						<option key={el.value} value={el.value}>{el.label}</option>
					)}
					</Field>
				</React.Fragment>
				)
			}
			else if(type == "radio"){
				return (
					<Field key={name} name={name} type={type} required={required} label={label} options={options} component={renderRadioField} />
				)
			}
			else if(type == "checkbox"){  
				return (
					<Field key={name} name={name} required={required} label={label} options={options} component={renderCheckboxField} /> 
				)
			}
			else{
				return (
					<Field 
						key={name} 
						label={label} 
						name={name} 
						type={type} 
						required={required} 
						autoFocus={autoFocus} 
						placeholder={placeholder} 
						maxlength={maxlength} 
						min={min} 
						max={max} 
						component={InputForm} 
					/>
				)
			}
		})
		
		// return (
		// 	<React.Fragment>
		// 		<Field key="aa" label="Email" name="email" type="text" required="required" autoFocus="autoFocus" component={InputForm} />
		// 		<Field key="aa" label="Email" name="email" type="text" required="required" autoFocus="autoFocus" component={InputForm} />
		// 	</React.Fragment>
		// )
    }

	onSubmit(values){
		console.log('values=',values);		
		// $('[name=age]').blur();
		this.props.fnc_testPost(values)
		.then(res => {
			console.info('success =', res)
			Swal.fire({
				type: 'success',
				title: 'สำเร็จ',
				text: 'บันทึกข้อมูลสำเร็จ',
			}).then((result) => {
				if (result.value) {
					this.props.reset()
				}
			})
		})
		.catch(err => {
			console.info('error =', err.message)
			Swal.fire({
				type: 'error',
				title: 'เกิดข้อผิดพลาด',
				text: err.message,
			})
		})
    }

	render(){
		const { pathname, authenticated, query = false, handleSubmit, load, pristine, reset, submitting } = this.props;
		return (
			<div className="container">			
				<Head>
					<title>Form</title>
				</Head>
				<div className="row">    
					<div className="col-sm">    
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="#">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">From</li>
							</ol>
						</nav>
						<h2>Form Test</h2>
						<form onSubmit={(e) => {e.preventDefault();}}>
							{ this.renderFields(InputField) }						

							<br/>
							<div>
								<button className="btn btn-primary" type="submit" disabled={submitting} onClick={handleSubmit((e)=>this.onSubmit(e))}>Submit</button> &nbsp;
								<button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

function validate(values){
	// console.log(values);
	const errors = {};
	InputField.forEach(({ name, required, type, min, max }) => {
		if(values[name] && required && type == "email"){
			let lastAtPos = values[name].lastIndexOf('@');
           	let lastDotPos = values[name].lastIndexOf('.');
           	if (!(lastAtPos < lastDotPos && lastAtPos > 0 && values[name].indexOf('@@') == -1 && lastDotPos > 2 && (values[name].length - lastDotPos) > 2)) {
			  errors[name] = 'กรุณากรอกข้อมูล อีเมลล์ให้ถูกต้อง'
            }
		}
		else if(values[name] && required && type == "number" && (values[name] < min || values[name] > max)){
			errors[name] = 'กรุณากรอกข้อมูล ให้ถูกต้อง ('+ min +'-'+ max +')';
		}
		else if(_.isEmpty(values[name]) && required && type == "checkbox"){
			errors[name] = 'กรุณาเลือกอย่างน้อย 1 รายการ'
		}
		else if(!values[name] && required){
			errors[name] = 'กรุณากรอกข้อมูล'
		}

		// console.info(type, name, values[name], required)
	});
	return errors;
}


function mapStateToProps({ state }) {
	return {
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fnc_testPost: e => dispatch(testPost(e))
	}
}

Index = reduxForm({
	form: "Index",
	validate,
})(Index);

export default connect(mapStateToProps, mapDispatchToProps)(Index);