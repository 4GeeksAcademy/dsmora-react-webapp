import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

	const location = useLocation();
    console.log(location);

	if(location.pathname === '/new-view') return null;

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
