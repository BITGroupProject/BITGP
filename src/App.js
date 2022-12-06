import "./App.css";
import { ApplicationProvider } from "./context";
import { Route, Switch } from "react-router-dom";
import Wizard from "./pages/Wizard/Wizard";

function App() {
  return (
    <ApplicationProvider value={0}>
      <Switch>
        <Route exact path="/">
          {/* <Route exact path="/wizard"> */}
          <Wizard></Wizard>
        </Route>
      </Switch>
    </ApplicationProvider>
  );
}

export default App;
