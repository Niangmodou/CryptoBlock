import React from 'react';
import Dropdown from './Dropdown';

const Request = () =>{
	return (
		<div className="requestDashboard">
			<Dropdown />
			<form className="data2Dashboard center ">
				<input className="valueInput2Dashboard" type="text" name="Enter a Value"/><br/> 
				<div className="send-btn-cont2Dashboard center">
					<input className = "send-btn2Dashboard" type="submit" value="Submit" />
				</div>
			</form>
		</div>
		);
}

export default Request;