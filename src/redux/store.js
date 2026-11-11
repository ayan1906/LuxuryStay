import { configureStore } from "@reduxjs/toolkit";

import  roomreducer  from "./features/roomSlice";
import  authreducer  from "./features/authSlice";

export const store = configureStore({
    reducer: {
        auth: authreducer,
        rooms: roomreducer
    }
})