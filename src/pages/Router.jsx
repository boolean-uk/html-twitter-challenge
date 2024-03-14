import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Bookmarks from "./Bookmarks";
import Feed from "./Feed";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";
export const APP_ROUTES = [
	{
		icon: <i className="fa-solid fa-house"></i>,
		label: "Feed",
		path: "/",
		element: Feed,
	},
	{
		icon: <i className="fa-solid fa-bell"></i>,
		label: "Notifications",
		path: "/notifications",
		element: Notifications,
	},
	{
		icon: <i className="fa-solid fa-envelope"></i>,
		label: "Messages",
		path: "/messages",
		element: Messages,
	},
	{
		icon: <i className="fa-solid fa-bookmark"></i>,
		label: "Bookmarks",
		path: "/bookmarks",
		element: Bookmarks,
	},
	{
		icon: <i className="fa-solid fa-user"></i>,
		label: "Profile",
		path: "/profile",
		element: Profile,
	},
	// {
	// 	label: "More...",
	// 	path: "/others",
	// 	element: <></>,
	// },
];

export default function Router() {
	return (
		<Routes>
			{APP_ROUTES.map((el, i) => (
				<Route
					element={<RouteWrapper routeData={el} />}
					path={el.path}
					key={`app-route-${el.path}__${i}`}
				/>
			))}
			{/* <Route
				element={<Feed></Feed>}
				path="/"></Route>
			<Route
				element={<Messages></Messages>}
				path="/messages"></Route>
			<Route
				element={<Profile></Profile>}
				path="/profile"></Route> */}
		</Routes>
	);
}

function RouteWrapper({ routeData }) {
	return (
		<>
			<h1 className="page-indicator">{routeData.label}</h1>
			<routeData.element />
		</>
	);
}
