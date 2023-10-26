import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NuevoProyectoPage, ProyectosPage, ProyectoPage, NotasPage } from '../pages'

export const ProyectoRoutes = () => {
    return (
        <Routes>
            <Route path='/proyecto/:id' element={<ProyectoPage />} />
            <Route path='/proyecto/nuevo' element={<NuevoProyectoPage />} />
            <Route path='/proyectos' element={<ProyectosPage />} />
            <Route path='/proyecto/:id/notas' element={<NotasPage />} />
        </Routes>
    )
}
