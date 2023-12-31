import { useDispatch, useSelector } from "react-redux"
import { setEtiqueta, crearMensajeError, borrarMensajeError, modEtiqueta } from '../store/Proyecto/EtiquetaSlice'
import { setEtiquetas } from '../store/Proyecto/ProyectoSlice'
import { proyectoApi } from "../Api/configuracion";
import { useNavigate } from 'react-router-dom'

export const useEtiquetaStore = () => {

    const {
        Titulo,
        Detalles,
        Fecha,
        Estado,
        Prioridad,
        Comentarios,
        MiembroId,
        MensajeError,
    } = useSelector(state => state.etiqueta);

    const { Etiquetas } = useSelector(state => state.proyecto);

    //const [etiquetas, setEtiquetas] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const obtenerEtiquetas = async (pid, cadenaBuscar = "", prioridad = "4") => {

        try {
            const { data } = await proyectoApi.get(`Etiqueta/${pid}/all?cadenaBuscar=${cadenaBuscar}&prioridad=${Number(prioridad)}`);
            dispatch(setEtiquetas(data));
        } catch (error) {

            dispatch(crearMensajeError(error));
            setTimeout(() => {
                dispatch(borrarMensajeError)
            }, 10);
        }
    }

    const obtenerEtiqueta = async (etiquetaId) => {
        try {

            const { data } = await proyectoApi.get(`etiqueta/${etiquetaId}`);

            dispatch(setEtiqueta(data));

        } catch (error) {

            dispatch(crearMensajeError(error));
            setTimeout(() => {
                dispatch(borrarMensajeError)
            }, 10);
        }
    }

    const crearEtiqueta = async ({ titulo, prioridad, detalles, pid }) => {
        try {

            const nuevaEtiqueta = {
                titulo,
                detalles,
                prioridad: Number(prioridad),
                proyectoId: Number(pid)
            }
            await proyectoApi.post(`etiqueta/etiqueta_add`, nuevaEtiqueta);

            //const etiq = [...Etiquetas]
            obtenerEtiquetas(pid)
            navigate(`/proyecto/${pid}`);



        } catch (error) {

            dispatch(crearMensajeError(error.response.data));
            setTimeout(() => {
                dispatch(borrarMensajeError())
            }, 10);
        }
    }

    const modificarEtiqueta = async ({ titulo, prioridad, detalles, id }) => {
        try {

            const nuevaEtiqueta = {
                titulo,
                detalles,
                prioridad: Number(prioridad)
            }

            const { data } = await proyectoApi.put(`etiqueta/etiqueta_mod/${id}`, nuevaEtiqueta);
            //setEtiquetas([...Etiquetas])
            dispatch(modEtiqueta(nuevaEtiqueta));

        } catch (error) {
            dispatch(crearMensajeError(error));
            setTimeout(() => {
                dispatch(borrarMensajeError)
            }, 10);
        }
    }

    const cerrarEtiqueta = async (eid) => {

        try {

            await proyectoApi.put(`etiqueta/etiqueta_cerrar/${eid}`);
            //setEtiquetas([]);

        } catch (error) {

            dispatch(crearMensajeError(error));
            setTimeout(() => {
                dispatch(borrarMensajeError)
            }, 10);
        }
    }

    const eliminarEtiqueta = async (eid) => {
        try {

            await proyectoApi.delete(`etiqueta/etiqueta_eliminar/${eid}`);
            const filEtiquetas = Etiquetas.filter(x => x.id != eid);
            dispatch(setEtiquetas(filEtiquetas))

        } catch (error) {

            dispatch(crearMensajeError('Error inesperado'));
            setTimeout(() => {
                dispatch(borrarMensajeError)
            }, 10);
        }
    }

    return {
        //propiedades
        Titulo,
        Detalles,
        Fecha,
        Estado,
        Prioridad,
        Comentarios,
        Etiquetas,
        MensajeError,
        MiembroId,

        //metodos
        obtenerEtiqueta,
        obtenerEtiquetas,
        crearEtiqueta,
        modificarEtiqueta,
        cerrarEtiqueta,
        eliminarEtiqueta
    }
}
