import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ links = [{ icon, label: "", path: "" }] }) {
	return (
		<nav className="navbar">
			<span className="navbar__logo">
				<img
					src="media/tweety.png"
					alt="logo"
				/>
				<p>Tweeter</p>
			</span>
			<hr />
			{links.map((el, i) => (
				<NavLink
					className={`navbar__link`}
					to={el.path}
					key={`navbar__link__${i}__${el.label}`}>
					{el.icon}{" "}
					<span className="navbar__link__text">{el.label}</span>
				</NavLink>
			))}

			<button className="btn btn--primary">Tweet</button>
		</nav>
	);
}
