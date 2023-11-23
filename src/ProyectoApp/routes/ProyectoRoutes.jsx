import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
    NuevoProyectoPage,
    ProyectosPage,
    ProyectoPage,
    NotasPage,
    NuevaEtiquetaPage,
    ProyectosParticipacion,
    AgregarMiembro,
    PerfilPage,
    AdminUsuariosPage
} from '../pages'
import { SideBar } from '../UI/SideBar'
import { Layout } from '../UI/Layout'

export const ProyectoRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/proyectos/participacion' element={<ProyectosParticipacion />} />
                    <Route path='/proyecto/:id' element={<ProyectoPage />} />
                    <Route path='/proyecto/nuevo' element={<NuevoProyectoPage />} />
                    <Route path='/proyectos' element={<ProyectosPage />} />
                    <Route path='/proyecto/:id/etiquetas/:eid' element={<NotasPage />} />
                    <Route path='/*' element={<Navigate to='/proyectos' />} />
                    <Route path='/proyecto/:id/etiqueta_nueva' element={<NuevaEtiquetaPage />} />
                    <Route path='/proyecto/:id/agregar_miembro' element={<AgregarMiembro />} />
                    <Route path='/perfil' element={<PerfilPage />} />
                    <Route path='/admin/usuarios' element={<AdminUsuariosPage />} />

                </Routes>
            </Layout>
        </>
    )
}
