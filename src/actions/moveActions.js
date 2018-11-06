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

export function deleteOne(index){
    return dispatch=>{
        dispatch({type: "DELETE_ONE", payload: index})
    }
}

export function onMove(index, arr, where){
    if(where === "up"){
        if(index !== 0){
            let copy = arr.slice();
            let k = copy[index-1];
            copy[index-1] = copy[index];
            copy[index] = k;
            return copy
        }
        else{
            return arr
        }
    }
    if(where === "down"){
        if(index !== arr.length - 1){
            let copy = arr.slice();
            let k = copy[index+1];
            copy[index+1] = copy[index];
            copy[index] = k;
            return copy
        }
        else{
            return arr
        }
    }
    if(where === "delete"){
        arr.splice(index, 1)
        return arr
    }
}