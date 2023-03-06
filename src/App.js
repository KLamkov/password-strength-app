import { useState } from "react";

import PasswordStrengthCheck from "./components/PasswordStrengthCheck/PasswordStrengthCheck";
import PasswordInput from "./components/PasswordInput/PasswordInput";

import './App.css';


function App(){
const [password, setPassword] = useState('');

return(
	<div className="container">
			<PasswordInput setPassword={setPassword}/>
			<PasswordStrengthCheck password={password}/>
	</div>

);
}

export default App;
