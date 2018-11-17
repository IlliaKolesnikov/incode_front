import axios from "axios";
import { config } from "./exercises";

export function moveUp(index) {
  return {
    type: "MOVE_UPPER", payload: index
  };
}

export function moveDown(index) {
  return { type: "MOVE_DOWN", payload: index };
}

export function deleteOne(index, objToDelete){
  return dispatch => {
    axios.post("/api/deleteexercise", {
          itemToDelete: objToDelete
        }, config)
      .then(json => console.log(json))
    dispatch({ type: "DELETE_ONE", payload: index })
  }
}

export function onMove(index, arr, where) {
  if (where === "up") {
    if (index !== 0) {
      let copy = arr.slice();
      let k = copy[index-1];
      copy[index-1] = copy[index];
      copy[index-1].order = k.order;
      copy[index] = k;
      copy[index].order += 1;
      return copy;
    } else {
      return arr;
    }
  }
  if (where === "down") {
    if (index !== arr.length - 1) {
      let copy = arr.slice();
      let k = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index + 1].order = k.order;
      copy[index] = k;
      copy[index].order -= 1;
      return copy;
    } else {
      return arr;
    }
  }
  if (where === "delete") {
    arr.splice(index, 1);
    return arr;
  }
}

export function onEWMove(index, arr, where){
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
      return arr
    }
    }
    if (where === "down") {

        if (index !== arr.exercises.length-1 ) {
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
    arr.exercises.splice(index, 1)
    return arr;
  }
}