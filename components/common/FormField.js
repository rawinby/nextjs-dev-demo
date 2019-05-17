import React, { Component } from "react";
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';


//วิธี 1
// export default ({ input, label, type, required, meta }) => {
// 	// console.log(meta);
// 	return (
// 		<div className="form-group">
// 			<label className="title">{label}</label>
// 			<input className="form-control" type={type} {...input} required={required} />
// 			{ meta.error && meta.touched && 
// 				(
// 					<div className="mt2 text-danger title">{meta.error}</div>
// 				)
// 			}
// 		</div>
// 	)
// }
// วิธี 2
// const Form = ({ input, label, type, required, meta: { error, touched } }) => {
// 	// console.log(meta);
// 	return (
// 		<div className="form-group">
// 			<label className="title">{label}</label>
// 			<input className="form-control" type={type} {...input} required={required} />
// 			{ error && touched && 
// 				(
// 					<div className="mt2 text-danger title">{error}</div>
// 				)
// 			}
// 		</div>
// 	)
// }

//const MySwal = withReactContent(Swal)
class Email extends Component {
	constructor(props) {
	    super(props);
	    // console.log(props);a
	    // {}
	}

	Alert(alert){
		if(alert === true){
			this.props.meta.touched = false;
			// Swal.fire({
			// 	type: 'info',
			// 	title: 'คำแนะนำ',
			// 	text: 'โปรดระบุอีเมล์ให้ถูกต้อง',
			// })
		}
	}


	// componentDidMount(){
	// 	console.log('componentDidMount');
	// 	this.props.meta.touched = false;
	// }

	// componentDidUpdate(){
	// 	console.log('componentDidUpdate');
	// 	this.props.meta.touched = false;
	// }

	// componentWillUnmount(){
	// 	console.log('componentWillUnmount');
	// 	this.props.meta.touched = false;
	// }

	// componentWillMount(){
	// 	console.log('componentWillMount');
	// 	this.props.meta.touched = false;
	// }

	// componentWillUpdate(){

	// 	this.props.meta.touched = false;
	// }

	// componentWillReceiveProps(nextProps){
	// 	console.log('componentWillReceiveProps');
	// 	this.props.meta.touched = false;
	// }



	render(){
		
		// console.log(this.props);
		const {input, label, type, required, meta: { error, touched }, autoFocus} = this.props;
		if(error && touched){
			return(
				<div className="form-group">
					<input className="form-control" type={type} {...input} required={required} autoFocus={autoFocus} placeholder="example@email.com" />
					{touched && (error && <span>{error}</span>)}
				</div>
			)
		}else{
			return (
				<div className="form-group">
					<input className="form-control" type={type} {...input} required={required} autoFocus={autoFocus} placeholder="example@email.com" />
					{touched && (error && <span>{error}</span>)}
				</div>
			)
		}
	}
}
// const Email = ({ input, label, type, required, meta: { error, touched } }) => {
// 	// console.log(meta);
// 	return (
// 		<div className="form-group">
// 			<input className="form-control" type={type} {...input} required={required} />
// 			{ error && touched && 
// 				(
// 					//<div className="text-white">{error}</div>
// 					Swal.fire({
// 						type: 'info',
// 						title: 'คำแนะนำ',
// 						text: 'โปรดระบุอีเมล์ให้ถูกต้อง',
// 					})
// 				)
// 			}
// 		</div>
// 	)
// }

export {
	// Form,
	Email
}