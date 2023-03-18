
function Timeline(){


    return(
        <div className="postBox">
    <div className="userInfo">
        <img id="profilePic" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
            <div className="username">
                <h1 id="username">Username</h1>
            </div>
        <div className="postContent">
            <p id="post">Post content</p>
        </div>  
    </div>
    <div className="Pictures">
        {true ? "":<img id="picture" src={"blam"} alt="This failed to load" />}
        {true ? "":<img id="picture2" src={"blam"} alt="This failed to load" />}
    </div>
    <div className="Icons">
        <input type="image" id="replies" src="replies.png" alt=""></input>
        <input type="image" id="retweet" src="retweet.png" alt=""></input>
        {true ? <input type="image" id="clearHeart" src="clearHeart.png" alt="" onChange={console.log("heart")}/> : <input type="image" id="clearHeart" src="redHeart.png" alt="" onClick={console.log("This has been liked")}/>}
    </div>
    <div className="numbers">
        <ul id="numberReplies"></ul>
        <ul id="numberRetweets"></ul>
        <ul id="numberLikes"></ul>
    </div>       
</div>   
    )
};
export default Timeline;