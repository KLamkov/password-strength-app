import { useState } from "react";

import "./PasswordInput.css"

const PasswordInput = ({ setPassword }) => {
	const [localPassword, setLocalPassword] = useState('');
	return (
		<div className='password-group'>
		<h3>Enter the Password</h3>
		<input
			type="password"
			className="password-input"
			placeholder="Password"
			value={localPassword}
			onChange={(event) => {
				setLocalPassword(event.target.value);
				setPassword(event.target.value);
			}}
		/>
		</div>
	);
};

export default PasswordInput;