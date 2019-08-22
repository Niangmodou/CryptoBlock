import React from 'react';
import AccountInfo from './AccountInfo';
import Send from './Send';
import Request from './Request';

const Middle = () => {
	return (
		<div className="middleDashboard">
			<AccountInfo />
			<Send/>
			<Request />
		</div>
		);
}

export default Middle;