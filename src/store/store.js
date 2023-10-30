import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './Auth/authSlice'
import { proyectoSlice } from "./Proyecto/ProyectoSlice";
import {etiquetaSlice} from './Proyecto/EtiquetaSlice'

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        proyecto: proyectoSlice.reducer,
        etiqueta: etiquetaSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})