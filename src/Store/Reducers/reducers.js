import Auth from "./Auth";
import User from "./User";
import Users from "./Users";
import CategoryState from "./CategoryState";
import {combineReducers} from "@reduxjs/toolkit";
import MyJokes from "./MyJokes";
import CurrentFeed from "./CurrentFeed";

const rootReducer=combineReducers({
    loggedIn: Auth,
    User: User,
    Users: Users,
    CategoryState: CategoryState,
    MyJokes:MyJokes,
    CurrentFeed:CurrentFeed
})
export default rootReducer;