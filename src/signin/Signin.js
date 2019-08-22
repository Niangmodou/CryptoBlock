import React from 'react';
import Header from './components/Header'
import TextField from './components/TextField'
import './Signin.css';

const Signin = (props) => {

	const {onRouteChange} = props;

	return(
		<div className="pageSignin">
			<Header />
			<TextField 
				onRouteChange={onRouteChange}
			/>
		</div>
		);

}

export default Signin;

