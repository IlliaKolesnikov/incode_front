import {onMove} from '../actions/moveActions'

const initialState = {
    data: [{
        name: "Gym",
        measure: "kilograms",
      },
      {
        name: "Running",
        measure: "miles"
      },
      {
        name: "Lifting",
        measure: "kilograms"
      },
      {
        name: "Something else",
        measure: "minutes"
      }
    ]
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
        default: 
            return state
    }
}

export default exercises