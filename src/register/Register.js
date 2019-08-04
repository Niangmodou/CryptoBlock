import React from 'react';
import Header from './components/Header.js';
import Textfield from './components/Textfield.js';
import Buttons from './components/Buttons.js'
import './register.css'

const Register = () => {
	return(
		<div className="register-page">
			<Header />
			<Textfield />
		</div>
		);
}

export default Register;