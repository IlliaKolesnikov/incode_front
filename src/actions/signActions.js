import axios from 'axios'


export function signIn(userName, userPassword){
    return dispatch=>{
        axios.post("/api/signin", {
            username: userName,
            password: userPassword
        })

        .then(json => { window.localStorage.setItem('token', json.data.data)
        console.log(localStorage)
        console.log(json)
        dispatch({
            type: "AUTH_SUCCESS",
            payload: json.data.mail
        })
        
    })
    .catch(error=> {
        dispatch({type: "ERROR_FOUND", 
                payload: error.response.data.error}) 
    }
        )
       
    }
}

export function signOut(userName, userPassword){
    return dispatch=>{
        window.localStorage.setItem('token', "");
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
            console.log(localStorage);
            dispatch({
                type: "AUTH_SUCCESS",
                payload: json.data.mail
            })
            
        })
        .catch(error=> {
            dispatch({type: "ERROR_FOUND", 
                    payload: error.response.data.error}) }
            )
        
    
    }
}


export function signUp(userName, userPassword){
    return dispatch=>{
            axios.post("/api/signup", {
                username: userName,
                password: userPassword
            })
            .catch(error=> {
            dispatch({type: "ERROR_FOUND", 
                payload: error.response.data.error}) 
                //console.log(error.response.data.error)//2 минуты
            })
    }
}