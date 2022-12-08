import React, { useContext } from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";
import { applicationContext } from "../../context";


const Header = () => {
    const { setToken } = useContext(applicationContext);
    const history = useHistory();

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        history.push("/");
    }


    return (
        <header>
            <span>Blazing fast</span>
            <div className="middle-buttons">
                <Link to="/home">Candidates</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/wizard">Create report</Link>
            </div>
            <Link to="/" onClick={logout}>Sign out</Link>
        </header>
    )
}

export default Header
