import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "66ac969f0377076c132dc316",
      "user": "66ab204a69d5a7fde5905c3e",
      "title": "My title 1",
      "description": "Wake up at 6",
      "tag": "Personal",
      "date": "2024-08-02T08:19:43.804+00:00",
      "__v": 0,
    },
    {
      "_id": "66ac96c80377076c132dc31d",
      "user": "66ab204a69d5a7fde5905c3e",
      "title": "My title",
      "description": "Wake up at 7",
      "tag": "Personal",
      "date": "2024-08-02T08:20:24.946+00:00",
      "__v": 0,
    },
    {
        "_id": "66ac969f0377076c132dc316",
        "user": "66ab204a69d5a7fde5905c3e",
        "title": "My title 1",
        "description": "Wake up at 6",
        "tag": "Personal",
        "date": "2024-08-02T08:19:43.804+00:00",
        "__v": 0,
      },
      {
        "_id": "66ac96c80377076c132dc31d",
        "user": "66ab204a69d5a7fde5905c3e",
        "title": "My title",
        "description": "Wake up at 7",
        "tag": "Personal",
        "date": "2024-08-02T08:20:24.946+00:00",
        "__v": 0,
      },{
        "_id": "66ac969f0377076c132dc316",
        "user": "66ab204a69d5a7fde5905c3e",
        "title": "My title 1",
        "description": "Wake up at 6",
        "tag": "Personal",
        "date": "2024-08-02T08:19:43.804+00:00",
        "__v": 0,
      },
      {
        "_id": "66ac96c80377076c132dc31d",
        "user": "66ab204a69d5a7fde5905c3e",
        "title": "My title",
        "description": "Wake up at 7",
        "tag": "Personal",
        "date": "2024-08-02T08:20:24.946+00:00",
        "__v": 0,
      },{
        "_id": "66ac969f0377076c132dc316",
        "user": "66ab204a69d5a7fde5905c3e",
        "title": "My title 1",
        "description": "Wake up at 6",
        "tag": "Personal",
        "date": "2024-08-02T08:19:43.804+00:00",
        "__v": 0,
      },
      {
        "_id": "66ac96c80377076c132dc31d",
        "user": "66ab204a69d5a7fde5905c3e",
        "title": "My title",
        "description": "Wake up at 7",
        "tag": "Personal",
        "date": "2024-08-02T08:20:24.946+00:00",
        "__v": 0,
      },
  ];
  const [notes, setNotes] = useState (notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
