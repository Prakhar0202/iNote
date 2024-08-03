import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3 ">
        <div className="card-body py-3">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text pt-3">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
