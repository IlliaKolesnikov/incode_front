import {connect} from 'react-redux'
import Dashboard from '../layouts/Dashboard/Dashboard'

function mapStateToProps(state){
    return{
        main: state.main
    }
}

function mapDispatchToProps(dispatch){
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)