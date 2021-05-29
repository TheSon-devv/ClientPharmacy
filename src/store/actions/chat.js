import * as actionType from "./actionType";

export const changeStateChat = () => {
    return {
        type: actionType.CHANGE_STATE_CHAT,
    }
}
export const closeChat = () => {
    return {
        type: actionType.CLOSE_CHAT,
    }
}