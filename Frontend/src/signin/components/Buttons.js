import React from 'react';

const Buttons = (props) => {

	const {onRouteChange} = props;

	return (
		<div className="threeSignin center">

			<div className="btnsSignin">
				<input onClick={() => onRouteChange('dashboard')}type="submit" value="Sign In" className="center ButtonSignin b1Signin"/><br />
				<input onClick={() => onRouteChange('register')} type="submit" value="Register" className="center ButtonSignin b2Signin" />
			</div>
	    </div>
		);
}

export default Buttons;