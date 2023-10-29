import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NuevoProyectoPage, ProyectosPage, ProyectoPage, NotasPage, NuevaEtiquetaPage } from '../pages'
import { SideBar } from '../UI/SideBar'
import { Layout } from '../UI/Layout'

export const ProyectoRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/proyecto/:id' element={<ProyectoPage />} />
                    <Route path='/proyecto/nuevo' element={<NuevoProyectoPage />} />
                    <Route path='/' element={<ProyectosPage />} />
                    <Route path='/proyecto/:id/notas' element={<NotasPage />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                    <Route path='/proyecto/:id/etiqueta_nueva' element={<NuevaEtiquetaPage />} />
                </Routes>
            </Layout>
        </>
    )
}
