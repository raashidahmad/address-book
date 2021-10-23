const userState = null;

const stateReducer = (state, action) => {
    switch(action.type) {
        case "userLoggedIn":
            userState = state;
            break;

        case "userLoggedOut":
            userState = null;
            break;

        default:
            break;
    }
};