import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProyectoRoutes } from '../ProyectoApp/routes/ProyectoRoutes'
import { AuthRoutes } from '../Auth/routes/AuthRoutes'
import { useAuthStore } from '../hooks/useAuthStore'


export const AppRouter = () => {

    const { revisarTokenAuth, status } = useAuthStore();

    useEffect(() => {
        revisarTokenAuth();
    }, []);

    if (status === 'verificando') {

        return (<h3>Cargando...</h3>)
    }
    return (
        <>
            <Routes>
                {
                    (status === 'autenticado')
                        ? <Route path='/*' element={<ProyectoRoutes />} />
                        : <Route path='/auth/*' element={<AuthRoutes />} />
                }

                <Route path='/*' element={<Navigate to='/auth/login' />} />
            </Routes>
        </>
    )
}
