import {onMove} from '../actions/moveActions'

const initialState = {
    isLoading: true,
    data: [],
    error: null,
    exercisesToChoose: []
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
        case "GET_EXERCISES_BEGIN":
            return state
        case "GET_EXERCISES_SUCCESS":
            return {...state, exercisesToChoose: action.payload, isLoading: false}
        case "GET_EXERCISES_ERROR":
            return {...state, error: action.payload}
            //post request on update 
        default: 
            return state
    }
}

export default workouts