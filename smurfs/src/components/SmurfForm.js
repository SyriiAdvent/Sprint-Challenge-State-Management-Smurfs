import React, { useState } from "react";
import { postData } from "../Actions/rootActions";
import { useDispatch } from "react-redux";

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    dispatch(postData(form));
    setForm({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label forhtml="name">
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <br />
        <label forhtml="Age">
          Age
          <input name="age" value={form.age} onChange={handleChange} />
        </label>
        <br />
        <label forhtml="Hight">
          Height
          <input name="height" value={form.height} onChange={handleChange} />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SmurfForm;
