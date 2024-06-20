import React, { useContext, useEffect } from "react";
import gifImg from "../assets/output-onlinegiftools.gif";

import NoteContext from "../context/NoteContext";

export default function Home() {
  const context = useContext(NoteContext);
  const { loginSignup, setLoginSignup } = context;
  const changeToSignup = () => {
    setLoginSignup("signup");
  };
  const changeToLogin = () => {
    setLoginSignup("login");
  };

  return (
    <>
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
          {loginSignup === "login" ? (
            <div>
              <form className="mt-5 pb-4 border-bottom">
                <h4 className="mb-4">Login to access your Notes</h4>
                <div className="mb-3 inputFields">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ caretColor: "black" }}
                  />
                </div>
                <div className="mb-3 inputFields">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    style={{ caretColor: "black" }}
                  />
                </div>

                <button type="submit" className="btn px-4 btn-primary">
                  <b>Login</b>
                </button>
              </form>
              <div className="d-flex mt-4 align-items-center">
                <h5 className="m-0">Don't have an Account?</h5>
                <button type="button" onClick={changeToSignup} className=" mx-3 px-3 btn btn-warning text-light">
                  <b>Sign-up</b>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <form className="mt-5 pb-4 border-bottom">
                <h4 className="mb-4">Tell Us About Yourself</h4>
                <div className="mb-3 inputFields">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                    id="exampleInputName1"
                    style={{ caretColor: "black" }}
                  />
                </div>
                <div className="mb-3 inputFields">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ caretColor: "black" }}
                  />
                </div>
                <div className="mb-3 inputFields">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    style={{ caretColor: "black" }}
                  />
                </div>

                <button type="submit" className="btn px-4 btn-primary">
                  <b>SignUp</b>
                </button>
              </form>
              <div className="d-flex mt-4 align-items-center">
                <h5 className="m-0">Already have an Account?</h5>
                <button type="button" onClick={changeToLogin} className=" mx-3 px-3 btn btn-warning text-light">
                  <b>Login</b>
                </button>
              </div>
            </div>
          )}
          <img className="position-absolute" draggable="false" src={gifImg} alt="" />
        </div>
      </div>
    </>
  );
}
