function SignIn({hideCreate, setHideCreate}) {

const handleSignIn = () => console.log("Signed in");
const handleCreate = () => {hideCreate === true ? setHideCreate(!hideCreate) : console.log("blam")};

    return (
<div className="signInDiv" hidden>
    <div className="userSignIn">
        <div id="inputs">
            <input id="usernameSignIn"
            type="text" 
            placeholder="Username"
            ></input>
            <div id="spacingDiv"></div>
            <input id="passwordSignIn" type="text" placeholder="Password"></input>
            <div id="spacingDiv"></div>
            <button id="signInBtn" onClick={handleSignIn}>Sign In</button>
            <div id="spacingDiv"></div>
            <p id="createButton" onClick={handleCreate}>Create an account</p>
        </div>
    </div>
</div>
)
}

export default SignIn;