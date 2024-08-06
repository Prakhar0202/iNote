import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>

        <form className="my-3 border border-dark rounded p-5">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              minLength={3}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={6}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length<3 || note.description.length<6}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
