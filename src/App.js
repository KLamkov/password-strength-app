import { useState } from "react";

import PasswordStrengthCheck from "./components/PasswordStrengthCheck";

import './App.css';


function App(){
const [password, setPassword] = useState('');

return(
	<div className="container">
		<div className='password-group'>
			<h3>Enter the Password</h3>
			<input type="password" 
				className="password-input" 
				placeholder="Password"
				onChange={(event) => {
					setPassword(event.target.value);
				}}/>
			<PasswordStrengthCheck password={password}/>
		</div>
	</div>
);
}

export default App;
