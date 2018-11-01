const initialState = {
    isAuth: false
}

function main(state = initialState, action){
    switch(action.type){
        case "AUTH_SUCCESS":
            return {...state, isAuth: true}
        default: 
            return state
    }
}

export default main