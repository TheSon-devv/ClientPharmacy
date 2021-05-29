import * as actions from "../actions/actionType";

const initState = {
    open : false
}

export const chat = (state = initState, action) => {
    switch (action.type) {
        case actions.CHANGE_STATE_CHAT:
            return {
                ...state,
                open : true
            }
        case actions.CLOSE_CHAT:
            return {
                ...state,
                open : false
            }
        default:
            return state;
    }
}