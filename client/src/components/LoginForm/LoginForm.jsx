import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginForm.css";
import { UserContext } from "../UserContext";

export default function LoginForm() {
  const [mail, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function login(ev) {
    console.log("hello");
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ mail, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/contact"} />;
  }
  return (
     <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            value={mail}
           onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
             value={password}
           onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={login}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
    // <form className="login-form" onSubmit={login}>
    //   <h1>Login</h1>
    //   <input
    //     type="text"
    //     placeholder="Mail"
    //     value={mail}
    //     onChange={(ev) => setUsername(ev.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="password"
    //     value={password}
    //     onChange={(ev) => setPassword(ev.target.value)}
    //   />
    //   <button onClick={login} className="submit-btn">Login</button>
    // </form>


