import React from 'react';
import Buttons from './Buttons';

const Textfield = (props) => {

	const {onRouteChange} = props;

	return (
		<form className="containerRegister page-containerRegister center">

	  		<div className="first-nameRegister">
				<label>
					First Name<br />
					<input type="text" className="inputRegister"/><br />
				</label>
			</div>

			<div className="last-nameRegister">
				<label>
					Last Name<br />
					<input type="text" className="inputRegister"/><br />
				</label>
	  		</div>

	  		<div className="emailRegister">
				<label>
					Email<br />
					<input type="text" className="inputRegister"/><br />
				</label>
	  		</div>

	  		<div className="passwordRegister">
				<label>
					Password<br />
					<input type="text" className="inputRegister"/><br />
				</label>
	  		</div>

	  		<div className="button-containerRegister center v-alignRegister">
	  			<Buttons 
	  				onRouteChange={onRouteChange}
	  			/>
	  		</div>
  		</form>
		);
}

export default Textfield;



