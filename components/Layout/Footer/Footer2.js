import React , { Component } from "react";
import { Link, Router } from "../../../router/routes";
import { connect } from "react-redux";
import { reduxForm, Field, change, untouch } from "redux-form";
import {Email} from "../../common/FormField";
import {emailFormField} from "./formFields";

const linkStyle = {
  margin: '0 10px 0 0'
}

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    renderFields(emailFormField) {
        console.log(emailFormField)
        return emailFormField.map(( { label ,name, type, required, autoFocus = false } ) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} autoFocus={autoFocus} component={Email} />
            )
        })
    }
    // resetFields = (formName, fieldsObj) => {
    //     console.log(formName);
    //     console.log(fieldsObj);
    //     Object.keys(fieldsObj).forEach(fieldKey => {

    //           //reset the field's value
    //         this.props.dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));

    //           //reset the field's error
    //         this.props.dispatch(untouch(formName, fieldKey));

    //     });
    // }

    onSubmit(values){
       console.log(values);
    }

render(){
    const { pathname, authenticated, query = false, handleSubmit, load, pristine, reset, submitting } = this.props;
    const footer_style = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor:'#ccc',
        color: '#333',
        textAlign: 'center',
    }
    // console.log(pathname);
        return(
            <footer className="page-footer font-small" style={footer_style}>

                <div className="footer-copyright text-center py-3">&copy; 2019 Copyright
                </div>

            </footer>
        )
    }
        
}

function validate(values){
	// console.log(values);
	const errors = {};
	emailFormField.forEach(({ name, required }) => {
		if(!values[name] && required){
			errors[name] = 'กรุณากรอกข้อมูล อีเมลล์'
		}
	});
	return errors;
}

Footer = reduxForm({ 
	validate,
	form: "Footer"
})(Footer);
  
export default connect(null)(Footer);