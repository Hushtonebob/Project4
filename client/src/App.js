import React from "react";
import './StyleSheets/App.css';
import './StyleSheets/SignIn.css';
import './StyleSheets/CreateNewUser.css';
import './StyleSheets/Posts.css';
import './StyleSheets/Navbar.css';
import './StyleSheets/Profile.css';
import './StyleSheets/Group.css';
import SignIn from './Components/signIn';
import NavBar from "./Components/Navbar";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import Group from "./Components/Group";
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
        <Route path="groups" element = {<Group />} />
      </Routes>
    </div>
  );
}

export default App;
