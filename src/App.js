import "./App.css";
import Header from "./Component/Header/Header";
import { Switch, Route } from "react-router-dom";
import LogInSignUp from "./Component/Login/LogInSignUp";
import PrivateRouteComponent from "./Component/PrivateRouteComponent";
import AddPlant from "./Page/AddPlant.js";

function App() {
	return (
		<main className="App">
			<Switch>
				<Route path="/login" exact component={LogInSignUp} />
				<PrivateRouteComponent path="/" exact component={Header} />
				<PrivateRouteComponent path="/add-plant" exact component={AddPlant} />
			</Switch>
		</main>
	);
}

export default App;
