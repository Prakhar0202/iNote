import React, {useContext} from "react";
import noteContext from '../context/notes/noteContext';
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote} = context;
  return (
    <>
    <AddNote/>
    <div>
      <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note,index) => {
          return <Noteitem key={note._id} note={note}/>
        })}
      </div>
    </div>
    </>
  );
};

export default Notes;
