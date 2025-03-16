import React from "react";
import classes from "./getposts.module.css";
import Button from "../../button/Button";
import { Link } from "react-router";
// import image from "../../images/pexels-lucasguizo-3780469.jpg";
const Gatposts = ({ posts, updateDelete, handleDelete }) => {
  return (
    <div className={classes.Maincontainer}>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <div className={classes.container}>
            <p className={classes.title}>{post.title}</p>
            <p className={classes.content}>{post.content}</p>
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
