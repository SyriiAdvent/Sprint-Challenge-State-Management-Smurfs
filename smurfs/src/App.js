import React, { useEffect } from "react";
import "./App.css";
import Smurfs from "./components/Smurfs";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Actions/rootActions";
import SmurfForm from "./components/SmurfForm";

const App = () => {
  const serverBool = useSelector(state => ({
    getComplete: state.getComplete,
    postComplete: state.postComplete,
    updateComplete: state.updateComplete,
    deleteComplete: state.deleteComplete
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());

  }, [
    serverBool.deleteComplete,
    serverBool.updateComplete,
    serverBool.postComplete
  ]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <h2>Create Smurfs</h2>
      <SmurfForm />
      <hr />
      <Smurfs />
    </div>
  );
};

export default App;
