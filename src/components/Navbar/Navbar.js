import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
	const [show, setshow] = useState(true);
	const handleClick = () => {
		setshow(!show);
	};
	const menuList = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "features",
			url: "/features",
		},
		{
			title: "Pricing",
			url: "/pricing",
		},
		{
			title: "testimonials",
			url: "/testimonials",
		},
		{
			title: "demo",
			url: "/demo",
		},
	];
	// const lists = menuList.map(({ url, title }, index) => {
	// 	return (
	// 		<li key={index}>
	// 			<Link to={url}>{title}</Link>
	// 		</li>
	// 	);
	// });
	const lists = menuList.map((e,index) => {
		return (
			<li key={index}>
				<NavLink activeClassName="selected" exact to={e.url}>{e.title}</NavLink>
			</li>
		);
	});
	
	return (
		<nav>
			<div className="logo">
				<h1>Bashir</h1>
			</div>
			<div onClick={handleClick} className="menuIcon">
				<i className={show ? "fas fa-bars" : "fas fa-times"}></i>
			</div>
			<div className={show ? "link" : "link close"}>{lists}</div>
		</nav>
	);
}
export default Navbar;
