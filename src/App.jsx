import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Nav/Navbar";
import Router, { APP_ROUTES } from "./pages/Router";

function App() {
	return (
		<>
			{/* side bar */}
			<Navbar links={APP_ROUTES}></Navbar>
			{/* Main */}
			<Router></Router>
			{/* Right side bar */}
			<div>
				<h1>Right side</h1>
			</div>
		</>
	);
}

export default App;
