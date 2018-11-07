import {connect} from 'react-redux'
import SignUp from "views/SignUp/SignUp.jsx";
import {signUp, changeStatus, setError} from '../actions/signActions'

function mapStateToProps(state){
    return{
        sign: state.main
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeStatus: ()=>dispatch(changeStatus()),
        setError: (message)=>dispatch(setError(message)),
        signUp: (userName, userPassword)=>dispatch(signUp(userName, userPassword)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)