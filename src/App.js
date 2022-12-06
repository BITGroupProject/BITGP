import "./App.css";
import { ApplicationProvider } from "./context";
import HomePage from "./pages/HomePage/HomePage"

import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<ApplicationProvider>
			<Switch>
				<Route exact path="/">
					<div className="App">
						<HomePage />
					</div>
				</Route>
			</Switch>
		</ApplicationProvider>
	);
}

export default App;
