import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className="Navbar">
            <Link id="home" to="/home">Home</Link>
            <Link id="login" to="/">LOGIN WILL NOT STAY HERE</Link>
            <Link id="group" to="/group"></Link>
        </nav>
    )
};

export default NavBar