import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.js";
import "./App.css";
import Demo from "./pages/Demo";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import testimonials from "./pages/Testimonials";
const App = () => {
	return (
		<div>
			<div className="container">
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/demo" component={Demo} />
						<Route exact path="/features" component={Features} />
						<Route exact path="/pricing" component={Pricing} />
						<Route exact path="/testimonials" component={testimonials} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
