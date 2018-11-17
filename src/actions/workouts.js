import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { config } from "./exercises";

export function createWorkout(arrWithData) {
  return dispatch => {
    axios.post("/api/createworkout", {
          dataToCreate: arrWithData,
        }, config)
      .then(json=>console.log(json)) //error.response.data.error
      .catch(error=> console.log(JSON.stringify(error)))
  }
}

export function getData() {
  return dispatch => {
    axios.get("/api/getworkout", {
}, config)
      .then(json => {
        dispatch({type: "GET_EXERCISES_SUCCESS", payload: json.data.data })
    }) //error.response.data.error
      .catch(error => console.log(JSON.stringify(error)))
  }
}

export function getWorkout() {
  return dispatch=>{
    axios.post("/api/editworkout",  {}, config)
      .then(json=> {
        dispatch({type: "GET_WORKOUT_SUCCESS", payload: json.data.data })
      }) 
      .catch(error=> console.log(JSON.stringify(error)))
  }
}

export function updateWorkout(newArray) {
  return dispatch => {
    axios.put("/api/updateworkout", {
          newArray: newArray
        }, config)
      .then(json=> console.log(json))
      .catch(error=> {
        dispatch({ type: "ERROR_FOUND", payload: error.response.data.error }) 
      });
  }
}

export function moveEWUp(index) {
  return { type: "MOVE_UPPER_W", payload: index };
}

export function moveEWDown(index) {
  return { type: "MOVE_DOWN_W", payload: index };
}

export function deleteEWOne(index, objToDelete, data) {
  return dispatch => {
    axios.post("/api/deletewexercise", {
          itemToDelete: objToDelete,
          data: data._id
        }, config )
      .then(json => console.log(json))
    dispatch({ type: "DELETE_ONE_W", payload: index })
  };
}

export function onEWMove(index, arr, where) {
  if (where === "up") {
    if (index !== 0) {
      let copy = arr.exercises.slice();
      let k = copy[index - 1];
      copy[index - 1] = copy[index];
      copy[index - 1].order = k.order;
      copy[index] = k;
      copy[index].order += 1;
      arr.exercises = copy;
      return arr;
    } else {
      return arr;
    }
  }
  if (where === "down") {
    if (index !== arr.exercises.length - 1) {
      let copy = arr.exercises.slice();
      let k = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index + 1].order = k.order;
      copy[index] = k;
      copy[index].order -= 1;
      arr.exercises = copy;
      return arr;
    } else {
      return arr;
    }
  }
  if (where === "delete") {
    arr.exercises.splice(index, 1);
    return arr;
  }
}
