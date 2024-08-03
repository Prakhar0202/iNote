import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "66ac969f0377076c132dc316",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title 1",
      description: "Wake up at 6",
      tag: "Personal",
      date: "2024-08-02T08:19:43.804+00:00",
      __v: 0,
    },
    {
      _id: "66ac96c80377076c132dc31d4",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title",
      description: "Wake up at 7",
      tag: "Personal",
      date: "2024-08-02T08:20:24.946+00:00",
      __v: 0,
    },
    {
      _id: "66ac969f0377076c132dc3165",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title 1",
      description: "Wake up at 6",
      tag: "Personal",
      date: "2024-08-02T08:19:43.804+00:00",
      __v: 0,
    },
    {
      _id: "66ac96c80377076c132dc31d5",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title",
      description: "Wake up at 7",
      tag: "Personal",
      date: "2024-08-02T08:20:24.946+00:00",
      __v: 0,
    },
    {
      _id: "66ac969f0377076c132dc3163",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title 1",
      description: "Wake up at 6",
      tag: "Personal",
      date: "2024-08-02T08:19:43.804+00:00",
      __v: 0,
    },
    {
      _id: "66ac96c80377076c132dc31d1",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title",
      description: "Wake up at 7",
      tag: "Personal",
      date: "2024-08-02T08:20:24.946+00:00",
      __v: 0,
    },
    {
      _id: "66ac969f0377076c132dc3161",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title 1",
      description: "Wake up at 6",
      tag: "Personal",
      date: "2024-08-02T08:19:43.804+00:00",
      __v: 0,
    },
    {
      _id: "66ac96c80377076c132dc31d2",
      user: "66ab204a69d5a7fde5905c3e",
      title: "My title",
      description: "Wake up at 7",
      tag: "Personal",
      date: "2024-08-02T08:20:24.946+00:00",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    console.log("adding a new note")
    const note = {
      _id: "66ac96c80377076c132dc31d8",
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
  const deleteNote = (id) => {
    console.log("Note Deleted with id: " + id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
  };
  
  // Edit a Note
//   const editNote = (_id, title, description, tag) => {
//     console.log("editing a new note")
//     const note = {
//       _id: "66ac96c80377076c132dc31d8",
//       user: "66ab204a69d5a7fde5905c3e",
//       title: title,
//       description: description,
//       tag: tag,
//       date: "2024-08-02T08:20:24.946+00:00",
//       __v: 0,
//     };
//     setNotes(notes.concat(note));
//   };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
