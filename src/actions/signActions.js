import axios from 'axios'


export function signIn(userName, userPassword){
    return dispatch=>{
        axios.post("/api/signin", {
            username: userName,
            password: userPassword
        })

        .then(json => { window.localStorage.setItem('token', json.data.data)
        console.log(localStorage.token)
        dispatch({
            type: "AUTH_SUCCESS"
        })
        
    })
    .catch(error=> console.log(error.response.data.error))
       
    }
}

export function signOut(userName, userPassword){
    return dispatch=>{
        window.localStorage.setItem('token', "");
        console.log(localStorage)
        dispatch({type: "LOG_OUT"})
    }
}


export function signUp(userName, userPassword){
    return dispatch=>{
            axios.post("/api/signup", {
                username: userName,
                password: userPassword
            })
    }

}