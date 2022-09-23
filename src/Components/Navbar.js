import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../navbar.css";
import "../logo.css";

function Navbar() {
	const navRef = useRef();

	return (
		<header>
			<h3>
                <img className = 'logo' src= "https://media-exp1.licdn.com/dms/image/C4E0BAQHKHFJmtpRn9g/company-logo_200_200/0/1659830999836?e=2147483647&v=beta&t=Q77_7iuiLSmLx_bPdz42WPlb9XZCbUoqduJa41grN1M" />
            </h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
                <a></a>
				<a href="/#">Menu</a>
                <a></a>
				<a href="/#">About</a>
                <a></a>
				<a href="/#">Contact Us</a>
			</nav>
		</header>
	);
}

export default Navbar;