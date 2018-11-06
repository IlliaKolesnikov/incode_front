import {onMove} from '../actions/moveActions'

const initialState = {
    isAuth: false,
    error: null, 
    mail: null
}

function main(state = initialState, action){
    switch(action.type){
        case "AUTH_SUCCESS":
            return {...state, isAuth: true, mail: action.payload} // POCHTA I TOKEN
        case "LOG_OUT":
            return {...state, isAuth: false, mail: null, error: null}
        case "ERROR_FOUND":
            return {...state, error: action.payload}
        default: 
            return state
    }
}

export default main