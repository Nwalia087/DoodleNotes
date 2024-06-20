import NoteContext from "./NoteContext";
import { useState, useEffect } from "react";

const NoteState = (props) => {
  const initIsLoggedin = localStorage.getItem("isLogedIn");
  const initNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const initToken = localStorage.getItem("token");
  const initNoteInView = JSON.parse(localStorage.getItem("noteInView")) || {
    id: null,
    title: "",
    description: "",
  };
  const initLoginSignup = localStorage.getItem("loginSignup");
  const [notes, setNotes] = useState(initNotes);
  const [token, setToken] = useState(initToken);
  const [loginSignup, setLoginSignup] = useState(initLoginSignup);
  const [noteInView, setNoteInView] = useState(initNoteInView);
  const [isLogedIn, setIslogedIN] = useState(initIsLoggedin);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("isLogedIn", isLogedIn);
  }, [isLogedIn]);
  useEffect(() => {
    localStorage.setItem("loginSignup", loginSignup);
  }, [loginSignup]);
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("noteInView", JSON.stringify(noteInView));
  }, [noteInView]);

  const fetchAllNotes = async () => {
    const response = await fetch("http://localhost:5000/api/notes/fetch-all-notes", {
      method: "GET",
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setNotes(data);
    } else {
      setNotes([]);
    }
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        token,
        fetchAllNotes,
        setToken,
        noteInView,
        setNoteInView,
        loginSignup,
        setLoginSignup,
      }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
