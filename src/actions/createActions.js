import axios from 'axios'

export function createExercise(title, measureType){
    return dispatch=>{
        console.log(title, measureType)
        axios.post("/api/createexercise", {
            title: title,
            measureType: measureType, 
            token: localStorage.token
        })
        .then(json=> console.log(json))
        .catch(error=> { console.log(error)
            dispatch({type: "ERROR_FOUND", 
                    payload: error.response.data.error}) 
        })
    }
}

export function getData(){
    return dispatch=>{
        dispatch({type: "GET_EXERCISES_BEGIN"})
        axios.post('/api/editexercise',{
            token: localStorage.token
        })
        .then(json=> {
            console.log(json)
            dispatch({type: "GET_EXERCISES_SUCCESS", payload: json.data.data})
        })
        .catch(error=> { 
            dispatch({type: "GET_EXERCISES_ERROR", payload: error.response})})
    }
}