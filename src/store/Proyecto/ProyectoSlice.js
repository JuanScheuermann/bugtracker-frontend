import { createSlice } from '@reduxjs/toolkit';

export const proyectoSlice = createSlice({
    name: 'proyecto',
    initialState: {
        Id: '',
        Titulo: '',
        Descripcion: '',
        Autor: '',
        AutorId: '',
        EstadoDesarrollo: '',
        Miembros: [],
        MensajeError: undefined
    },
    reducers: {
        CrearNuevoProyecto: (state, { payload }) => {
            state.Titulo = payload.Titulo
            state.Descripcion = payload.Descripcion
            state.EstadoDesarrollo = payload.EstadoDesarrollo
            state.AutorId = payload.AutorId
            state.Miembros = payload.Miembros
            state.MensajeError = undefined
        },
        ObtenerProyectoActual: (state, { payload }) => {
            state.Id = payload.Id
            state.Titulo = payload.Titulo
            state.Descripcion = payload.Descripcion
            state.Autor = payload.Autor
            state.AutorId = payload.AutorId
            state.EstadoDesarrollo = payload.EstadoDesarrollo
            state.Miembros = payload.Miembros
            state.MensajeError = undefined
        },

        Modificarproyecto: (state, { payload }) => {
            state.Titulo = payload.Titulo
            state.Descripcion = payload.Descripcion
            state.EstadoDesarrollo = payload.EstadoDesarrollo
            state.MensajeError = undefined
        },
        AgregarMiembro: (state, { payload }) => {
            state.Miembros = [...payload]
        },
    }
});


export const { AgregarMiembro, CrearNuevoProyecto, ObtenerProyectoActual } = proyectoSlice.actions;