import Login from "../compenents/Auth/Login";
import { redirect } from "react-router";

const LogIn = () => {
  return <Login />;
};

export default LogIn;

export const action = async ({ request, params }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    const result = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (result.status === 422) {
      throw new Error("invalide user input");
    }

    const data = await result.json();
    localStorage.setItem("token", data.token);

    console.log(data);

    return redirect("/");
  } catch (error) {
    console.log(error);
  }
};
