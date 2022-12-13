import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import { applicationContext } from "../../context";
import { validateEmail } from "../../utils/utils";

import "./loginPage.css";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { setToken } = useContext(applicationContext);

	const history = useHistory();

	const updateToken = async (token) => {
		await setToken(token);
		localStorage.setItem("token", token);
		history.push("/home");
	};

	const login = () => {
		setIsSubmitted(true);

		// validate data
		if (!validateEmail(email)) {
			setIsSubmitted(false);
			return setErrorMessage("Wrong email address format!");
		}

		if (!password) {
			setIsSubmitted(false);
			return setErrorMessage("Please enter password");
		}

		// Lets make api folder with generic api.js and separate by file for loginApi.js candidateApi.js like wrapper functions
		// We can do this together on Monday

		fetch("https://node-api-krmk.onrender.com/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password, // ovde prosledjujemo email i password koji je ukucan
			}),
		})
			.then((response) => {
				console.log(response);
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
			<div id="loginPage">
				<BackgroundAnimation />
				<div className="login-wrapper bg-glass">
					<h2>Sign in</h2>
					<div className="">
						<label>
							Email
							<input
								type="email"
								value={email}
								onChange={(event) =>
									// lets validate this input fields on change event instead of click
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
						<button disabled={isSubmitted} onClick={login}>
							Sign in
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
