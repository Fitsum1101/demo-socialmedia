import React from "react";
import classes from "./getposts.module.css";
import Button from "../../button/Button";
// import image from "../../images/pexels-lucasguizo-3780469.jpg";
const Gatposts = ({ posts }) => {
  console.log(posts);
  return (
    <div className={classes.Maincontainer}>
      {posts.length > 0 &&
        posts.map((post) => (
          <div className={classes.container}>
            <p className={classes.title}>{post.title}</p>
            <p className={classes.content}>{post.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Gatposts;
{
  /* <div className={classes.mybuttons}>
<Button>Edit</Button>
<Button>Delete</Button>
</div> */
}
