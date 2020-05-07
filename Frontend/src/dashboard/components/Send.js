import React from 'react';
import Dropdown from './Dropdown';

const Send = () =>{

	return (
		<div className="sendDashboard">
			<Dropdown />

			<form className="dataDashboard center ">
				<input className="valueInputDashboard" type="text" name="Enter a Value"/><br/> 
				<div className="send-btn-contDashboard center">
					<input className = "send-btnDashboard" type="submit" value="Submit" />
				</div>
			</form>
		</div>
		);
}

export default Send;