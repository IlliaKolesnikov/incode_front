import axios from 'axios'
import jwtDecode from 'jwt-decode'


export function signIn(userName, userPassword){
    return dispatch=>{
        axios.post("/api/signin", {
            username: userName,
            password: userPassword
        })

        .then(json => { 
            window.localStorage.setItem('token', json.data.data)
            const decoded = jwtDecode(json.data.data)
            window.localStorage.setItem('mail', decoded.mail)
            dispatch({type: "AUTH_SUCCESS"})
        })
        .catch(error=> {
        dispatch({type: "ERROR_FOUND", payload: error.response.data.error}) 
        })
       
    }
}

export function signOut(userName, userPassword){
    return dispatch=>{
        window.localStorage.setItem('token', "");
        window.localStorage.setItem('mail', "");
        console.log(localStorage)
        dispatch({type: "LOG_OUT"})
    }
}

export function verifyUser(mail){
    return dispatch => {
        axios.post('/api/verify', {
            username: mail
        })
        .then(json => { 
            window.localStorage.setItem('token', json.data.data)
            const decoded = jwtDecode(json.data.data)
            console.log(decoded);
            window.localStorage.setItem('mail', decoded.mail)
            console.log(localStorage);
            dispatch({ type: "AUTH_SUCCESS",// payload: json.data.mail
            })
            
        })
        .catch(error=> {
            dispatch({type: "ERROR_FOUND", payload: error.response.data.error}) })
    }
}


export function signUp(userName, userPassword){
    return dispatch=>{
            axios.post("/api/signup", {
                username: userName,
                password: userPassword
            })
            .catch(error=> {
            dispatch({type: "ERROR_FOUND", payload: error.response.data.error}) 
                //console.log(error.response.data.error)//2 минуты
            })
    }
}

export function changeStatus(){
    return {
        type: "MESSAGE_CLOSED"
    }
}

export function setError(message){
    return {
        type: "SET_ERROR",
        payload: message
    }
}