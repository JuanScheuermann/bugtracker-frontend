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
        Etiquetas: [],
        Proyectos: [],
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
            state.Miembros = payload.Miembros,
                state.MensajeError = undefined

        },

        Modificarproyecto: (state, { payload }) => {
            state.Titulo = payload.Titulo
            state.Descripcion = payload.Descripcion
            state.EstadoDesarrollo = payload.EstadoDesarrollo
            state.MensajeError = undefined
        },

        setEtiquetas: (state, { payload }) => {
            state.Etiquetas = payload
        },

        setMiembros: (state, { payload }) => {
            state.Miembros = payload
        },

        setMisProyectos: (state, { payload }) => {
            state.Proyectos = payload
        },

        CrearMensajeError: (state, { payload }) => {
            state.MensajeError = payload
        },

        LimpiarMensajeError: (state, { payload }) => {
            state.MensajeError = undefined
        }
    }
});


export const {
    setMiembros,
    CrearNuevoProyecto,
    CrearMensajeError,
    LimpiarMensajeError,
    ObtenerProyectoActual,
    ObtenerProyectos,
    Modificarproyecto,
    setEtiquetas,
    setMisProyectos
} = proyectoSlice.actions;