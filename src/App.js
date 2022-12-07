import { ApplicationProvider } from "./context";
import { Route, Switch } from "react-router-dom";
import AllReports from "./pages/AllReports/AllReports";
import "./app.css";

function App() {
	return (
		<ApplicationProvider value={0}>
			<Switch>
				<Route exact path="/">
					<div className="App">
						<header className="App-header">Header</header>
						<AllReports />
					</div>
				</Route>
			</Switch>
		</ApplicationProvider>
	);
}

export default App;
