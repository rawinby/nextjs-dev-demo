import React, { Component } from "react";

class Error extends Component {

	static getInitialProps({ res, err }){
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render(){
		console.log(this.props.statusCode);
		return(
			
			<div className="container">
				<div className="text-center">
					<h3 className="text-danger">
						{this.props.statusCode ? 
							'An error ' + this.props.statusCode + ' occured on server':
							'An error occured on Client '
						}
					</h3>
				</div>
			</div>
			
		)
	}
}

export default Error;