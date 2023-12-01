
import { useState } from 'react';
import { proyectoApi } from '../Api/configuracion'
import { useSelector } from 'react-redux';
import { set } from 'react-hook-form';

export const useUsuarioService = () => {
    //const { user, mensajeError } = useSelector(state => state.Auth);
    const [usuarios, setUsuarios] = useState([]);
    const [miembros, setMiembros] = useState([]);
    const [usuarioActual, setUsuarioActual] = useState({});
    const [mensajeError, setMensajeError] = useState(undefined);


    const obtenerUsuarios = async (cadenaBuscar = "") => {
        try {
            let user = JSON.parse(localStorage.getItem('user'))

            const { data } = await proyectoApi.get(`usuario/all?cadenaBuscar=${cadenaBuscar}`);
            setUsuarios([...data].filter(u => u.id != user.uid))
        } catch (error) {
            setMensajeError(error.response.data)
            setTimeout(() => {
                setMensajeError("")
            }, 10)
        }
    }

    const obtenerUsuario = async (uid) => {

        try {
            const { data } = await proyectoApi.get(`usuario/${uid}`);
            setUsuarioActual(data);

        } catch (error) {
            setMensajeError(error.response.data)
            setTimeout(() => {
                setMensajeError("")
            }, 10)
        }
    }

    const obtenerMiembros = async (pId) => {

        try {
            const { data } = await proyectoApi.get(`miembro/${pId}`)
            setMiembros(data);

        } catch (error) {
            setMensajeError(error.response.data)
            setTimeout(() => {
                setMensajeError("")
            }, 10)
        }

    }

    const obtenerNuevosMiembros = async (pId, cadenaBuscar = "") => {
        try {
            const { data } = await proyectoApi.get(`usuario/${pId}/nuevos_m?cadenaBuscar=${cadenaBuscar}`)
            setUsuarios(data);
        } catch (error) {
            setMensajeError(error.response.data)
            setTimeout(() => {
                setMensajeError("")
            }, 10)
        }
    }

    const modUsuario = async ({ uid, nombre, apellido, email, password }) => {

        try {

            const usuarioEdit = {
                Id: uid,
                nombre,
                apellido,
                email,
                password: password == null ? "" : password,
                rol: "Usuario",
                estado: "Activo",
            }

            const { data } = await proyectoApi.put(`usuario/mod_usuario`, usuarioEdit);
            setUsuarioActual({ nombre, apellido, email });

            const user = JSON.parse(localStorage.getItem('user'));
            user.nombre = nombre + ' ' + apellido;
            localStorage.setItem('user', JSON.stringify(user));

        } catch (error) {

            setMensajeError(error.response.data.message);
            setTimeout(() => {
                setMensajeError(undefined)
            }, 10);
        }
    }

    const agregarPermisoUsuario = async (uid, rol) => {

        try {

            await proyectoApi.put(`usuario/${uid}/permisos`, { rol })
            await obtenerUsuarios();
        } catch (error) {

            setMensajeError("Ocurrio un error")
            setTimeout(() => {
                setMensajeError(undefined)
            }, 10);
        }
    }

    const bloquearUsuario = async (uid) => {

        try {
            await proyectoApi.put(`usuario/${uid}/bloquear`);
            await obtenerUsuarios();

        } catch {

            setMensajeError("Ocurrio un error")
            setTimeout(() => {
                setMensajeError(undefined)
            }, 10);
        }
    }

    return {
        usuarios,
        miembros,
        usuarioActual,
        obtenerMiembros,
        obtenerUsuarios,
        obtenerNuevosMiembros,
        obtenerUsuario,
        mensajeError,
        modUsuario,
        agregarPermisoUsuario,
        bloquearUsuario
    }
}
