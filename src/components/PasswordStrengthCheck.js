import React from 'react';
import { useEffect } from 'react'; 

import "./PasswordStrengthCheck.css"

const PasswordStrengthCheck = ({password}) => {
    function getPasswordStrength(password) {
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasDigits = /\d/.test(password);
        const hasSymbols = /[^\w\s]/.test(password);
        
        if (password.length == 0) {
            return "empty"
        } else if (password.length < 8) {
            return "wrong"
        } else if ((!hasLetters && hasDigits && hasSymbols) ||
                (hasLetters && !hasDigits && hasSymbols) ||
                (hasLetters && hasDigits && !hasSymbols)) {
        return "medium";
        } else  if ( hasDigits && hasLetters && hasSymbols){
        return "strong";
        } else {
            return "easy"
        }
    }
    const PasswordStrength = getPasswordStrength(password)
    

    useEffect(() => {
        const barOne = document.querySelector(".bar-one");
        const barTwo = document.querySelector(".bar-two");
        const barThree = document.querySelector(".bar-three");

        barOne.classList.remove("grey", "red", "yellow", "green");
        barTwo.classList.remove("grey", "red", "yellow", "green");
        barThree.classList.remove("grey", "red", "green");
        
        if (PasswordStrength === "empty") {
            barOne.classList.add("grey");
            barTwo.classList.add("grey");
            barThree.classList.add("grey");
        } else if (PasswordStrength === "wrong") {
            barOne.classList.add("red");
            barTwo.classList.add("red");
            barThree.classList.add("red");
        } else if (PasswordStrength === "easy") {
            barOne.classList.add("red");
            barTwo.classList.add("grey");
            barThree.classList.add("grey");
        } else if (PasswordStrength === "medium") {
            barOne.classList.add("yellow");
            barTwo.classList.add("yellow");
            barThree.classList.add("grey");
        } else if (PasswordStrength === "strong") {
            barOne.classList.add("green");
            barTwo.classList.add("green");
            barThree.classList.add("green");
        } else {
            console.error("Invalid password strength")
        }
    }, [PasswordStrength])    

    return (
        <div className='progress-bars'>
            <div className='progress-bar bar-one'></div>
            <div className='progress-bar bar-two'></div>
            <div className='progress-bar bar-three'></div>
        </div>
    )
}

export default PasswordStrengthCheck