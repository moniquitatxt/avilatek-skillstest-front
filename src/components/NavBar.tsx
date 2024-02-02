"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsList } from "react-icons/bs";

interface NavItemProps {
	href: string;
	children: React.ReactNode;
}

const NavBar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		//TODO
	};
	return (
		//TODO
		<nav className="className=bg-transparent p-4">
			<div className="mx-auto flex justify-between items-center">
				<div className="flex space-x-4 items-center">
					<Image src="logo.svg" width={142} height={32} alt="logo" />
					<ul className="hidden md:flex space-x-6">
						<NavItem href="/">Home</NavItem>
						<NavItem href="/products">Products</NavItem>
						<NavItem href="/resources">Resources</NavItem>
						<NavItem href="/pricing">Pricing</NavItem>
					</ul>
				</div>
				<ul className="hidden md:flex space-x-6">
					<NavItem href="/login">Log in</NavItem>
					<li>
						<Link
							href="/signup"
							className="text-md font-semibold leading-6 hover:bg-purple-400 bg-purple-300 text-white py-2 px-4 rounded-md transition-all duration-100"
						>
							Sign in
						</Link>
					</li>
				</ul>
				<button className="md:hidden " onClick={toggleMenu}>
					<BsList style={{ fontSize: "24px" }} />
				</button>
			</div>
		</nav>
	);
};

const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
	return (
		<li className="text-gray-600">
			<Link
				className="text-md font-semibold leading-6 hover:text-gray-700  transition-all duration-300"
				href={href}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavBar;
