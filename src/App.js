import { ApplicationProvider } from "./context";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Switch } from "react-router-dom";
import AllReports from "./pages/AllReports/AllReports";
import Wizard from "./pages/Wizard/Wizard";
import "./app.css";

import DetailPage from "./pages/DetailPage/DetailPage";
import { useEffect, useState } from "react";
import { candidates, reports } from "./data";

function App() {
	const [allCandidates, setAllCandidates] = useState([]);
	const [allReports, setAllReports] = useState([]);

	useEffect(() => {
		setAllCandidates(candidates);
		setAllReports(reports);
	}, []);

	return (
		<ApplicationProvider
			value={{ allCandidates, allReports, setAllReports }}
		>
			<Switch>
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
			</Switch>
		</ApplicationProvider>
	);
}

export default App;
