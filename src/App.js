import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Addpost from "./pages/Addpost";
import Post from "./pages/Post";
import Mypostpage from "./pages/Mypost";
import SignupPage, { action as SingupAction } from "./pages/SignUp";
import LogInpage, { action as loginAction } from "./pages/LogIn";
import Postroot from "./pages/Postroot";
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
          { path: "/add-posts", element: <Addpost /> },
          { path: "/posts", element: <Post /> },
          { path: "/myposts", element: <Mypostpage /> },
        ],
      },
      { path: "/signup", element: <SignupPage />, action: SingupAction },
      { path: "/login", element: <LogInpage />, action: loginAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
