import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { applicationContext } from "../../context";

function ProtectedRoute({ component: Component, ...restOfProps }) {
	const { token, isAdmin } = useContext(applicationContext);

	return (
		<Route
			{...restOfProps}
			render={(props) =>
				token ? (
					isAdmin ? (
						<Component {...props} />
					) : (
						<Redirect to="/error" />
					)
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
}

export default ProtectedRoute;
