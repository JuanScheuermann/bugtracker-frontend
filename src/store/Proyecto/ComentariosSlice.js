import { createSlice } from '@reduxjs/toolkit';

export const comentariosSlice = createSlice({
    name: 'comentarios',
    initialState: {
        comentarios: []
    },
    reducers: {
        setComentarios: (state, { payload }) => {
            state.comentarios = payload;
        },
    }
});


export const { setComentarios } = comentariosSlice.actions;