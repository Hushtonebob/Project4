import { Link } from "react-router-dom"
import { useState } from "react";

function GroupList() {

    //THIS ONE NEEDS TO BE REFACTORED USESING MAP

    const [join, setJoin] = useState(true);

return (
    <div>
        <div className="groupCard">
            <p id="groupInfo">This group is about guitars!</p>
            <Link id="linkToGroup" to="guitars">Guitars</Link>
            {join ? <div onClick={()=>setJoin(!join)} id="joinGroup">Click here to join this group</div>:<div onClick={()=>setJoin(!join)} id="alreadyJoined">Click here to leave this group</div>}
            <img id="groupPic" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
        </div>
        <div className="groupCard">
            <p id="groupInfo">This group is about guitar pedals!</p>
            <Link id="linkToGroup" to="pedals">Pedals</Link>
            {join ? <div onClick={()=>setJoin(!join)} id="joinGroup">Click here to join this group</div>:<div onClick={()=>setJoin(!join)} id="alreadyJoined">Click here to leave this group</div>}
            <img id="groupPic" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
        </div>
        <div className="groupCard">
            <p id="groupInfo">This group is about guitar amps!</p>
            <Link id="linkToGroup" to="amps">Amps</Link>
            {join ? <div onClick={()=>setJoin(!join)} id="joinGroup">Click here to join this group</div>:<div onClick={()=>setJoin(!join)} id="alreadyJoined">Click here to leave this group</div>}
            <img id="groupPic" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
        </div>
    </div>
)
};

export default GroupList;