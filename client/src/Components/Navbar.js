import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className="Navbar">
            <div className="list">
                <ul><Link id="homeNav" to="/home">Home</Link></ul>
                <ul><Link id="profileNav" to="/profile">Profile</Link></ul>
                <ul><Link id="groupsNav" to="/groups">Groups</Link></ul>
                <ul><Link id="aboutNav" to="/about">About</Link></ul>
                <ul><Link id="loginNav" to="/">test</Link></ul>
            </div>
        </nav>
    )
};

export default NavBar