import * as actions from "../actions/actionType";

const initState = {
    userToken: null,
    userId : null,
    loading: false,
    message : ""
}

export const auth = (state = initState, action) => {
    switch (action.type) {
        case actions.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actions.AUTH_FAIL:
            return {
                ...state,
                message: action.payload
            }
        case actions.LOG_OUT:
            return {
                ...state,
                userToken: null,
                loading: false
            }
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                userToken: action.userToken,
                userId: localStorage.getItem('userId'),
                loading: false,
            }
        default:
            return state;
    }
}