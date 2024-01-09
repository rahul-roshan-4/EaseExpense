import React, { useState } from 'react';
import InputField from '../InputField';
import LoginForm from '../LoginForm/LoginForm';
import "./SignUpForm.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);


  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, password, mail }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      setName("");
      setPassword("");
      setMail("");
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  }
 const handleToggleMode = () => {
   setIsLoginMode((prevMode) => !prevMode);
 };
  return (
    <>
      {isLoginMode ? (
        <LoginForm />
      ) : (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={mail}
                  onChange={(ev) => setMail(ev.target.value)}
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <button onClick={handleToggleMode} className="toggle-btn">
        {isLoginMode ? "Switch to Sign Up" : "Switch to Login"}
      </button>
    </>
  );
};

export default SignUpForm;

  // <form className="register" onSubmit={register}>
  //         <h1>Register</h1>
  //         <input
  //           type="text"
  //           placeholder="name"
  //           value={name}
  //           onChange={(ev) => setName(ev.target.value)}
  //         />
  //         <input
  //           type="password"
  //           placeholder="password"
  //           value={password}
  //           onChange={(ev) => setPassword(ev.target.value)}
  //         />
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={mail}
  //           onChange={(ev) => setMail(ev.target.value)}
  //         />
  //         <button className="submit-btn" onClick={register}>
  //           Register
  //         </button>
  //       </form>
 