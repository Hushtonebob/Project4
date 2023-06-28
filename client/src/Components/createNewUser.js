import {useState} from "react";

function CreateNewUser({hideCreate,setHideCreate}){

const [passwordCheck, setPasswordCheck] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const [profilePic, setProfilePic] = useState("");

const reset = () => {
    setUsername("");
    setPassword("");
    setPasswordCheck(""); 
    setProfilePic(""); 
    setHideCreate(!hideCreate);
}


const handleCreate = () => {
    if(password === passwordCheck){
        fetch(`http://127.0.0.1:3000/users`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                username:username,
                password_digest:password,
                profilePic:profilePic
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors){
                console.log(data.errors[0]); alert(data.errors[0]); reset()
            }
            else {
                console.log(data); alert(`User ${data.username} was created!`); reset()
            }
            }
        ) 
    }
    else {
        alert("Please ensure that the passwords are matching and try again.");
        reset()
    }
};
    return (
        <div id="newUserContainer" hidden={hideCreate}>
            <h1 id="header">Create an account</h1>
            <button id="hideCreate" onClick={()=>setHideCreate(!hideCreate)}>X</button>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>{console.log(e.target.value); setUsername(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Password" value={password} onChange={(e)=>{console.log(e.target.value); setPassword(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Confirm Password" value={passwordCheck} onChange={(e)=>{console.log(e.target.value);setPasswordCheck(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <input type="text" placeholder="Profile Picture Url" value={profilePic} onChange={(e)=>{console.log(e.target.value);setProfilePic(e.target.value)}}></input>
            <div id="spacingDiv"></div>
            <button onClick={handleCreate}>Create Account</button>
        </div>
    )
};

export default CreateNewUser