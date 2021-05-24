import { combineReducers } from "redux";
import { auth } from "./auth";
import { cart } from "./cart";
import { pagination } from "./pagination";

export const reducers = combineReducers({
    auth,
    cart,
    pagination
})