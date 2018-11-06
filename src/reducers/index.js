import {combineReducers} from 'redux'
import main from './main'
import exercises from './exercises'

const rootReducer = combineReducers({
    main, exercises
})

export default rootReducer