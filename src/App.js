import "./app.css";
import { ApplicationProvider } from "./context";

import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<ApplicationProvider>
			<Switch>
				<Route exact path="/">
					<div className="App">
						<header className="App-header">Header</header>
					</div>
				</Route>
			</Switch>
		</ApplicationProvider>
	);
}

export default App;
