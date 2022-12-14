import React, { useContext } from "react";
import "./header.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { applicationContext } from "../../context";

const Header = () => {
	const { setToken } = useContext(applicationContext);
	const history = useHistory();
	const location = useLocation();

	const logout = () => {
		setToken("");
		localStorage.removeItem("token");
		history.push("/");
	};

	return (
		<header className="main-header">
			<span>Blazing fast</span>
			<nav>
				<Link
					to="/home"
					className={location.pathname === "/home" ? "active" : ""}
				>
					Candidates
				</Link>
				<Link
					to="/reports"
					className={location.pathname === "/reports" ? "active" : ""}
				>
					Reports
				</Link>
				<Link
					to="/wizard"
					className={location.pathname === "/wizard" ? "active" : ""}
				>
					Create report
				</Link>
			</nav>
			<Link to="/" onClick={logout}>
				Sign out
			</Link>
		</header>
	);
};

export default Header;
