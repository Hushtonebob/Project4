import {useState} from "react";
import CreateNewUser from "./createNewUser";

function SignIn() {

const [hideCreate, setHideCreate] = useState(true);
const handleCreate = () => {hideCreate === true ? setHideCreate(!hideCreate) : console.log("blam")};

const handleSignIn = () => {
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username}),
    })
    .then((res)=>res.json())
    .then((user)=>onLogin(user));

}

    return (
<div className="signInDiv" >
    <div className="userSignIn">
        <div id="inputs">
            <input id="usernameSignIn"
            type="text" 
            placeholder="Username"
            onIn
            ></input>
            <div id="spacingDiv"></div>
            <input id="passwordSignIn" type="text" placeholder="Password"></input>
            <div id="spacingDiv"></div>
            <button id="signInBtn" onClick={handleSignIn}>Sign In</button>
            <div id="spacingDiv"></div>
            <p id="createButton" onClick={handleCreate}>Create an account</p>
        </div>
    </div>
    <CreateNewUser 
          hideCreate={hideCreate}
          setHideCreate={setHideCreate} />
</div>
)
}

export default SignIn;