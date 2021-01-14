import { combineReducers, createStore, applyMiddleware } from "redux";
import { UserReducerProps, usersReducer } from "./reducers/user-reducer";
import createSagaMiddleware from "redux-saga";
import allSagas from "./sagas/sagas";


const sagaMiddleWare = createSagaMiddleware();

const combinedReducers = combineReducers({
    users: usersReducer
});


const store = createStore(combinedReducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(allSagas);

export interface AppStoreState{
    users: UserReducerProps
}

export default store;

