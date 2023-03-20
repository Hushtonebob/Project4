import Posts from "./Posts"

function Profile(){
return(
    <div>
        <div className="profileCard">
            <h1 id="profileName">Username</h1>
            <img id="profilePicCard" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
            <div className="userGroups">
                <h1 id="groupListHeader">
                    Group List
                </h1>
                    <div className="groupList">
                        <ul>Guitars</ul>
                        <ul>Pedals</ul>
                        <ul>Amps</ul>
                    </div>

        </div>
        </div>
        <Posts />
    </div>
)
}

export default Profile;