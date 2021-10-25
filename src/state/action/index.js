
const userDefaultState = {
    loggedIn: false,
    user: {}
};

const userStateReducer = (action) => {
    switch(action.type){
        case "SET_USER":
            return {
                loggedIn: true,
                user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        default: return state
    }
};
module.exports = { userStateReducer };
