import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Fetch All Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
      },
    });
    const json = await response.json();
;
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
      },
    });
    const json = await response.json();
;

    setNotes([...notes, json]);
  };

  // Delete a Note
  const deleteNote = async (id) => { // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
      },
    });
;

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => { // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
      },
    });
;

    const newNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
