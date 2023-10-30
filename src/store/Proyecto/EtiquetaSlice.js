import { createSlice } from '@reduxjs/toolkit';


export const etiquetaSlice = createSlice({

    name: 'etiqueta',
    initialState: {
        Titulo: '',
        Detalles: '',
        Fecha: '',
        Estado: '',
        Prioridad: '',
        Comentarios: []
    },
    reducers: {

        setEtiqueta: (state, {payload}) => {
            state.Titulo = payload.titulo;
            state.Detalles = payload.detalles
            state.Fecha = payload.fecha
            state.Estado = payload.estado
            state.Prioridad = payload.prioridad
            state.Comentarios = [...payload.comentarios]
        }
    }
});

export const {setEtiqueta} = etiquetaSlice.actions;