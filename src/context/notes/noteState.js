import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

//Fetch All Notes

const getNotes = async () => {
    // API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET", 
    headers: {
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
    },
  });
  const json = await response.json()
  console.log(json)
  setNotes(json)
}

  // Add a Note
  const addNote = async (id, title, description, tag) => {
    // API Call
    console.log("adding a new note");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      body: JSON.stringify({title, description, tag}),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
      },
    });
    const json = response.json();
    const note = {
      _id: id,
      user: "66ab204a69d5a7fde5905c3e",
      title: title,
      description: description,
      tag: tag,
      date: "2024-08-02T08:20:24.946+00:00",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
    },
  });
  const json = response.json();
  console.log(json)
    console.log("Note Deleted with id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    console.log("editing a new note");
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({title, description, tag}),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYjIwNGE2OWQ1YTdmZGU1OTA1YzNlIn0sImlhdCI6MTcyMjU3NjAxM30.rtH2gFALrmNJlzXRTVV39BAACjtoQAlGBaExuz10p0g",
      },
    });
    const json = response.json();
    for (let index = 0; index <= notes.length; index++) {
      const element = notes(index);
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
