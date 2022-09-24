import { useRef } from "react";
import "../navbar.css";
import "../logo.css";

//This file handles the navbar that is seen at the top of the website.
// Since this is a dummy navbar, I have not added any routing and instead used the useRef react hook. 
//I made tabs for Home, Menu, Contact Us, and About. I also imported the Quant logo in the top right corner :)
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