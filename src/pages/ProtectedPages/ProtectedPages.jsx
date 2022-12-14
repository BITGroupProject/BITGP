import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { applicationContext } from "../../context";

import AllReports from "pages/AllReports/AllReports";
import Homepage from "pages/HomePage/HomePage";
import Wizard from "pages/Wizard/Wizard";
import DetailPage from "pages/DetailPage/DetailPage";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";

function ProtectedPages() {
	const { token } = useContext(applicationContext);

	return (
		<>
			<Header />

			<Route
				exact
				path="/home"
				render={() => (token ? <Homepage /> : <Redirect to="/" />)}
			/>
			<Route
				exact
				path="/reports"
				render={() => (token ? <AllReports /> : <Redirect to="/" />)}
			/>
			{/* Higher order components */}
			<ProtectedRoute exact path="/wizard" component={Wizard} />

			{token && (
				<Route
					exact
					path="/details/:id"
					render={(routerObject) => (
						<DetailPage id={routerObject.match.params.id} />
					)}
				/>
			)}

			<Footer />
		</>
	);
}

export default ProtectedPages;
