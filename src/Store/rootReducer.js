import { combineReducers } from "redux";

import { usersReducer } from "./users/usersReducer";

export const rootReducer = combineReducers({
    users: usersReducer
})