import React from 'react';

import "./ProgressBars.css"

const ProgressBar = ({ strength, barNumber }) => {
    const barClass = () => {
        switch (strength) {
            case "empty":
                return "grey";
            case "wrong":
                return "red";
            case "easy":
                return (barNumber === 1) ? "red" : "grey";
            case "medium":
                return (barNumber <= 2) ? "yellow" : "grey";
            case "strong":
                return "green";
            default:
                console.error("Invalid password strength");
                return "grey";
        }
    }

    return (
        <div className={`progress-bar bar-${barNumber} ${barClass()}`}></div>
    )
}

export default ProgressBar;