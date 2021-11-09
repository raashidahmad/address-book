import { useAuthDispatch, useAuthState } from '../contexts/contexts';
import React from 'react';

function ProfilePage() {
    const dispatch = useAuthDispatch();
    const userData = useAuthState();
    
    return(
        <div>This is your profile page. The user token is: {userData.token}</div>
    )
}

export default ProfilePage;