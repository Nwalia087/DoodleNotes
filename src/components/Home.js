import React, { useContext, useState } from "react";
import gifImg from "../assets/output-onlinegiftools.gif";
import NoteContext from "../context/NoteContext";

export default function Home() {
  const [newUser, setNewUser] = useState({
    name: "",
    Username: "",
    password: "",
  });
  const [loginUser, setLoginUser] = useState({
    Username: "",
    password: "",
  });
  const context = useContext(NoteContext);
  const { loginSignup, setLoginSignup, token, setToken } = context;

  const changeToSignup = () => {
    setLoginSignup("signup");
  };

  const changeToLogin = () => {
    setLoginSignup("login");
  };

  const handleOnClickSignup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser.name,
        Username: newUser.Username,
        password: newUser.password,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      setToken(result);
    }
  };

  const handleOnClickLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: loginUser.Username,
        password: loginUser.password,
      }),
    });
    const result = await response.json();

    if (response.ok) {
      setToken(result);
    }
  };

  return (
    <div className="HeroContent mt--5 position-relative" style={{ caretColor: "transparent" }}>
      <h1 style={{ fontSize: "6rem" }}>
        Welcome to <span className="text-warning">I</span>
        <span style={{ color: " #29a4d9" }}>N</span>oteBook
      </h1>
      <h4 style={{ color: " #29a4d9" }}>
        An easy and safe way to store and access your
        <span className="text-warning">Notes</span>
        online
      </h4>
      <div className="d-flex heroGifAndFormContainer">
        <div>
          {loginSignup === "login" ? (
            <div>
              <form className="mt-5 pb-4 border-bottom" onSubmit={handleOnClickLogin}>
                <h4 className="mb-4">Login to access your Notes</h4>
                <div className="mb-3 inputFields">
                  <input
                    type="email"
                    placeholder="Username"
                    onChange={(e) => setLoginUser({ ...loginUser, Username: e.target.value })}
                    className="form-control"
                    id="loginUsername"
                    aria-describedby="emailHelp"
                    style={{ caretColor: "black" }}
                    autoComplete="username"
                  />
                </div>
                <div className="mb-3 inputFields">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
                    className="form-control"
                    id="loginPassword"
                    style={{ caretColor: "black" }}
                    autoComplete="current-password"
                  />
                </div>

                <button type="submit" className="btn px-4 btn-primary">
                  <b>Login</b>
                </button>
              </form>
              <div className="d-flex mt-4 align-items-center">
                <h5 className="m-0">Don't have an Account?</h5>
                <button type="button" onClick={changeToSignup} className="mx-3 px-3 btn btn-warning text-light">
                  <b>Sign-up</b>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <form className="mt-5 pb-4 border-bottom" onSubmit={handleOnClickSignup}>
                <h4 className="mb-4">Tell Us About Yourself</h4>
                <div className="mb-3 inputFields">
                  <input
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="form-control"
                    id="signupName"
                    style={{ caretColor: "black" }}
                    autoComplete="name"
                  />
                </div>
                <div className="mb-3 inputFields">
                  <input
                    type="email"
                    placeholder="Username"
                    onChange={(e) => setNewUser({ ...newUser, Username: e.target.value })}
                    className="form-control"
                    id="signupUsername"
                    aria-describedby="emailHelp"
                    style={{ caretColor: "black" }}
                    autoComplete="username"
                  />
                </div>
                <div className="mb-3 inputFields">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    id="signupPassword"
                    style={{ caretColor: "black" }}
                    autoComplete="new-password"
                  />
                </div>

                <button type="submit" className="btn px-4 btn-primary">
                  <b>SignUp</b>
                </button>
              </form>
              <div className="d-flex mt-4 align-items-center">
                <h5 className="m-0">Already have an Account?</h5>
                <button type="button" onClick={changeToLogin} className="mx-3 px-3 btn btn-warning text-light">
                  <b>Login</b>
                </button>
              </div>
            </div>
          )}
        </div>

        <img className="position-absolute" draggable="false" src={gifImg} alt="" />
      </div>
    </div>
  );
}
