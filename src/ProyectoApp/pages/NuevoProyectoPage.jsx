import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'

export const NuevoProyectoPage = () => {
    return (
        <div className='p-4'>
            <div className='mb-5'>
                <h2>Proyecto</h2>
            </div>

            <section>
                <div className='mb-3'>

                    <Tabs
                        className='mb-3'
                    >

                        <Tab eventKey='info' title='Proyecto'>
                            <div>

                                <div
                                    className='p-4 border mt-2 w-sm-100 shadow'
                                    style={{ margin: '0 auto' }}
                                >
                                    <div className='form-group my-4'>
                                        <label htmlFor="">Titulo</label>
                                        <input type="text"
                                            className='form-control w-100'
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="">Descripcion</label>
                                        <textarea className='w-100 border-1 rounded-1 p-2 form-control'
                                            style={{ height: '80px' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey='miembros' title='Miembros'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Correo del usuario" />
                                <button className="input-group-text shadow-none px-4 btn-warning">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>

                        </Tab>
                    </Tabs>
                </div>

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary'>
                        Crear
                    </button>

                    <button className='btn btn-danger'>
                        Cancelar
                    </button>
                </div>
            </section>
        </div>
    )
}
