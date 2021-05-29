import { combineReducers } from "redux";
import { auth } from "./auth";
import { cart } from "./cart";
import { pagination } from "./pagination";
import { chat } from "./chat";

export const reducers = combineReducers({
    auth,
    cart,
    pagination,
    chat
})