import axios from 'axios'

export function createExercise(title, measureType, data){
    return dispatch=>{
        console.log(title, measureType)
        axios.post("/api/createexercise", {
            title: title,
            measureType: measureType,
            data: data, 
            token: localStorage.token
        })
        .then(json=> console.log(json))
        .catch(error=> { console.log(error.response.data.error)
            dispatch({type: "ERROR_FOUND", 
                    payload: error.response.data.error}) 
        })
    }
}

export function updateExercises(newArray){
    return dispatch=>{
        axios.put("/api/updateexercise", {
            newArray: newArray, 
            token: localStorage.token
        })
        
        .then(json=> console.log(json))
        .catch(error=> {
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