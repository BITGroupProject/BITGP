import { ApplicationProvider } from "./context";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Switch } from "react-router-dom";
import AllReports from "./pages/AllReports/AllReports";
import "./app.css";

function App() {
	return (
		<ApplicationProvider value={0}>
			<Switch>
				<Route exact path="/home">
					<HomePage />
				</Route>

				<Route path="/reports">
					<AllReports />
				</Route>
			</Switch>
		</ApplicationProvider>
	);
}

export default App;
