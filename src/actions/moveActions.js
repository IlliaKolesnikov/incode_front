import axios from 'axios'

export function moveUp(index){
    return dispatch=>{
        dispatch({type: "MOVE_UPPER", payload: index})
    }
}

export function moveDown(index){
    return dispatch=>{
        dispatch({type: "MOVE_DOWN", payload: index})
    }
}

export function deleteOne(index, objToDelete){
    return dispatch=>{
        axios.post("/api/deleteexercise", {
            itemToDelete: objToDelete,
            token: localStorage.token
        })
        .then(json=> console.log(json))
        dispatch({type: "DELETE_ONE", payload: index})
    }
}

export function onMove(index, arr, where){
    if(where === "up"){
        if(index !== 0){
            let copy = arr.slice();
            console.log(copy[index-1].order, copy[index].order)
            let k = copy[index-1];
            copy[index-1] = copy[index];
            copy[index-1].order = k.order;
            copy[index] = k;
            copy[index].order +=1;
            console.log(copy[index-1].order, copy[index].order)
            return copy
        }
        else{
            return arr
        }
    }
    if(where === "down"){
        if(index !== arr.length - 1){
            let copy = arr.slice();
            console.log("Down start:", copy[index+1].order, copy[index].order)
            let k = copy[index+1];
            copy[index+1] = copy[index];
            copy[index+1].order = k.order;
            copy[index] = k;
            copy[index].order -=1;
            console.log("Down:", copy[index+1].order, copy[index].order)
            return copy
        }
        else{
            return arr
        }
    }
    if(where === "delete"){
        arr.splice(index, 1)
        //здесь нужно сделать присвоение следующему элементу нового order
        return arr
    }
}