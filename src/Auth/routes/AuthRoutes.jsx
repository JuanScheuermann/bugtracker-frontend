import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegistrarPage } from '../pages'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='registrar' element={<RegistrarPage />} />
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
