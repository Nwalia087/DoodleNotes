import React from "react";

export default function NoteComponent(props) {
  return (
    <div className=" NoteComponent note my-3 rounded border p-4">
      <h2>{props.title}</h2>
      <p className="mt-4 NoteComponentDescription">{props.description}</p>
      <div className="d-flex flex-row-reverse justify-content-between mt-5">
        <button type="button" style={{}} className="px-5 text-center btn btn-warning">
          View Note
        </button>
      </div>
    </div>
  );
}
