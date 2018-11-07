import {connect} from 'react-redux'
import SignIn from "views/SignIn/SignIn.jsx";
import {signIn, changeStatus } from '../actions/signActions'

function mapStateToProps(state){
    return{
        sign: state.main
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeStatus: ()=>dispatch(changeStatus()),
        signIn: (userName, userPassword)=>dispatch(signIn(userName, userPassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)