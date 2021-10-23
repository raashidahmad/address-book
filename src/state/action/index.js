const userLoggedIn = (userId) => {
    return (dispatch) => {
        dispatch({
            type: 'loggedIn',
            payload: userId
        });
    };
}

const userLoggedOut = (userId) => {
    return (dispatch) => {
        dispatch({
            type: 'loggedOut',
            payload: userId
        });
    }
}
module.exports = { userLoggedIn, userLoggedOut };
