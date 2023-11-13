
import { useState } from 'react'
import { proyectoApi } from '../Api/configuracion'
import { useProyectoStore } from './useProyectoStore';
import { CrearMensajeError, LimpiarMensajeError } from '../store/Proyecto/ProyectoSlice'
import { useDispatch } from 'react-redux';

export const useMiembrosService = () => {

    const { MensajeError } = useProyectoStore();
    const [miembros, setMiembros] = useState([]);
    const dispatch = useDispatch();


    const obtenerMiembros = async (pId) => {

        try {
            const { data } = await proyectoApi.get(`miembro/${pId}`)
            setMiembros([...data]);
            sessionStorage.setItem('miembros', JSON.stringify(miembros))

        } catch (error) {
            dispatch(CrearMensajeError("ocurrio un error inesperado"));
            setTimeout(() => {
                dispatch(LimpiarMensajeError())
            }, 10)
        }

    }

    const agregarMiembro = async (pId, newMiembros) => {
        try {
            await proyectoApi.post(`miembro/${pId}/miembro_add`, newMiembros);
            setMiembros(newMiembros);

        } catch (error) {
            dispatch(CrearMensajeError("ocurrio un error inesperado"));
            setTimeout(() => {
                dispatch(LimpiarMensajeError())
            }, 10)
        }
    }

    const eliminarMiembro = async (pId, mId) => {

        try {

            const { data } = await proyectoApi.delete(`miembro/${pId}/eliminar_miembro/${mId}`);
            //const actualM = miembros.map(u => u).filter(m => m.id !== mId);
            setMiembros(m => m.filter(m => m.id != mId));

        } catch (error) {

            dispatch(CrearMensajeError("ocurrio un error inesperado"));
            setTimeout(() => {
                dispatch(LimpiarMensajeError())
            }, 10)
        }
    }

    return {
        miembros,

        obtenerMiembros,
        eliminarMiembro,
        agregarMiembro
    }
}
