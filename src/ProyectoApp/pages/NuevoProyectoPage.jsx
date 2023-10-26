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
                            <div className='p-2'>

                                <div className='mb-4'>
                                    <input type="text"
                                        className='form-control w-100'
                                        placeholder='Titulo del proyecto'
                                    />
                                </div>

                                <div>
                                    <textarea className='w-100 border-1 rounded-1 p-2'
                                        style={{ height: '80px' }}
                                        placeholder='Decripcion...'
                                    />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey='miembros' title='Miembros'>
                            <div>
                                <input type="text" className='w-100 mb-3' />
                            </div>
                            <div className='p-2' style={{
                                height: '414px',
                                backgroundColor: '#1A202C'
                            }}>

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
