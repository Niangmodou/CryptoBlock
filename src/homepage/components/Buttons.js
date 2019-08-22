import React from 'react';

const Buttons = (props) => {

	const {onRouteChange} = props;

	return (
		<div>
			<div className="btnHomepage">
				<h1 className="footer-titleHomepage">Get Started Below</h1>
				<input onClick={() => onRouteChange('signin')} type="submit" value="Sign In" className="ButtonHomepage b1Homepage"/><br />
				<input onClick={() => onRouteChange('register')} type="submit" value="Register" className="ButtonHomepage b2Homepage" />
			</div>
		</div>
		);
}

export default Buttons;