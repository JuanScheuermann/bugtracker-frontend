import { createSlice } from '@reduxjs/toolkit';


export const etiquetaSlice = createSlice({

    name: 'etiqueta',
    initialState: {
        Titulo: '',
        Detalles: '',
        Estado: '',
        Prioridad: '',
        Fecha: '',
        MiembroId: '',
        MensajeError: undefined
        /*         Comentarios: [] */
    },
    reducers: {

        setEtiqueta: (state, { payload }) => {
            state.Titulo = payload.titulo;
            state.Detalles = payload.detalles
            state.Estado = payload.estadoApertura
            state.Prioridad = payload.prioridad
            state.Fecha = payload.fecha
            state.MiembroId = payload.miembroId
            /* state.Comentarios = [...payload.comentarios] */
        },
        modEtiqueta: (state, { payload }) => {
            state.Titulo = payload.titulo
            state.Detalles = payload.detalles,
                state.Prioridad = payload.prioridad
        },
        crearMensajeError: (state, { payload }) => {
            state.MensajeError = payload;
        },
        borrarMensajeError: (state, { payload }) => {
            state.MensajeError = undefined;
        }
    }
});

export const { setEtiqueta, crearMensajeError, borrarMensajeError, modEtiqueta } = etiquetaSlice.actions;