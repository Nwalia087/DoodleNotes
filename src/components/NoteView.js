// ViewNote.js
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";

const ViewNote = () => {
  const { noteInView, notes } = useContext(NoteContext);
  const note = notes.find((n) => n._id === noteInView.id);
  const [viewTitle, setViewTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (note) {
      setViewTitle(note.title);
      setDescription(note.description);
    }
  }, [note]);
  const handleOnClickBackButton = () => {
    navigate("/your-notes");
  };
  return (
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
          style={{ caretColor: "black", color: "black" }}
          value={viewTitle}
          onChange={(e) => setViewTitle(e.target.value)}
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
            style={{ color: "black", height: "300px", caretColor: "black" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
      </div>
      <button type="submit" onClick={handleOnClickBackButton} className="btn btn-primary">
        Back To Your Notes
      </button>
      <button type="submit" className="btn mx-3 btn-warning">
        Edit Note
      </button>
      <button type="submit" className="btn btn-danger">
        Delete Note
      </button>
    </form>
  );
};

export default ViewNote;
