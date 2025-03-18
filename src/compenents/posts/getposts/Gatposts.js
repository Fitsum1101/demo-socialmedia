import React, { useState } from "react";
import classes from "./getposts.module.css";
import Button from "../../button/Button";
import { getSocket } from "../../../store/socket";
import image from "../../images/pexels-lucasguizo-3780469.jpg";
const Gatposts = ({ posts, updateDelete, handleDelete }) => {
  const [newPosts, setNewposts] = useState(posts);
  getSocket.on("posts", (data) => {
    console.log(data);
  });
  return (
    <div className={classes.Maincontainer}>
      {newPosts &&
        newPosts.length > 0 &&
        newPosts.map((post) => (
          <div className={classes.container}>
            <div className={classes.profile}>
              <img src={image} alt="" />
              <div className={classes.username}>
                <h3>@fitsumt</h3>
              </div>
            </div>
            <p className={classes.title}>{post.title}</p>
            <p className={classes.content}>{post.content}</p>
            <div className={classes.comments}>
              <div className={classes.like}>
                <i class="fa-solid fa-thumbs-up"></i>
                <span>like</span>
              </div>
              <div className={classes.comment}>
                <i className="fa-solid fa-comment" aria-hidden="true" />
                <span>comment</span>
              </div>
              <div className={classes.like}>
                <i class="fa-solid fa-thumbs-up"></i>
                <span>share</span>
              </div>
            </div>
            {updateDelete && (
              <div className={classes.mybuttons}>
                <Button to={"/posts/myposts/update/" + post.id}>Edit</Button>
                <form>
                  <Button
                    handleClick={() => {
                      handleDelete(post.id);
                    }}
                  >
                    Delete
                  </Button>
                </form>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Gatposts;

// {
// )}
