
function Posts(){


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
        <img id="picture" src={"https://kleypot.com/content/images/2019/08/20190814_160859.jpg"} alt="This failed to load" />
        <p id="picInfo">This is pedal board</p>
        <img id="picture2" src={"https://loviesguitars.com/wp-content/uploads/2020/02/IMG_2169.jpg"} alt="This failed to load" />
        <p id="picInfo">This is a guitar</p>
    </div>
    <div className="responses">
        <ul id="numberLikes">numbers placeholder</ul>
        <img id="clearHeart" src="/Users/bobbydeluna/Development/code/Phase 4/project-template-react-rails-api/clearHeart.png" alt="This failed"></img>
    </div>    
</div>   
    )
};
export default Posts;