import axios from 'axios'

export function createExercise(title, measureType){
    return dispatch=>{
        console.log(title, measureType)
        axios.post("/api/createexercise", {
            title: title,
            measureType: measureType, 
            username: localStorage.token 
        })
        .then(json=> console.log(json))
        .catch(error=> {
            dispatch({type: "ERROR_FOUND", 
                    payload: error.response.data.error}) 
        })
    }
}