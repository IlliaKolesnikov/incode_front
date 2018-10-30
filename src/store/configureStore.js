import {createStore} from 'redux'
import rootReducer from '../reducers/main'

function configureStore(initialState){
    const store = createStore(rootReducer, initialState)
    return store
}

export default configureStore