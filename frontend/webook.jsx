import React from 'react';
import ReactDOM from 'react-dom';
import {login, signUp, logout } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Hi!</h1>, root);
    // window.login = login;
    // window.signUp = signUp;
    // window.logout = logout;
})