import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { applicationContext } from "../../context";

import "./loginPage.css";
const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { setToken } = useContext(applicationContext);

	const history = useHistory();

	const updateToken = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
		history.push("/home");
	};

	const login = () => {
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
			.then((data) => updateToken(data.accessToken))
			.catch((error) => console.error(error));
	};

	return (
		<>
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

					<div>
						<button onClick={login}>sign in</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
