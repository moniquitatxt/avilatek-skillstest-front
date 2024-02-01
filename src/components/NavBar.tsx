import Link from "next/link";

interface NavItemProps {
	href: string;
	children: React.ReactNode;
}

const NavBar: React.FC = () => {
	return (
		<nav className="className=bg-transparent p-4">
			<div className="container mx-auto flex justify-between items-center">
				<ul className="flex space-x-4">
					<NavItem href="/">Home</NavItem>
					<NavItem href="/products">Products</NavItem>
					<NavItem href="/resources">Resources</NavItem>
					<NavItem href="/pricing">Pricing</NavItem>
				</ul>
				<ul className="flex space-x-4">
					<NavItem href="/login">Log in</NavItem>
					<li>
						<Link
							href="/signup"
							className="text-md font-semibold leading-6 bg-purple-500 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition-all duration-300"
						>
							Sign in
						</Link>
					</li>
				</ul>
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
