import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/main'
import thunk from 'redux-thunk'

function configureStore(initialState){
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    return store
}

export default configureStore