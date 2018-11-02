const initialState = {
    isAuth: false
}

function main(state = initialState, action){
    switch(action.type){
        case "AUTH_SUCCESS":
            return {...state, isAuth: true} // POCHTA I TOKEN
        case "LOG_OUT":
            return {...state, isAuth: false}
        default: 
            return state
    }
}

export default main