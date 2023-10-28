import { useDispatch, useSelector } from "react-redux"
import { proyectos } from '../Data/proyectos'
import { AgregarMiembro, ObtenerProyectoActual } from '../store/Proyecto/ProyectoSlice'


export const useProyectoStore = () => {

    const { Titulo, Descripcion, Autor, miembros } = useSelector(state => state.proyecto)
    const dispatch = useDispatch();


    const ProyectoActual = (proyectoId) => {

        const proyecto = proyectos.find((p) => p.id == proyectoId);
        dispatch(ObtenerProyectoActual({
            Titulo: proyecto.Titulo,
            Descripcion: proyecto.Descripcion,
            Autor: proyecto.Autor,
            Miembros: proyecto.Miembros
        }))
    }

    const agregarNuevoMiembro = ({ miembros }) => {
        dispatch(AgregarMiembro(miembros))
    }



    return {
        //state
        Titulo,
        Descripcion,
        Autor,

        //Metodos
        ProyectoActual,
        agregarNuevoMiembro
    }
}
