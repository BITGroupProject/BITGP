import React from "react";
import { useHistory } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import "./errorPage.css";

const ErrorPage = () => {
	const history = useHistory();

	return (
		<>
			<BackgroundAnimation />
			<section id="errorPage">
				<div className="bg-glass">
					<h1>Oops!</h1>
					<h3>Error 404: Page not found</h3>
					<button
						className="bg-glass bg-glass--animated"
						onClick={history.goBack}
					>
						Go back
					</button>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
