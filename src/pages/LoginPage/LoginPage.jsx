import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import { applicationContext } from "../../context";

import "./loginPage.css";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const { setToken } = useContext(applicationContext);

	const history = useHistory();

	const updateToken = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
		history.push("/home");
	};

	const validateEmail = (email) => {
		var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (email.match(mailFormat)) return true;

		return false;
	};

	const login = () => {
		// validate data
		if (!validateEmail(email))
			return setErrorMessage("Wrong email address format!");
		if (!password) return setErrorMessage("Please enter password");

		// our data that we send to backend
		const data = {
			email,
			password,
		};

		fetch("https://node-api-krmk.onrender.com/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			// if response is good do this
			.then((data) => updateToken(data.accessToken))
			// if response is not good do this
			.catch((error) => console.error(error));
	};

	return (
		<>
			<BackgroundAnimation />
			<div id="loginPage">
				<div className="login-wrapper bg-glass">
					<h2>Sign in</h2>
					<div className="">
						<label>
							Email
							<input
								type="email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)
								}
							/>
						</label>
					</div>

					<div>
						<label>
							Password
							<input
								type="password"
								value={password}
								onChange={(event) =>
									setPassword(event.target.value)
								}
							/>
						</label>
					</div>
					<div
						className="errorMessage"
						onClick={() => setErrorMessage("")}
					>
						{errorMessage}
					</div>
					<div>
						<button onClick={login}>Sign in</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
