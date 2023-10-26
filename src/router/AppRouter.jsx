import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProyectoRoutes } from '../ProyectoApp/routes/ProyectoRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='/*' element={
                    <ProyectoRoutes />
                } />
            </Routes>
        </>
    )
}
