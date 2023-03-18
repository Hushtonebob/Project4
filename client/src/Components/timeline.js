
function Timeline(){


    return(
<div className="postBox">
    <div className="userInfo">
        <img id="profilePic" src={"https://media.istockphoto.com/vectors/television-color-test-pattern-vector-id948835144?b=1&k=20&m=948835144&s=612x612&w=0&h=z7K9zGt-BF47hD8NhBEshpLYURqEC3RQWUqUiAKOzTY="} alt=""></img>
        <h1 id="username">Username</h1>
    </div>
    <div className="postCotent">
        <p id="post">Post content </p>
    </div>  
    <div className="Pictures">
        {<img id="picture" src={"https://kleypot.com/content/images/2019/08/20190814_160859.jpg"} alt="This failed to load" />}
        {true ? null :<img id="picture2" src={"blam"} alt="This failed to load" />}
    </div>
    <div className="numbers">
        <ul id="numberLikes">numbers placeholder</ul>
    </div>    
</div>   
    )
};
export default Timeline;