import "./App.css";
import Header from "./Component/Header/Header";
import { Switch, Route } from "react-router-dom";
import LogInSignUp from "./Component/Login/LogInSignUp";

function App() {
	return (
		<main className="App">
			<Switch>
				<Route path="/login" exact component={LogInSignUp} />
				<Route path="/home" exact component={Header} />
			</Switch>
		</main>
	);
}

export default App;
