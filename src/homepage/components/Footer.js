import React from 'react';
import Buttons from './Buttons';

const Footer = (props) => {

	const {onRouteChange} = props;

	return(
		<div className="footerHomepage">
			<Buttons onRouteChange={onRouteChange}/>
		</div>
		);
}

export default Footer;