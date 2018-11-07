import {onMove} from '../actions/moveActions'

const initialState = {
    data: [],
    error: null
}

function workouts(state = initialState, action){
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
        case "GET_WORKOUT_BEGIN":
            return state
        case "GET_WORKOUT_SUCCESS":
            return {...state, data: action.payload, isLoading: false}
        case "GET_WORKOUT_ERROR":
            return {...state, error: action.payload}
            //post request on update 
        default: 
            return state
    }
}

export default workouts