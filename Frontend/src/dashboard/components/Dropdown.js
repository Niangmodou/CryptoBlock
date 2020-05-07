import React from 'react';

const Dropdown = () => {

	return(
		<div>

			<form>
	    		<select id="countryDashboard1" name="country">
	      			<option value="default">Select a user</option>
	      			<option value="user1">Mo</option>
	      			<option value="user2">The Boy</option>
	      			<option value='user3'>Self</option>
	      			<option value="user4">Yoyomama</option>
	    		</select>
	    	</form>

		</div>
		);
}

export default Dropdown;