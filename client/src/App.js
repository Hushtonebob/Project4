import React from "react";
import './StyleSheets/App.css';
import './StyleSheets/SignIn.css';
import './StyleSheets/CreateNewUser.css';
import './StyleSheets/Posts.css';
import './StyleSheets/Navbar.css';
import './StyleSheets/Profile.css'
import SignIn from './Components/signIn';
import NavBar from "./Components/Navbar";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 id="header1">Gear Talk</h1>
      <NavBar />
      <Routes>
        <Route path="/" element = {<SignIn />}/>
        <Route path="home" element = {<Posts />} />
        <Route path="profile" element = {<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
