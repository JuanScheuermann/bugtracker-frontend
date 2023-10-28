import { createSlice } from '@reduxjs/toolkit';

export const proyectoSlice = createSlice({
    name: 'proyecto',
    initialState: {
        Titulo: '',
        Descripcion: '',
        Autor: '',
        Miembros: []
    },
    reducers: {
        CrearNuevoProyecto: (state, { payload }) => {
            state.Titulo = payload.Titulo
            state.Descripcion = payload.Descripcion
            state.Autor = payload.Autor
            state.Miembros = payload.Miembros
        },
        ObtenerProyectoActual: (state, { payload }) => {
            state.Titulo = payload.Titulo
            state.Descripcion = payload.Descripcion
            state.Autor = payload.Autor
            state.Miembros = payload.Miembros
        },
        AgregarMiembro: (state, { payload }) => {
            state.Miembros = [...payload]
        },


    }
});


export const { AgregarMiembro, CrearNuevoProyecto, ObtenerProyectoActual } = proyectoSlice.actions;