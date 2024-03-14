import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Nav/Navbar";
import Router, { APP_ROUTES } from "./pages/Router";
import RightPane from "./pages/RightPane";

function App() {
	return (
		<>
			<Navbar links={APP_ROUTES} />

			<main>
				<Router />
			</main>

			<RightPane />
		</>
	);
}

export default App;
