import React from 'react';
import Header from './components/Header.js';
import Textfield from './components/Textfield.js';
import './register.css'

const Register = (props) => {

	const {onRouteChange} = props;

	return(
		<div className="register-pageRegister">
			<Header />
			<Textfield 
				onRouteChange = {onRouteChange}
			/>
		</div>
		);
}

export default Register;