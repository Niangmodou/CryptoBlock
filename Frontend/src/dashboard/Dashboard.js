import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Middle from './components/Middle';
import './dashboard.css';

const Dashboard = (props) => {

	const {onRouteChange} = props;

	return (
		<div className="dashboardDashboard">
			<Header 
				onRouteChange={onRouteChange}
			/>
			<Middle />
			<Footer />
		</div>
		);
}

export default Dashboard;