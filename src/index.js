import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import LoginPayment from './components/payment/LoginPayment';


ReactDOM.render(
    <Provider store={store}>
        <LoginPayment/>
    </Provider>
    , document.getElementById('root'));

