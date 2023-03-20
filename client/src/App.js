import React from "react";
import './StyleSheets/App.css';
import './StyleSheets/SignIn.css';
import './StyleSheets/CreateNewUser.css';
import './StyleSheets/Posts.css';
import SignIn from './Components/signIn';
import NavBar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <h1 id="header1">Project</h1>
      <NavBar />
      <Routes>
        <Route path="/" element = {<SignIn />}/>
            <Route path="home" element = {<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
