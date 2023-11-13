import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegistrarPage } from '../pages'
import { VerificarPage } from '../pages/VerificarPage'
import { ContrasenaPage } from '../pages/ContrasenaPage'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='registrar' element={<RegistrarPage />} />
            <Route path='verificar' element={<VerificarPage />} />
            <Route path='verificar/cambiar/:token' element={<ContrasenaPage />} />
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
