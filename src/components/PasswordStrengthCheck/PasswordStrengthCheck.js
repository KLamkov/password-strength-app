import React from 'react';
import { useEffect } from 'react'; 

import ProgressBar from '../ProgressBars/ProgressBars';
import "./PasswordStrengthCheck.css"

const PasswordStrengthCheck = ({password}) => {
    function getPasswordStrength(password) {
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasDigits = /\d/.test(password);
        const hasSymbols = /[^\w\s]/.test(password);
    
        switch (true) {
        case password.length === 0:
            return "empty";
        case password.length < 8:
            return "wrong";
        case (!hasLetters && hasDigits && hasSymbols) ||
            (hasLetters && !hasDigits && hasSymbols) ||
            (hasLetters && hasDigits && !hasSymbols):
            return "medium";
        case hasDigits && hasLetters && hasSymbols:
            return "strong";
        default:
            return "easy";
        }
    }
    
    const PasswordStrength = getPasswordStrength(password);
    
    useEffect(() => {
    
    }, [PasswordStrength]);

    return (
        <div className='progress-bars'>
            <ProgressBar strength={PasswordStrength} barNumber={1} />
            <ProgressBar strength={PasswordStrength} barNumber={2} />
            <ProgressBar strength={PasswordStrength} barNumber={3} />
        </div>
    )
}

export default PasswordStrengthCheck;