import React,{Component} from 'react';
import Signin from './signin/Signin';
import Register from './register/Register';
import Homepage from './homepage/Homepage';
import Dashboard from './dashboard/Dashboard';
import './App.css';

class App extends Component {
	constructor(){
		super();

		this.state = {
			route: 'home'
		}
	}

	

	onRouteChange = (route) => {
		this.setState({route: route})
	}

	render(){
		switch(this.state.route){
			case 'home':
				return(<Homepage onRouteChange={this.onRouteChange}/>);

			case 'signin':
				return(<Signin onRouteChange={this.onRouteChange}/>);

			case 'register':
				return(<Register onRouteChange={this.onRouteChange}/>)

			case 'dashboard':
				return(<Dashboard onRouteChange={this.onRouteChange}/>)

			default:
				return(<Homepage onRouteChange={this.onRouteChange}/>);

		}
	}
}


export default App;
