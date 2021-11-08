import React from 'react';
import { useReducer } from 'react';
import { AuthReducer, initialState } from './reducer';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export function useAuthState() {
    var context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('Auth state must be used in the auth state provider'); 
    }
    return context;
}

export function useAuthDispatch() {
    var context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error('Auth dispatch context must be used within the provider');
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={user} >
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );  
}