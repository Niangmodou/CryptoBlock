import React from 'react';
import Buttons from './Buttons';

const Textfield = () => {
	return (
		<form className="container page-container center">

	  		<div className="first-name">
				<label>
					First Name<br />
					<input type="text"/><br />
				</label>
			</div>

			<div className="last-name">
				<label>
					Last Name<br />
					<input type="text"/><br />
				</label>
	  		</div>

	  		<div className="email">
				<label>
					Email<br />
					<input type="text"/><br />
				</label>
	  		</div>

	  		<div className="password">
				<label>
					Password<br />
					<input type="text"/><br />
				</label>
	  		</div>

	  		<div className="button-container center v-align">
	  			<Buttons />
	  		</div>
  		</form>
		);
}

export default Textfield;



