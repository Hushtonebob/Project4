import React from "react";
import './StyleSheets/App.css';
import './StyleSheets/SignIn.css';
import './StyleSheets/CreateNewUser.css';
import CreateNewUser from "./Components/createNewUser";
import SignIn from './Components/signIn';
import {useState} from "react";

function App() {

  const [hideCreate, setHideCreate] = useState(true);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <h1 id="header1">Project</h1>
      <CreateNewUser 
      hideCreate={hideCreate}
      setHideCreate={setHideCreate}
      username={username}
      setUsername={setUsername}
      />
      <SignIn 
      hideCreate={hideCreate}
      setHideCreate={setHideCreate}
      />
    </div>
  );
}

export default App;
