import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers/root";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const Wrapper = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
)
