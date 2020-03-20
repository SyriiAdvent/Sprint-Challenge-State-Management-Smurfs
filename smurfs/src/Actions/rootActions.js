import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const fetchData = () => dispatch => {
  axios(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(`Successful GET from server... `, res);
      dispatch({
        type: FETCH_DATA,
        payload: res.data
      });
    })
    .catch(err => console.log(`Couldn't GET data from server...`, err));
};

export const postData = formData => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", formData)
    .then(res => {
      console.log(`Successful POST to server... `, res);
      dispatch({
        type: POST_DATA,
        payload: res.data
      });
    })
    .catch(err => console.log(`Couldn't POST data to server...`, err));
};

export const deletePost = value => dispatch => {
  console.log(value);
  axios
    .delete(`http://localhost:3333/smurfs/${value}`)
    .then(res => {
      console.log(`Successful DELETE to server... `, res);
      dispatch({
        type: DELETE_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(`Couldn't DELETE data on server...`, err));
};

export const updatePost = (formData, value) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${value}`, formData)
    .then(res => {
      console.log(`Successful POST to server... `, res);
      dispatch({
        type: UPDATE_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(`Couldn't POST data to server...`, err));
};
