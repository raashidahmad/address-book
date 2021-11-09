import React, { useReducer, useState } from 'react';

let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const initialState = {
    token: '' || token,
    loading: false,
    errorMessage: null
}

export function AuthReducer(initialState, action) {
    switch(action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true
            }
            break;

        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                token: action.payload.token,
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