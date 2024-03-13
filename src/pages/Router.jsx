import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Bookmarks from "./Bookmarks";
import Feed from "./Feed";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";
import App from "../App";
export const APP_ROUTES = [
	{
		label: "Feed",
		path: "/",
		element: Feed,
	},
	{
		label: "Notifications",
		path: "/notifications",
		element: Notifications,
	},
	{
		label: "Messages",
		path: "/messages",
		element: Messages,
	},
	{
		label: "Bookmarks",
		path: "/bookmarks",
		element: Bookmarks,
	},
	{
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
			{APP_ROUTES.map((AppRoute, i) => (
				<Route
					element={<AppRoute.element />}
					path={AppRoute.path}
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
