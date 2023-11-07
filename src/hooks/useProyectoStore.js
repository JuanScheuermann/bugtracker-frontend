import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AgregarMiembro, ObtenerProyectoActual } from '../store/Proyecto/ProyectoSlice'
import { proyectoApi } from "../Api/configuracion"
import { useNavigate } from "react-router-dom"


export const useProyectoStore = () => {

    const { Id, Titulo, Descripcion, Autor, EstadoDesarrollo, Miembros, MensajeError } = useSelector(state => state.proyecto)
    const { uid, nombre } = JSON.parse(localStorage.getItem('user'));

    const [proyectos, setProyectos] = useState([])


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const ProyectoActual = async (proyectoId) => {

        try {

            const { data } = await proyectoApi.get(`proyecto/${proyectoId}`);
            dispatch(ObtenerProyectoActual({
                Titulo: data.titulo,
                Id: data.id,
                Descripcion: data.descripcion,
                EstadoDesarrollo: data.estadoDesarrollo,
                Miembros: data.miembros,
                Autor: data.autorNombre,
                AutorId: data.autorId
            }));

        } catch (error) {

            console.log(error);
        }
    }

    const obtenerMisProyectos = async () => {

        try {
            const { data } = await proyectoApi.get('proyecto/all');

            setProyectos(data.reverse());

        } catch (error) {

            console.log(error);
        }
    }

    const crearProyecto = async ({ titulo, descripcion, miembros }) => {

        try {
            const proyecto = {
                titulo,
                descripcion,
                miembros,
                estadoDesarrollo: 0,
                autorId: Number(uid),
                autorNombre: nombre
            }
            const { data } = await proyectoApi.post('proyecto/add', proyecto);
            console.log(data)
            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }

    const editarProyecto = async ({ titulo, descripcion, estadoDesarrollo }) => {

        try {

            const proyecto = {
                id: Id,
                titulo,
                descripcion,
                estadoDesarrollo
            }
            const { data } = await proyectoApi.put(`proyecto/${Id}/editar`, proyecto);

            Titulo = data.titulo;
            Descripcion = data.descripcion;
            EstadoDesarrollo = data.estadoDesarrollo;

        } catch (error) {

            console.log(error);
        }
    }

    const agregarNuevoMiembro = ({ miembros }) => {
        dispatch(AgregarMiembro(miembros))
    }



    return {
        //state
        Titulo,
        Descripcion,
        Autor,
        EstadoDesarrollo,
        Miembros,
        MensajeError,
        proyectos,

        //Metodos
        ProyectoActual,
        agregarNuevoMiembro,
        crearProyecto,
        obtenerMisProyectos,
        editarProyecto
    }
}
