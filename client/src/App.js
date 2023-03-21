import React from "react";
import {Route, Routes} from "react-router-dom";
import './StyleSheets/App.css';
import './StyleSheets/SignIn.css';
import './StyleSheets/CreateNewUser.css';
import './StyleSheets/Posts.css';
import './StyleSheets/Navbar.css';
import './StyleSheets/Profile.css';
import './StyleSheets/GroupMaker.css';
import './StyleSheets/GroupList.css'
import SignIn from './Components/signIn';
import NavBar from "./Components/Navbar";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import GroupMaker from "./Components/GroupMaker";
import GroupList from "./Components/GroupList";

function App() {
  return (
    <div className="App">
      <h1 id="header1">Gear Talk</h1>
      <NavBar />
      <Routes>
        <Route path="/" element = {<SignIn />}/>
        <Route path="home" element = {<Posts />} />
        <Route path="profile" element = {<Profile />} />
        <Route path="groups">
          <Route index element={<GroupList/>} />
          <Route path="guitars" element ={<GroupMaker />} />
          <Route path="pedals" element ={<GroupMaker />} />
          <Route path="amps" element ={<GroupMaker />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
