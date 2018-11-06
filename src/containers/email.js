import {connect} from 'react-redux'
import Verification from "views/Verification/Email.jsx";
import {verifyUser} from '../actions/signActions'

function mapStateToProps(state){
    return{
        sign: state.main
    }
}

function mapDispatchToProps(dispatch){
    return{
        verifyUser: (userName)=>dispatch(verifyUser(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification)