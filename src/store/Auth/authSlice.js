import { createSlice } from '@reduxjs/toolkit';

const userL = JSON.parse(localStorage.getItem('user'));

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
                state.user = userL,
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
        crearMensajeError: (state, { payload }) => {
            state.mensajeError = payload
        },
        borrarMensajeError: (state) => {
            state.mensajeError = undefined
        }
    }
});


export const { onChecking, onLoging, crearMensajeError, onLogout, borrarMensajeError } = authSlice.actions;