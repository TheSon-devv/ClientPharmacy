import { combineReducers } from "redux";
import { auth } from "./auth";
import { cart } from "./cart";

export const reducers = combineReducers({
    auth,
    cart
})