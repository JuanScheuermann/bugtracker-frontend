import { useDispatch, useSelector } from "react-redux"
import {etiquetas} from '../Data/proyectos'
import {setEtiqueta} from '../store/Proyecto/EtiquetaSlice'

export const useEtiquetaStore = () => {

    const {
        Titulo,
        Detalles,
        Fecha,
        Estado,
        Prioridad,
        Comentarios
    } = useSelector(state => state.etiqueta);
    const dispatch = useDispatch();

    const obtenerEtiqueta = (etiquetaId) => {

        const etiqueta = etiquetas.find((e) => e.id === etiquetaId);
        //console.log(etiqueta)
        dispatch(setEtiqueta(etiqueta))
    }

    return{
        //propiedades
        Titulo,
        Detalles,
        Fecha,
        Estado,
        Prioridad,
        Comentarios,

        //metodos
        obtenerEtiqueta
    }
}
