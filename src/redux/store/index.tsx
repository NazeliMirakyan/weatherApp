import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "../reducer/weatherReducer";

export const store = createStore(combineReducers({weatherReducer}), applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch