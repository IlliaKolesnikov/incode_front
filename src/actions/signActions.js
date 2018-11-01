import axios from 'axios'


export function signIn(userName, userPassword){
    return dispatch=>{
        axios.post("/api/signin", {
            username: userName,
            password: userPassword
        })

        .then(json => { window.localStorage.setItem('token', json.data.data)
        dispatch({
            type: "AUTH_SUCCESS"
        })
    })
       
    }
}