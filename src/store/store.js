import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './Auth/authSlice'
import { proyectoSlice } from "./Proyecto/ProyectoSlice";

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        proyecto: proyectoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})