import { combineReducers } from 'redux'

import login from './loginReducer'

const appReducer = combineReducers({
    login
})

export default appReducer