import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './homepage.css'

const Homepage = (props) => {

	const {onRouteChange} = props;

	return (
		<div className="pageHomepage">
			<Header />
			<Footer 
			onRouteChange={onRouteChange}
			/>
		</div>
		);
}

export default Homepage;