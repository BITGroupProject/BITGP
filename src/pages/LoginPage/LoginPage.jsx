import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import { applicationContext } from "../../context";

import "./loginPage.css";
const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { setToken } = useContext(applicationContext);

	const history = useHistory();

	const updateToken = (token) => {
		setToken(token);
		localStorage.setItem("token", token);

		setTimeout(() => {
			history.push("/home");
		}, 100);
	};

	const validateEmail = (email) => {
		var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (email.match(mailFormat)) return true;

		return false;
	};

	const login = () => {
		setIsSubmitted(true);

		// validate data
		if (!validateEmail(email))
			return setErrorMessage("Wrong email address format!");
		if (!password) return setErrorMessage("Please enter password");

		fetch("https://node-api-krmk.onrender.com/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((response) => {
				if (response.ok) return response.json();
				return Promise.reject("Wrong credentials!");
			})

			// if response is good do this
			.then((data) => updateToken(data.accessToken))

			// if response is not good do this
			.catch((error) => setErrorMessage(error))

			.finally((data) =>
				setTimeout(() => {
					setIsSubmitted(false);
				}, 500)
			);
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
								placeholder="example"
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
						{isSubmitted ? (
							<button disabled>Sign in</button>
						) : (
							<button onClick={login}>Sign in</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
