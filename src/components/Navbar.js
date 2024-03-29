import AOS from "aos";
import React from "react";
import menu from "../assets/images/menu.png"
import { Link } from "react-router-dom";

AOS.init({
    duration: 100
})


const Navbar = () => {
    const handleClick = () => {
        const element = document.querySelector("#navContent");
        element.classList.toggle("hidden");
      };

      return ( 
        <div data-aos="fade-down">
            <nav className="fixed py-2 w-screen lg:px-10 sm:px-10 px-2 sm:flex justify-between border-gray-600 z-10 bg-gray" 
            style={{
                "background": "#282c34",
                "transition": "all 3s ease-out"
                }}>
                <div className="flex px-4 justify-between">
                    <p className="text-white py-4">
                        devteni
                    </p>
                <button
                    className="text-blue-700 text-3xl sm:hidden block focus:outline-none"
                    onClick={handleClick}
                    >
                    <img src={menu} alt="menu"/>
                </button>
                </div>
        
            <ul className="hidden sm:flex cursor-pointer text-white open"
            id="navContent">
                <li onClick={handleClick} className="py-5 px-5 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent" data-aos="fade-up">
                    <Link to="/">Home</Link>
                </li>
                <li onClick={handleClick} className="py-5 px-5 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent" data-aos="fade-up">
                    <Link to="/about">About</Link>
                </li>
                <li className="py-5 px-5 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent" data-aos="fade-up">
                    <a href="https://devteni.hashnode.dev" target="_blank" rel="noreferrer">Blog</a>
                </li>
            </ul>
            </nav>
        </div>
      );
}
export default Navbar;