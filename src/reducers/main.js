const initialState = {
    isAuth: false,
    error: null
}

function main(state = initialState, action){
    switch(action.type){
        case "AUTH_SUCCESS":
            return {...state, isAuth: true} // POCHTA I TOKEN
        case "LOG_OUT":
            return {...state, isAuth: false}
        case "ERROR_FOUND":
            return {...state, error: action.payload}
        default: 
            return state
    }
}

export default main