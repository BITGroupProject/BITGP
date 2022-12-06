import "./app.css";
import { ApplicationProvider } from "./context";

import { Route, Switch } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import { useEffect, useState } from "react";
import { customers, reports } from "./data";

function App() {
	const [allCustomers, setAllCustomers] = useState([]);
	const [allReports, setAllReports] = useState([]);

	useEffect(() => {
		setAllCustomers(customers);
		setAllReports(reports);
	}, []);

	return (
		<ApplicationProvider
			value={{ allCustomers, allReports, setAllReports }}
		>
			<Switch>
				<Route exact path="/">
					<div className="App">
						<header className="App-header">Header</header>
					</div>
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
