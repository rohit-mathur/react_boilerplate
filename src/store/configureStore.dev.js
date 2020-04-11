import createSagaMiddleware, {END} from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from './../containers/app/devTools';

const rootReducer = () => {
    return {}
}

const configureStore = initialState => {
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
    const store = createStore(rootReducer, initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            DevTools.instrument()
        )
    )
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END)
    return store;
}

export default configureStore