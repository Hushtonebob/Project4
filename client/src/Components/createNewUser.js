import {useState} from "react";

function CreateNewUser({hideCreate,setHideCreate,username, setUsername}){

const [passwordCheck, setPasswordCheck] = useState("");
const [password, setPassword] = useState("");

const handleCreate = () => {
    if(password === passwordCheck && username !== ""){ 
        setUsername(""); setPassword(""); setPassword("");
        setHideCreate(!hideCreate); console.log("Created!");
    } else {
        alert("Please ensure that the passwords are matching, or please create a username");
    }
};
    return (
        <div id="newUserContainer" hidden={hideCreate}>
            <h1 id="header">Create an account</h1>
            <button id="hideCreate" onClick={()=>setHideCreate(!hideCreate)}>X</button>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>{console.log(e.target.value);setUsername(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Confirm Password" value={passwordCheck} onChange={(e)=>{setPasswordCheck(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <select id="colorSelect">
                <option>Profile color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
                <option>Purple</option>
                <option>Orange</option>
                <option>Pink</option>
                <option>White</option>
                <option>Black</option>
                <option>Grey</option>
            </select>
            <div id="spacingDiv"></div>
            <button onClick={handleCreate}>Create Account</button>
        </div>
    )
};

export default CreateNewUser