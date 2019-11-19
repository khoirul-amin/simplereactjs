import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import setupInterceptors from './middlewares/interceptors'

setupInterceptors()

const enhancers = []
if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    /* eslint-enable */

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(thunk),
    ...enhancers
)

const store = createStore(rootReducer, composedEnhancers)


export default store
