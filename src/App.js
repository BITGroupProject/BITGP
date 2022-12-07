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

function App() {
	const [allCandidates, setAllCandidates] = useState([]);
	const [allReports, setAllReports] = useState([]);
	const [token, setToken] = useState(
		localStorage.getItem("token") ? localStorage.getItem("token") : ""
	);

	useEffect(() => {
		setAllCandidates(candidates);
		setAllReports(reports);
	}, []);

	return (
		<>
			<ApplicationProvider
				value={{
					allCandidates,

					allReports,
					setAllReports,

					token,
					setToken,
				}}
			>
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>
					<Route path="/home">
						<HomePage />
					</Route>
					<Route path="/reports">
						<AllReports />
					</Route>
					<Route path="/wizard">
						<Wizard />
					</Route>
					<Route
						path="/details/:id"
						render={(routerObject) => (
							<DetailPage id={routerObject.match.params.id} />
						)}
					/>

					<Route path="*">
						<div>Error Page</div>
					</Route>
				</Switch>
			</ApplicationProvider>
		</>
	);
}

export default App;
