import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Fetch All Notes
  const getNotes = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error("No token found, authentication required.");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "auth-token": token,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      if (Array.isArray(json)) {
        setNotes(json);
      } else {
        console.error("Expected an array but got:", json);
      }
    } catch (error) {
      console.error("Fetch failed loading:", error);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const token = localStorage.getItem('token');
   
    if (!token) {
      console.error("No token found, authentication required.");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setNotes(notes.concat(json)); // Assuming the backend returns the newly added note
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const token = localStorage.getItem('token');
   
    if (!token) {
      console.error("No token found, authentication required.");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": token,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found, authentication required.");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json)
      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(newNotes);
    } catch (error) {
      console.error("Failed to edit note:", error);
    }
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
