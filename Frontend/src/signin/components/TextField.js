import React from 'react';
import Buttons from './Buttons'

const TextField = (props) => {

	const {onRouteChange} = props;

	return (
		<article class="mw5 mw6-ns center pt4">
  			<div class="aspect-ratio aspect-ratio--4x3 mb4">

	    			<form className="containerSignin aspect-ratio--object cover">
	    				<div className="oneSignin center v-mid">
	    					<div>
	    					</div>

	    					<div className="fnameSignin">
					        	<label>
					          		Email<br />
					          		<input type="text" className="inputSignin"/><br />
					        	</label>
				        	</div>

				        	<div>
	    					</div>
		        		</div>
	        		
		        		<div className="twoSignin center">
			        		<div>
	    					</div>

	    					<div className="lnameSignin">
					        	<label>
					          		Password<br />
					          		<input type="text" className="inputSignin"/><br />
					        	</label>
				        	</div>
				        	
				        	<div>
	    					</div>
	        			</div>

	        			<Buttons 
	        				onRouteChange={onRouteChange}
	        			/>

	    			</form>


  			</div>

		</article>
		);
}

export default TextField; 


