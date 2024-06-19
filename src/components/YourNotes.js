import React, { useContext } from "react";
import NoteComponent from "./NoteComponent";
import NoteContext from "../context/NoteContext";

export default function YourNotes() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <div className="YourNotes text-center mt-5 mb-4">
        <h1>
          Your <span className="text-warning">Notes</span>
        </h1>
      </div>
      <div className="container justify-content-center justify-content-lg-evenly d-flex flex-wrap">
        {notes.map((element) => {
          return (
            <div className="col-md-6 " key={element._id}>
              <NoteComponent id={element.id} title={element.title} description={element.description} />
            </div>
          );
        })}
      </div>
    </>
  );
}
