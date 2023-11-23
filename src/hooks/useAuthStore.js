import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onLoging, onLogout, onChecking, borrarMensajeError } from '../store/Auth/authSlice';
import { proyectoApi } from '../Api/configuracion'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useAuthStore = () => {

    const { status, user, mensajeError } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());
        try {

            const { data } = await proyectoApi.post('auth/login', { email, password });
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify({
                nombre: data.nombre,
                uid: data.uid,
                rol: data.rol
            }));
            dispatch(onLoging({ uid: data.uid, nombre: data.nombre, rol: data.rol }))

        } catch (err) {
            console.log(err.response.data?.message)
            dispatch(onLogout(err.response.data?.message));
            setTimeout(() => {
                dispatch(borrarMensajeError())
            }, 10);
        }
    }

    const startRegister = async ({ nombre, apellido, email, password }) => {

        try {
            const newUsuario = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password,
                rol: "Usuario"
            }
            const { data } = await proyectoApi.post('auth/registrar', newUsuario);
            navigate('/auth/login');
        } catch (err) {
            dispatch(onLogout(err.response.data?.message));
            setTimeout(() => {
                dispatch(borrarMensajeError())
            }, 10);
        }

    }

    const revisarTokenAuth = () => {

        try {

            const token = JSON.parse(localStorage.getItem('token'));

            if (!token) {
                dispatch(onLogout());
            }

            const { nombre, uid } = JSON.parse(localStorage.getItem('user'));
            localStorage.setItem('token', token);
            dispatch(onLoging({ uid, nombre }))
        }
        catch {
            dispatch(onLogout());
        }


        //dispatch(onLoging({ nombre: 'Juan Scheuermann', uid: 'abc123' }))
    }

    const sendMail = async ({ email }) => {
        try {

            await proyectoApi.post(`auth/verificar`, { email });

            Swal.fire('Verificado', "Se le a enviado un correo para continuar", 'success');
        } catch (err) {

            dispatch(onLogout("Usuario no encontrado"));
            setTimeout(() => {
                dispatch(borrarMensajeError())
            }, 10);
        }
    }

    const cambiarContraseña = async ({ password, token }) => {

        try {

            await proyectoApi.put(`auth/cambio_contrasena?token=${token}`, { password });
            navigate('/auth/login');

        } catch (error) {
            console.log(error.response.data);
            dispatch(onLogout(error.response.data));
            setTimeout(() => {
                dispatch(borrarMensajeError())
            }, 10);
        }
    }

    const setLocalUser = ({ nombre, uid, rol }) => {
        dispatch(onLoging({ uid, nombre, rol }));
    }
    const startLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        dispatch(onLogout())
    }

    return {
        //propiedades
        status,
        user,
        mensajeError,

        //metodos
        startLogin,
        startRegister,
        startLogout,
        revisarTokenAuth,
        setLocalUser,
        cambiarContraseña,
        sendMail
    }
}
