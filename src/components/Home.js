import React from "react";
import gifImg from "../assets/output-onlinegiftools.gif";

export default function Home() {
  return (
    <>
      <div className="HeroContent mt--5 position-relative" style={{ caretColor: "transparent" }}>
        <h1 style={{ fontSize: "6rem" }}>
          Welcome to <span className="text-warning">I</span>
          <span style={{ color: " #29a4d9" }}>N</span>oteBook
        </h1>
        <h4 style={{ color: " #29a4d9" }}>
          An easy and safe way to store and access your{" "}
          <span span className="text-warning">
            Notes
          </span>{" "}
          online
        </h4>
        <div className="d-flex heroGifAndFormContainer">
          <form className="mt-5">
            <h4 className="mb-4">Login to access your Notes</h4>
            <div class="mb-3 inputFields">
              <input
                type="email"
                placeholder="Email address"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ caretColor: "black" }}
              />
            </div>
            <div class="mb-3 inputFields">
              <input
                type="password"
                placeholder="Password"
                class="form-control"
                id="exampleInputPassword1"
                style={{ caretColor: "black" }}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          <img className="position-absolute" draggable="false" src={gifImg} alt="" />
        </div>
      </div>
    </>
  );
}
