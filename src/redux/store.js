import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../features/AdminSlice"
import contactReducer from "../features/contactusSlice";
import membersReducer from "../features/membersSlice";


export const store = configureStore({
    reducer:{
        api:apiReducer,
        contact: contactReducer,
        members: membersReducer,
    }
});

export default store;
