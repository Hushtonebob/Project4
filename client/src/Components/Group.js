import Posts from "./Posts";

function Group(){
return(
    <div>
    <div className="groupBox">
        <h1 id="groupName">Group Name</h1>
        <img id="profilePicCard" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
        <div className="userGroups">
            <h1 id="groupListHeader">User List</h1>
            <div className="userList">
                <ul>Hushtonebob</ul>
                <ul>KingBigDaddy</ul>
                <ul>Roxstar321</ul>
            </div>
        </div>
    </div>
    <Posts />
    </div>
    )
};

export default Group;