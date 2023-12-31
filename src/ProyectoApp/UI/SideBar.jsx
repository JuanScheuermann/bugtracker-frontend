import React, { useState } from 'react'
import { Nav, Collapse, Button, DropdownButton, ButtonGroup, DropdownMenu, DropdownItem, Dropdown } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import './styles.css'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';

export const SideBar = () => {

    const { user, startLogout } = useAuthStore()
    const [open, setOpen] = useState(false);
    const [openDropHome, setOpenDropHome] = useState(false);

    const cerrarSesion = () => {
        startLogout();
    }

    const mostrarMenu = () => setOpen(true);
    const cerrarMenu = () => setOpen(false);

    return (
        <>
            <Nav
                className='p-3 justify-content-between align-items-center'
                style={{ backgroundColor: '#805AD5', color: 'whitesmoke' }}
            >
                <Nav.Item>
                    <i className="bi bi-list fs-4 text-white"
                        onClick={mostrarMenu}
                    >
                    </i>
                </Nav.Item>

                <Nav.Item className='d-flex align-items-center'>
                    <span style={{ color: 'whitesmoke', marginInline: '10px' }}>
                        {user.nombre}
                    </span>
                    {/*  <Image roundedCircle
                        style={{ marginLeft: '6px' }}
                        width={'50px'}
                        height={'50px'}
                        src='https://imgs.search.brave.com/Z8HOujr_Mk4LJgp1ft8Ou-VXGo57bU9NiyUTicIvm24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw'
                    /> */}
                </Nav.Item>

            </Nav>

            <Offcanvas show={open} onHide={cerrarMenu} scroll>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <hr />
                    <ul className='nav nav-pills flex-column' id='parentM'>
                        <li className='nav-item  my-1'>
                            <a href="#submenu" className='nav-link' data-bs-toggle="collapse" aria-current="page"
                                onClick={() => setOpenDropHome(!openDropHome)}>
                                <i className="bi bi-house-door-fill text-dark fs-4"></i>
                                <span className='ms-3 text-dark fs-5'>Proyectos</span>
                                <i className="bi bi-caret-down-fill ms-2 text-dark"></i>
                            </a>


                            <Collapse in={openDropHome}>
                                <ul className='nav-collapse ms-1' id='submenu' data-bs-parent="#parentM">
                                    <li className='nav-item text-white'>
                                        <Link to='/' className='nav-link' aria-current="page" onClick={cerrarMenu}>
                                            Mis Proyectos
                                        </Link>
                                    </li>

                                    <li className='nav-item text-white'>
                                        <Link to='/proyectos/participacion' className='nav-link' onClick={cerrarMenu} aria-current="page">
                                            Soy Miembro
                                        </Link>
                                    </li>

                                    <li className='nav-item text-white'>
                                        <Link to='/proyecto/nuevo' className='nav-link' onClick={cerrarMenu} aria-current="page">Nuevo proyecto</Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </li>

                        <li className='nav-item my-1'>
                            <Link to='/perfil' className='nav-link' onClick={cerrarMenu}>
                                <i className="bi bi-person-fill text-dark fs-4"></i>
                                <span className='ms-3 text-dark fs-5'>Mi perfil</span>
                            </Link>
                        </li>

                        {
                            user.rol == 'Admin' &&
                            <li className='nav-item my-1'>
                                <Link to='/admin/usuarios' className='nav-link' onClick={cerrarMenu}>
                                    <i className="bi bi-people-fill text-dark fs-4"></i>
                                    <span className='ms-3 text-dark fs-5'>Usuarios</span>
                                </Link>
                            </li>
                        }

                        <li className='nav-item my-1'>
                            <a href="#" className='nav-link' onClick={cerrarSesion}>
                                <i className="bi bi-box-arrow-left text-black fs-4"></i>
                                <span className='ms-3 text-dark fs-5'>Cerrar sesion</span>
                            </a>
                        </li>

                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}