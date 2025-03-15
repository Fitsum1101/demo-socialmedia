import React from "react";
import classes from "./getposts.module.css";
import Button from "../../button/Button";
// import image from "../../images/pexels-lucasguizo-3780469.jpg";
const Gatposts = () => {
  return (
    <div className={classes.Maincontainer}>
      <div className={classes.container}>
        <p className={classes.title}>first post</p>
        <p className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          repudiandae similique,
        </p>
        <div className={classes.mybuttons}>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Gatposts;
