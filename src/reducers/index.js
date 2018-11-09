import {combineReducers} from 'redux'
import main from './main'
import exercises from './exercises'
import workouts from './workout'

const rootReducer = combineReducers({
    main, exercises, workouts
})

export default rootReducer