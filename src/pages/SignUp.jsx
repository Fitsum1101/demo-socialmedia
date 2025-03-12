import React from "react";
import Signup from "../compenents/Auth/Signup";
import { redirect } from "react-router";
const SignUp = () => {
  return <Signup />;
};

export default SignUp;

export const action = async ({ request, params }) => {
  const datas = await request.formData();
  const username = datas.get("username");
  const email = datas.get("email");
  const password = datas.get("password");
  const result = await fetch("http://localhost:8080/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  if (!result.ok) {
    const data = await result.json();
    if (result.status === 422) {
      return "Email aiready in use!!";
    }
    return "server is not working aproprately";
  }
  return redirect("/login");
};
