import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from './Auth/authSlice'
import { proyectoSlice } from "./Proyecto/ProyectoSlice";
import { etiquetaSlice } from './Proyecto/EtiquetaSlice'
import { comentariosSlice } from "./Proyecto/ComentariosSlice";

/* const persistConfig = {
    key: 'root',
    storage: localStorage
}

const reducers = combineReducers({
    auth: authSlice.reducer,
    proyecto: proyectoSlice.reducer,
    etiqueta: etiquetaSlice.reducer
});
 */


/* const persistedReducer = persistReducer(persistConfig, reducers) */

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        proyecto: proyectoSlice.reducer,
        etiqueta: etiquetaSlice.reducer,
        comentarios: comentariosSlice.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
