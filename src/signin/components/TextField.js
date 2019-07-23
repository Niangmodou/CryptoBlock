import React from 'react';

const TextField = () => {

	return (
		<form className="Form center">
	        <label>
	          First Name:<br />
	          <input type="text"/><br />
	        </label>

	        <label>
         	 Last Name:<br />
          	<input type="text"/><br />
        	</label>

        	<input type="submit" value="Sign In" /><br />
        	<input type="submit" value="Register" />
      </form>
		);
}

export default TextField;