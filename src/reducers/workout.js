import {onEWMove} from '../actions/moveActions'

const initialState = {
    isLoading: true,
    isFetching: true,
    data: [],
    error: null,
    exercisesToChoose: []
}

function workouts(state = initialState, action){
    switch(action.type){
        case "MOVE_UPPER_W":
            let data = onEWMove(action.payload, state.data, "up")
            return {...state, data: data}
        case "MOVE_DOWN_W": 
            data = onEWMove(action.payload, state.data, "down")
            return {...state, data: data}
        case "DELETE_ONE_W":
            data = onEWMove(action.payload, state.data, "delete")
            return {...state, data: data}
        case "GET_WORKOUT_BEGIN":
            return state
        case "GET_WORKOUT_SUCCESS":
            return {...state, data: action.payload, isFetching: false}
        case "GET_WORKOUT_ERROR":
            return {...state, error: action.payload}
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