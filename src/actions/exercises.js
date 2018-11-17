import axios from "axios";

export const config = {
  headers: { Authorization: localStorage.getItem('token') }
};

export function createExercise(title, measureType) {
  return dispatch => {
    axios.post("/api/createexercise", {
          title: title,
          measureType: measureType
        },
        config
        //{headers: { Authorization: localStorage.token }}
      )
      .then(json => console.log(json))
      .catch(error => {
        dispatch({
          type: "ERROR_FOUND",
          payload: error.response.data.error
        });
      });
  };
}

export function updateExercises(newArray) {
  return dispatch => {
    axios.put("/api/updateexercise", {
          newArray: newArray
        },
        config
      )
      .then(json => console.log(json))
      .catch(error => {
        dispatch({
          type: "ERROR_FOUND",
          payload: error.response.data.error})
        })
      }
}

export function getData(){
  return dispatch => {
    dispatch({ type: "GET_EXERCISES_BEGIN" });
    axios.get("/api/editexercise", config )
      .then(json => { console.log(json.data.data)
        dispatch({
          type: "GET_EXERCISES_SUCCESS",
          payload: json.data.data });
      })
      .catch(error => {
        dispatch({
          type: "GET_EXERCISES_ERROR",
          payload: error.response
        })})
  }
}