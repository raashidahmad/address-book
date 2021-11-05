import React from 'react';
import { useContext, useState } from "react";

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

export function GetUserContext()
{
    return useContext(UserContext);
}

export function SetUserContext()
{
    return useContext(UserContext);
}

function UserContextProvider({children}) {
    const [userToken, setUserTokenInContext] = useState(null);

    function setUserToken(token) {
        setUserTokenInContext(token);
    }

    function getUserToken() {
        return userToken;
    }

    return(
        <UserContext.Provider value={getUserToken}>
            <UpdateUserContext.Provider value={setUserToken}>
                {children}
            </UpdateUserContext.Provider>
        </UserContext.Provider>
    );
}
export default UserContextProvider;
