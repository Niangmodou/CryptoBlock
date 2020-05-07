import React, {Component} from 'react';
import Header from './components/Header'
import TextField from './components/TextField'
import './Signin.css';

class Signin extends Component{
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	render(){
		const {onRouteChange} = this.props;

		return(
			<div className="pageSignin">
				<Header />
				<TextField 
					onRouteChange={onRouteChange}
					onSumbitSignIn = {onSumbitSignIn()}
				/>
			</div>
		);
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSumbitSignIn = () => {
		console.log(this.state);
	}
}

export default Signin;

