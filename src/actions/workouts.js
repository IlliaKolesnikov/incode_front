import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
export function createWorkout(arrWithData){
    return dispatch=>{
        console.log(arrWithData)
        axios.post("/api/createworkout", {
            dataToCreate: arrWithData,
            token: localStorage.token
        })
       
        .then(json=>console.log(json)) //error.response.data.error
        .catch(error=> console.log(JSON.stringify(error)))
    }
}