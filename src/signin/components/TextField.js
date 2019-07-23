import React from 'react';
import Buttons from './Buttons'

const TextField = () => {

	return (
		<article class="mw5 mw6-ns center pt4">
  			<div class="aspect-ratio aspect-ratio--4x3 mb4">

	    			<form className="container aspect-ratio--object cover">
	    				<div className="one center v-mid">
	    					<div>
	    					</div>

	    					<div className="fname">
					        	<label>
					          		First Name:<br />
					          		<input type="text"/><br />
					        	</label>
				        	</div>

				        	<div>
	    					</div>
		        		</div>
	        		
		        		<div className="two center">
			        		<div>
	    					</div>

	    					<div className="lname">
					        	<label>
					          		Last Name:<br />
					          		<input type="text"/><br />
					        	</label>
				        	</div>
				        	
				        	<div>
	    					</div>
	        			</div>

	        			<Buttons />

	    			</form>


  			</div>

		</article>
		);
}

export default TextField; 


