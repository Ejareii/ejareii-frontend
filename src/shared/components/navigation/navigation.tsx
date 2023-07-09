import { FC } from "react";
import Image from "next/image";

const Navigation:FC = () =>{

    return(
        	<nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* Website Logo */}
							<a href="#" className="flex items-center py-4 px-2">
								{/* <Image src="logo.png" alt="Logo" className="h-8 w-8 mr-2"> */}
								<span className="font-semibold text-gray text-lg">Navigation</span>
							</a>
						</div>
						{/* Primary Navbar items */}
						<div className="hidden md:flex items-center space-x-1">
							<a href="" className="py-4 px-2 text-primary border-b-4 border-primary font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-gray font-semibold hover:text-primary transition duration-300">Services</a>
							<a href="" className="py-4 px-2 text-gray font-semibold hover:text-primary transition duration-300">About</a>
							<a href="" className="py-4 px-2 text-gray font-semibold hover:text-primary transition duration-300">Contact Us</a>
						</div>
					</div>
					{/* Secondary Navbar items */}
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray rounded hover:bg-primary hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-primary rounded hover:bg-primary-400 transition duration-300">Sign Up</a>
					</div>
					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						{/* <svg className=" w-6 h-6 text-gray hover:text-primary "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg> */}
					</button>
					</div>
				</div>
			</div>
			{/* mobile menu */}
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-primary font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-primary transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-primary transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-primary transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			<div className="h-full border-2 border-gray-200
                border-opacity-60 rounded-lg
                bg-white
                overflow-hidden">
 
        <div className="p-6 hover:bg-primary
                    hover:text-white transition
                    duration-300 ease-in">
 
            <h1 className="text-2xl font-semibold mb-3">
                Hover
            </h1>
        </div>
    </div>
		</nav>
    )
}

export default Navigation;