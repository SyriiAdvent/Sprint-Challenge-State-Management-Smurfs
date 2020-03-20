import React, { useState } from "react";
import { deletePost, updatePost } from "../Actions/rootActions";
import { useDispatch } from "react-redux";

const Smurf = ({ data: { name, age, height, id } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState({
    name: name
  });
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  const handleNameChange = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ border: "1px solid black", width: "8rem", maxWidth: "8rem", margin: '1rem' }}>
      <h4>{name}</h4>
      {isEditing ? (
        <label>
          New Name: <br />
          <input name="name" value={editName.name} style={{ width: "95%" }} />
        </label>
      ) : null}
      <h5>Age: {age}</h5>
      <h5>height: {height}</h5>
      <button onClick={handleNameChange}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Smurf;
