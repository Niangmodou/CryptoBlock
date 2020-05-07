import React from 'react';

const Buttons = (props) => {

	const {onRouteChange}= props;

	return(
		<div className="btnRegister">
				<input onClick={() => onRouteChange('dashboard')}
					   type="submit" 
					   value="Register" 
					   className="centerRegister ButtonRegister" />
		</div>
		);
}

export default Buttons;