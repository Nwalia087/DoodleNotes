import React from "react";

export default function AddNewNote() {
  return (
    <div style={{ caretColor: "transparent" }}>
      <h1 style={{ fontSize: "3.5rem", marginTop: "-2%" }} className="mb-2">
        Add a new note
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <h5>Title</h5>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your title goes here"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ caretColor: "black" }}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <label htmlFor="floatingTextarea2">
              <h5>Description</h5>
            </label>
            <textarea
              className="form-control"
              placeholder="Describe your note here"
              id="floatingTextarea2"
              style={{ height: "300px", caretColor: "black" }}></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
