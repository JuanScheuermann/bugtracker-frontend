
import { useState } from 'react';
import { proyectoApi } from '../Api/configuracion'
import { useSelector } from 'react-redux';

export const useUsuarioService = () => {

    const { user, mensajeError } = useSelector(state => state.Auth);
    const [usuarios, setUsuarios] = useState([]);
    const [miembros, setMiembros] = useState([]);

    const obtenerUsuarios = async () => {
        try {
            let user = JSON.parse(localStorage.getItem('user'))

            const { data } = await proyectoApi.get(`usuario/all`);
            setUsuarios([...data].filter(u => u.id != user.uid))
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerUsuario = async (uid) => {

        try {
            const { data } = await proyectoApi.get(`usuario/${uid}`);
            console.log(data);

        } catch (error) {

        }
    }

    const obtenerMiembros = async (pId) => {

        try {
            const { data } = await proyectoApi.get(`miembro/${pId}`)
            setMiembros(data);

        } catch (error) {
            console.log(error)
        }

    }

    const obtenerNuevosMiembros = async (pId) => {
        try {
            const { data } = await proyectoApi.get(`usuario/${pId}`)
            console.log(data);
            setUsuarios(data);
        } catch (error) {
            console.log(error)
        }
    }

    return {
        usuarios,
        miembros,
        obtenerMiembros,
        obtenerUsuarios,
        obtenerNuevosMiembros,
        obtenerUsuario
    }
}
