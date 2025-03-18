import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Addpost, { action as createPostAction } from "./pages/Addpost";
import Post, { loader as postLoader } from "./pages/Post";
import Mypostpage, { loader as userPostLoader } from "./pages/Mypost";
import SignupPage, { action as SingupAction } from "./pages/SignUp";
import LogInpage from "./pages/LogIn";
import Postroot from "./pages/Postroot";
import UpdatePost, { loader as updatePostLoader } from "./pages/UpdatePost";
import { init } from "./store/socket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: "/",
        element: <Postroot />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/add-posts",
            element: <Addpost />,
            action: createPostAction,
          },
          { path: "/posts", element: <Post />, loader: postLoader },
          {
            path: "/posts/myposts",
            element: <Mypostpage />,
            loader: userPostLoader,
          },
          {
            path: "/posts/myposts/update/:postId",
            element: <UpdatePost />,
            loader: updatePostLoader,
          },
        ],
      },
      { path: "/signup", element: <SignupPage />, action: SingupAction },
      {
        path: "/login",
        element: <LogInpage />,
      },
    ],
  },
]);

const App = () => {
  init().on("connection", () => {
    console.log("connected");
  });
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
