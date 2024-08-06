import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Fetch All Notes
  const getNotes = async () => {
    const token = localStorage.getItem('token');
  console.log("Retrieved token:", token);
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
        token
      },
    });
    const json = await response.json();
  if (Array.isArray(json)) {
    setNotes(json);
  } else {
    console.error("Expected an array but got:", json);
  }
;
    // setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {const token = localStorage.getItem('token');
    console.log("Retrieved token:", token);
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        token      },
    });
    const json = await response.json();
    if (Array.isArray(json)) {
      setNotes(json);
    } else {
      console.error("Expected an array but got:", json);
    }
  // setNotes(json);
;

  };

  // Delete a Note
  const deleteNote = async (id) => { // eslint-disable-next-line
    const token = localStorage.getItem('token');
  console.log("Retrieved token:", token);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
        token      },
    });
;

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => { // eslint-disable-next-line
    const token = localStorage.getItem('token');
  console.log("Retrieved token:", token);
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        token
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
