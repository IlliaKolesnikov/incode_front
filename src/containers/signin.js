import {connect} from 'react-redux'
import SignIn from "views/SignIn/SignIn.jsx";
import {signIn } from '../actions/signActions'

function mapStateToProps(state){
    return{
        sign: state.main
    }
}

function mapDispatchToProps(dispatch){
    return{
        signIn: (userName, userPassword)=>dispatch(signIn(userName, userPassword)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)