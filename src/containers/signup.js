import {connect} from 'react-redux'
import SignUp from "views/SignUp/SignUp.jsx";
import {signUp} from '../actions/signActions'

function mapStateToProps(state){
    return{
        sign: state.main
    }
}

function mapDispatchToProps(dispatch){
    return{
        signUp: (userName, userPassword)=>dispatch(signUp(userName, userPassword)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)