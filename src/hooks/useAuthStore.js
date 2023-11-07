import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onLoging, onLogout, onChecking } from '../store/Auth/authSlice';
import { proyectoApi } from '../Api/configuracion'

export const useAuthStore = () => {

    const { status, user, mensajeError } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        try {

            const { data } = await proyectoApi.post('auth/login', { email, password });
            localStorage.setItem('user', JSON.stringify({
                token: data.token,
                nombre: data.nombre,
                uid: data.uid
            }))
            console.log(data);
            dispatch(onLoging({ uid: data.uid, nombre: data.nombre }))

        } catch (err) {
            console.log(err.response.data?.message)
            dispatch(onLogout(err.response.data?.message));
        }
    }

    const startRegister = ({ nombre, apellido, email, password }) => {

        dispatch(onChecking())
        const newUser = { nombre: `${nombre} ${apellido}`, uid: 'ABC456' }

        sessionStorage.setItem('user', JSON.stringify({
            nombre: newUser.nombre,
            uid: newUser.uid
        }));

        dispatch(onLoging({ ...newUser }))

    }

    const revisarTokenAuth = () => {

        const token = localStorage.getItem('user');
        //const token = localStorage.getItem('user');

        if (!token) {
            dispatch(onLogout());
        }
        else {
            const { nombre, uid } = JSON.parse(token)
            dispatch(onLoging({ nombre, uid }))
        }

        //dispatch(onLoging({ nombre: 'Juan Scheuermann', uid: 'abc123' }))
    }

    const startLogout = () => {
        localStorage.removeItem('user')
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
        revisarTokenAuth
    }
}
