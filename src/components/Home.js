import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
const Home = () => {
  const context = useContext(noteContext);
  const {notes,setNotes} = context;
  return (
    <div>
    <div className='container my-3'>
    <h1>Add a Note</h1>
    <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
  <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    <div className='container'>
      <h2>Your Notes</h2>
      {notes.map((note)=>{
      return note.title;
      })}
      </div>
    
    </div>
  )
}

export default Home
