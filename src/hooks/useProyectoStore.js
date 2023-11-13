import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    AgregarMiembro,
    ObtenerProyectoActual,
    ObtenerProyectos,
    Modificarproyecto,
    CrearMensajeError,
    LimpiarMensajeError
} from '../store/Proyecto/ProyectoSlice'
import { proyectoApi } from "../Api/configuracion"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "./useAuthStore"


export const useProyectoStore = () => {

    const {
        Id,
        Titulo,
        Descripcion,
        Autor,
        AutorId,
        EstadoDesarrollo,
        Miembros,
        MensajeError } = useSelector(state => state.proyecto)

    const { user } = useAuthStore();

    const [proyectos, setProyectos] = useState([])
    const [miem, setMiem] = useState([]);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const ProyectoActual = async (proyectoId) => {

        try {

            const { data } = await proyectoApi.get(`proyecto/${proyectoId}`);

            /* setMiem(data.miembros);
            console.log(miem) */
            console.log(data)

            dispatch(ObtenerProyectoActual({
                Titulo: data.titulo,
                Id: data.id,
                Descripcion: data.descripcion,
                EstadoDesarrollo: data.estadoDesarrollo,
                Miembros: data.miembros,
                Autor: data.autorNombre,
                AutorId: data.autorId
            }));

            localStorage.setItem('proyecto', JSON.stringify(data.autorId));


        } catch (error) {

            console.log(error);
        }
    }

    const obtenerMisProyectos = async (cadenabuscar = "") => {

        try {
            const { data } = await proyectoApi.get(`proyecto/${user.uid}/all`);
            setProyectos(data);

        } catch (error) {

            console.log(error);
        }
    }

    const obtenerProyectosParticipacion = async () => {

        try {

            const { data } = await proyectoApi.get(`proyecto/${user.uid}/participando`);
            console.log(data)
            setProyectos(data);
        } catch (error) {

        }
    }

    const crearProyecto = async ({ titulo, descripcion, miembros }) => {

        try {
            const proyecto = {
                titulo,
                descripcion,
                miembros,
                estadoDesarrollo: 0,
                autorId: Number(user.uid),
                autorNombre: user.nombre
            }
            const { data } = await proyectoApi.post('proyecto/add', proyecto);
            setProyectos([...proyectos, proyecto]);

        } catch (error) {
            console.log(error)
        }
    }

    const editarProyecto = async ({ titulo, descripcion, estadoDesarrollo, autorId }) => {

        try {

            const proyecto = {
                id: Id,
                titulo,
                descripcion,
                estadoDesarrollo: Number(estadoDesarrollo),
                autorId
            }
            const { data } = await proyectoApi.put(`proyecto/${Id}/editar`, proyecto);

            dispatch(Modificarproyecto({
                Titulo: data.titulo,
                Descripcion: data.descripcion,
                EstadoDesarrollo: data.estadoDesarrollo
            }))

        } catch (error) {

            dispatch(CrearMensajeError("Ocurruio un error inesperado, intente mas tarde"));
            setTimeout(() => {
                dispatch(LimpiarMensajeError());
            }, 10);
        }
    }

    const eliminarProyecto = async (pid) => {

        try {

            const { data } = await proyectoApi.delete(`proyecto/proyecto_delete/${pid}`);
            setProyectos(p => p.filter(pr => pr.id != pid));
            console.log(data);

        } catch (error) {

            dispatch(CrearMensajeError("Ocurruio un error inesperado, intente mas tarde"));
            setTimeout(() => {
                dispatch(LimpiarMensajeError());
            }, 10);
        }

    }

    return {
        //state
        Id,
        Titulo,
        Descripcion,
        Autor,
        EstadoDesarrollo,
        //miem,
        Miembros,
        MensajeError,
        proyectos,
        AutorId,

        //Metodos
        ProyectoActual,
        crearProyecto,
        obtenerMisProyectos,
        editarProyecto,
        obtenerProyectosParticipacion,
        eliminarProyecto
    }
}
