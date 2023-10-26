import React from 'react'
import { Container } from 'react-bootstrap'
import { SideBar } from './SideBar'
import { ProyectosPage } from '../pages/ProyectosPage'

export const Layout = ({ children }) => {
    return (
        <Container fluid className='p-0 m-0'>
            <SideBar />
            {children}
        </Container>
    )
}
