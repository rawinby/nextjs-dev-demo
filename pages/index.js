import React , { Component } from "react";
import PropTypes from "prop-types";
import Head from 'next/head';
import Header from "../components/Layout/Header/Header";


class Index extends Component {

	render(){
		return (
			<div className="container" >
			
			<Head>
				<title>หน้าแรก</title>
			</Head>
				<div className="row">
					<div className="col-sm">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item active" aria-current="page">Home</li>
							</ol>
						</nav>
						<p>Hello</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Index;