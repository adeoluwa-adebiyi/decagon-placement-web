import { combineReducers, createStore, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/user-reducer";
import createSagaMiddleware, { runSaga } from "redux-saga";
import allSagas from "./sagas/sagas";


const sagaMiddleWare = createSagaMiddleware();

const combinedReducers = combineReducers({
    users: usersReducer
});


const store = createStore(combinedReducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(allSagas);

export default store;

