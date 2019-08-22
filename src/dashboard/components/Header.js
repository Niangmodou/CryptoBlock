import React from 'react';

const Header = (props) => {

	const {onRouteChange} = props;

	return (
		<div className="headerDashboard">
			<h1 className="app-titleDashboard">CryptoBlock</h1>

			<input onClick= {() => onRouteChange('homepage')}type="submit" value="Sign Out" className="sign-outDashboard"/>
		</div>
		);
}

export default Header;