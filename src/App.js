import { ApplicationProvider } from "./context";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Switch } from "react-router-dom";
import AllReports from "./pages/AllReports/AllReports";
import Wizard from "./pages/Wizard/Wizard";
import "./app.css";

import DetailPage from "./pages/DetailPage/DetailPage";
import { useEffect, useState } from "react";
import { candidates, reports } from "./data";
import LoginPage from "./pages/LoginPage/LoginPage";
import { parseJwt } from "./utils/utils";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
	const [allCandidates, setAllCandidates] = useState([]);
	const [allReports, setAllReports] = useState([]);
	const [token, setToken] = useState(
		localStorage.getItem("token") ? localStorage.getItem("token") : ""
	);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		setAllCandidates(candidates);
		setAllReports(reports);
	}, []);

	useEffect(() => {
		const parsedData = token && parseJwt(token);
		setIsAdmin(parsedData.email === "admin@admin.com");
	}, [token]);

	const apiUrl = "https://node-api-krmk.onrender.com/api"; // when using add /your-api-route

	return (
		<>
			<ApplicationProvider
				value={{
					allCandidates,

					allReports,
					setAllReports,

					token,
					setToken,

					setModalIsOpen,
					modalIsOpen,

					isAdmin,

					apiUrl,
				}}
			>
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>

					<Route exact path="/home">
						<HomePage />
					</Route>

					<Route exact path="/reports">
						<AllReports />
					</Route>

					<Route exact path="/wizard">
						<Wizard />
					</Route>

					<Route
						exact
						path="/details/:id"
						render={(routerObject) => (
							<DetailPage id={routerObject.match.params.id} />
						)}
					/>

					<Route path="*">
						<ErrorPage />
					</Route>
				</Switch>
			</ApplicationProvider>
		</>
	);
}

export default App;
