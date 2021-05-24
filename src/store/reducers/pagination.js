import * as actions from "../actions/actionType";

const initState = {
    totalPage : 0,
    currentPage : 1,
    perPage : 6
}

export const pagination = (state = initState, action) => {
    switch (action.type) {
        case actions.TOTAL_PAGE:
            return {
                ...state,
                totalPage : action.payload
            }
        case actions.GET_PAGE:
            return {
                ...state,
                currentPage : action.payload
            }
        case actions.GET_PER_PAGE:
            return {
                ...state,
                perPage : action.payload
            }
        default:
            return state;
    }
}