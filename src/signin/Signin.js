import React from 'react';
import Header from './components/Header'
import TextField from './components/TextField'
import Buttons from './components/Buttons'
import './Signin.css';

//'src/signin/components/Header.js'

const Signin = () => {

	return(
		<div>
			<Header />

			<article class="signin center mw5 mw6-ns br3 hidden ba b--black-10 mv4">

			  	<TextField />

			  	<Buttons / >
			</article>

		</div>
		);

}

export default Signin;

