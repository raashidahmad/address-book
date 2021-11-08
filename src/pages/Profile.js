import { useEffect, useState } from 'react';

function ProfilePage() {
    const [userInfo, setUserInfo] = useState();
    console.log('Profile page rendered');
    useEffect(() => {
        var token = localStorage.getItem('token');
        if (token) {
            setUserInfo(token);
        }
    }, []);
    return(
        <div>This is your profile page. The user token is: {userInfo}</div>
    )
}

export default ProfilePage;