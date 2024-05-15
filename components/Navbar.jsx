"use client"
import React, { useState } from "react"
import Link from "next/link"
import NavLink from "./NavLink"
import { CiMenuFries } from "react-icons/ci"
const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "projects",
	},
	{ title: "Blog", path: "#blog" },
	{
		title: "Contact",
		path: "#contact",
	},
]

const NavBar = () => {
	const [menu, setMenu] = useState(false)
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 p-3">
			<div className="flex flex-wrap items-start justify-between mx-auto p-4">
				<Link href={"/"} className="text-3xl text-white font-semibold">
					LOGO
				</Link>
				<div className="menu hidden lg:block md:block">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
				<div className="menu lg:hidden md:hidden">
					<CiMenuFries
						onClick={() => {
							setMenu(!menu)
							console.log(menu)
						}}
					/>
					{menu && (
						<div className="fixed mt-6 left-0 bg-[#121212e2] p-10 h-full w-full ">
							<ul className="flex flex-col justify-center align-middle gap-10">
								{navLinks.map((link, index) => (
									<li key={index}>
										<NavLink
											href={link.path}
											title={link.title}
										/>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
