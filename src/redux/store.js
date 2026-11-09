import { configureStore } from "@reduxjs/toolkit";

import  roomreducer  from "./features/roomSlice";

export const store = configureStore({
    reducer: {
        rooms: roomreducer
    }
})