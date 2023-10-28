import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onLoging, onLogout, onChecking } from '../store/Auth/authSlice';

export const useAuthStore = () => {

    const { status, user, mensajeError } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = ({ email, password }) => {

        dispatch(onChecking());
        if (email == 'test1@test.com' && password == 'test1234') {
            localStorage.setItem('user', JSON.stringify({ nombre: 'Juan Scheuermann', uid: 'abc123' }))
            dispatch(onLoging({ nombre: 'J. Scheuermann', uid: 'abc123' }))
        }
        else {
            dispatch(onLogout('Usuario o contraseña incorrecta'));
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
