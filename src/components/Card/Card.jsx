import React from "react";
import "./card.css";


const Card = (candidate) => {

    return (
        <div className="card">
            <img src="https://commentpara.de/img/anonymous.svg" alt="candidate photo"/>
            <p>{candidate.candidate.name}</p>
            <p>{candidate.candidate.email}</p>
        </div>
    )
}

export default Card
