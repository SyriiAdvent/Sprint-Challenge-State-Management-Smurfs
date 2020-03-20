import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Smurf from "./Smurf";

const Smurfs = () => {
  const data = useSelector(
    state => ({
      getComplete: state.getComplete,
      smurfs: state.smurfs["0"]
    }),
    shallowEqual
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      {data.getComplete &&
        data.smurfs.map(ele => <Smurf key={ele.id} data={ele} />)}
      {}
    </div>
  );
};

export default Smurfs;
