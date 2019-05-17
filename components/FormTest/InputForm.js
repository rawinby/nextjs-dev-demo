import React, { Component } from "react";
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from "react-widgets-moment";
import 'react-widgets/dist/css/react-widgets.css';

momentLocaliser(moment)

const renderDateTimePicker = ({ input: { onChange, value }, meta: { error, touched }, showTime, label, required }) => (
	<div className="form-group">
		<label>{label}</label>
		<DateTimePicker
			id="datepicker"
			onChange={onChange}
			format="YYYY-MM-DD hh:mm"
			time={showTime}
			value={!value ? null : new Date(value)}
			required={required}
		/>
		{touched && error && <span className="error">{error}</span>}
	</div>	
)

const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
	<div className="form-group">
	  <label>{label}</label>
	  <div>
		<select {...input} className="form-control">
		  {children}
		</select>
		{touched && error && <span className="error">{error}</span>}
	  </div>
	</div>
)

const renderRadioField = ({ input, label, type, meta: { touched, error }, options }) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			{options.map((el,i)=>(
				<label key={i}><input {...input} type={type} value={el.value} checked={input.value} defaultChecked={el.checked} /> {el.label} &nbsp; </label>
			))}
		</div>
		{touched && error && <span className="error">{error}</span>}
	</div>
)

const renderCheckboxField = ({ input, label, type, meta: { touched, error }, options }) => {
	return (
	<div className="form-group">
		<label>{label}</label>
		<div>
			{options.map((option, index) => (
			<div className="checkbox" key={index}>
				<label>
					<input
					type="checkbox"
					name={`${input.name}[${index}]`}
					value={option.name}
					checked={input.value.indexOf(option.name) !== -1}
					onChange={(event) => {
						const newValue = [...input.value];
						if (event.target.checked) {
							newValue.push(option.name);
						} else {
							newValue.splice(newValue.indexOf(option.name), 1);
						}
						return input.onChange(newValue);
					}}
					/>&nbsp;{option.label}
				</label>
			</div>))}
			{touched && error && <span className="error">{error}</span>}
		</div>
	</div>
	)
}



//const MySwal = withReactContent(Swal)
class InputForm extends Component {
	constructor(props) {
	    super(props);
	    // console.log(props);
	}

	render(){
		// console.log(this.props);
		const {input, label, type, required, meta: { error, touched }, autoFocus, placeholder, maxlength, min, max} = this.props;
		return (
			<div className="form-group">
				<label>{label}</label>
				<input className="form-control"
					{...input}
					type={type}
					required={required}
					autoFocus={autoFocus}
					placeholder={placeholder}
					maxLength={maxlength}
					min={min}
					max={max}
				/>
				{touched && error && <span className="error">{error}</span>}
			</div>
		)
	}
}

export {
	InputForm,
	renderDateTimePicker,
	renderSelectField,
	renderRadioField,
	renderCheckboxField,
}