import { createSlice } from '@reduxjs/toolkit';



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'verificando',
        user: {},
        mensajeError: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'verificando',
                state.user = {},
                state.mensajeError = undefined
        },

        onLoging: (state, { payload }) => {

            state.status = 'autenticado',
                state.user = payload,
                state.mensajeError = undefined
        },

        onLogout: (state, { payload }) => {
            state.status = 'no-autenticado',
                state.user = {},
                state.mensajeError = payload
        },
        borrarMensajeError: (state) => {
            state.mensajeError = undefined
        }
    }
});


export const { onChecking, onLoging, onLogout, borrarMensajeError } = authSlice.actions;