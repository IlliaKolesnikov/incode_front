import {onMove} from '../actions/moveActions'

const initialState = {
    isLoading: true,
    data: [],
    error: null,
}

function exercises(state = initialState, action){
    switch(action.type){
        case "MOVE_UPPER":
            let data = onMove(action.payload, state.data, "up")
            return {...state, data: data}
        case "MOVE_DOWN": 
            data = onMove(action.payload, state.data, "down")
            return {...state, data: data}
        case "DELETE_ONE":
            data = onMove(action.payload, state.data, "delete")
            return {...state, data: data}
        case "GET_EXERCISES_BEGIN":
            return state
        case "GET_EXERCISES_SUCCESS":
            return {...state, data: action.payload, isLoading: false}
        case "GET_EXERCISES_ERROR":
            return {...state, error: action.payload}
            //post request on update 
            // использовать order для перемещения выше/ниже и сортировать на бэке
        default: 
            return state
    }
}

export default exercises