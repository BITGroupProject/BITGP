import React from "react";
import "./searchError.css";
import Sadness from "./sadness.png"

const Error = () => {
    return (
        <div className="error">
            <p>OOPS...</p>
            <div className="image">
                <img src={Sadness} alt="disappointed cartoon character"/>
            </div>
            <p>We couldn't find what you were looking for. Please try with another criteria.</p>
        </div>
    )
}

export default Error
