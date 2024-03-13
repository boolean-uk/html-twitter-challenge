import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ links = [{ label: "", path: "" }] }) {
	return (
		<nav className="navbar">
			<span>
				<img
					src=""
					alt="logo"
				/>
				<p>Daily Bugle</p>
			</span>
			<hr />
			{links.map((el, i) => (
				<NavLink
					className={`navbar__link`}
					to={el.path}
					key={`navbar__link__${i}__${el.label}`}>
					{el.label}
				</NavLink>
			))}

			<button className="btn btn--primary">Saw him!</button>
		</nav>
	);
}
