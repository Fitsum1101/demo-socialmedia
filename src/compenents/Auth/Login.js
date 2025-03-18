import React, { useState } from "react";
import classes from "./Login.module.css";
import TextInput from "../input/text/TextInput";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { authaction } from "../../store/user";
import { useNavigate } from "react-router";
import { setToken } from "../../store/localstorage";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  
  const dispatch = useDispatch();
  const [redir, setRedir] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleRedirect = () => setRedir(true);

  const handleClick = async (e) => {
    e.preventDefault(e);

    if (password.length > 0 && email.length > 0)
      try {
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
        const data = await result.json();

        if (result.status === 422) {
          return setError(data.error);
        }

        if (result.status !== 200 && result.status !== 201) {
          throw new Error("The server is not responding ");
        }
        setToken("token", data.token);
        dispatch(authaction.login());
        handleRedirect();
      } catch (error) {
        console.log(error);
      }
  };

  if (!redir)
    return (
      <div className={classes.container}>
        <div className={classes.hero}>
          <h1 className={classes.header}>facebook</h1>
        </div>
        <form className={classes.form} method="POST" onSubmit={handleClick}>
          <p>Log Into Facebook</p>
          <p className={classes.error}>Invalid password or email</p>
          <TextInput
            placeholder={" Email"}
            name={"email"}
            type={"email"}
            handleChange={handleEmail}
          />

          {error && error.email && <p>{error.email}</p>}

          <TextInput
            placeholder={"Password "}
            name={"password"}
            type={"password"}
            handleChange={handlePassword}
          />
          {error && error.password && <p>{error.password}</p>}
          <Button type={"submit"}>Log In </Button>
        </form>
      </div>
    );
  else {
    navigate("/");
  }
};

export default Login;

// useEffect(async () => {
//   if (!isAuth)
//     try {
//       const result = await fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });
//       if (result.status === 422) {
//         throw new Error("invalid user input");
//       }

//       if (result.status !== 200 && result.status !== 201) {
//         throw new Error("The server is not responding ");
//       }

//       const data = await result.json();
//       localStorage.setItem("token", data.token);
//       setIsAuth(true);
//       return redirect("/");
//     } catch (error) {
//       console.log(error);
//     }
// }, []);

// const handleClick = async (e) => {
//   e.preventDefault();

//   password = password.current.value;
//   email = email.current.value;

//   try {
//     const result = await fetch("http://localhost:8080/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const data = await result.json();

//     if (result.status === 422) {
//       return setError(data.error);
//     }

//     if (result.status !== 200 && result.status !== 201) {
//       throw new Error("The server is not responding ");
//     }
//     setToken("token", data.token);
//     dispatch(authaction.login());
//     handleRedirect();
//   } catch (error) {
//     console.log(error);
//   }
// };
