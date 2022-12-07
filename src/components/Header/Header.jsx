import React from "react";
import "./header.css";
import Button from "../Button/Button";
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <header>
            <span>Interviews Reports</span>
            <Link to="/home">Candidates</Link>
        </header>
    )
}

export default Header
