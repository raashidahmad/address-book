
const setUserLoggedIn = function (userInfo) {
    localStorage.setItem("user", userInfo);
}

const setUserLoggedOut = function () {
    localStorage.setItem("user", null);
}

const isUserLoggedIn = function () {
    var user = localStorage.getItem("user");
    return (user == null) ? false : true;
}

const getUserInfo = function () {
    var user = localStorage.getItem("user");
    var userInfo = {};
    if (user) {
        userInfo.token = user.token;
    }
    return userInfo;
}

export default [setUserLoggedIn, getUserInfo, setUserLoggedOut, isUserLoggedIn];