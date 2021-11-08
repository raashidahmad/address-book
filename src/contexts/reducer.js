import React, { useReducer, useState } from 'react';

let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';

export const initialState = {
    token: '' || token
}

function AuthReducer(initialState, action) {
    switch(action) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true
            }
            break;

        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                token: action.payload.authToken,
                loading: false
            }
            break;

        case 'LOGOUT':
            return {
                ...initialState,
                token: '',
                loading: false
            }
            break;

        case 'LOGIN_ERROR':
            return {
                ...initialState,
                token: '',
                error: action.error
            }
            break;

        default:
            throw new Error(`Unhandled action: ${action.type}`);
            break;
    }
}

export default AuthReducer;