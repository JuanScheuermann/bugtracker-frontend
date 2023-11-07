import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import {
    useProyectoStore,
    useUsuarioService,
    useForm
} from '../../hooks'
import { Miembros } from '../components/Miembros';

const initalState = {
    titulo: '',
    descripcion: '',
}

export const NuevoProyectoPage = () => {

    const { titulo, descripcion, onInputChange } = useForm(initalState)
    const { obtenerUsuarios, usuarios } = useUsuarioService();
    const { crearProyecto } = useProyectoStore();
    const [miembros, setMiembros] = useState([]);

    const onChangeCheckbox = (event) => {

        const { value, checked } = event.target;
        if (checked) {
            setMiembros(pre => [...pre, { usuarioId: value }])

        } else {
            setMiembros(pre => {
                return [...pre.filter(u => u.UserId !== value)]
            })
        }

    }

    const submitForm = (e) => {
        e.preventDefault();
        crearProyecto({ titulo, descripcion, miembros })
    }

    useEffect(() => {
        obtenerUsuarios();
    }, [])

    return (
        <div className='p-4'>
            <div className='mb-5'>
                <h2>Proyecto</h2>
            </div>
            <section>
                <form action="" onSubmit={submitForm}>
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
                                            <label >Titulo</label>
                                            <input type="text"
                                                className='form-control w-100'
                                                name='titulo'
                                                value={titulo}
                                                onChange={onInputChange}
                                            />
                                        </div>

                                        <div className='form-group'>
                                            <label >Descripcion</label>
                                            <textarea className='w-100 border-1 rounded-1 p-2 form-control'
                                                style={{ height: '80px' }}
                                                name='descripcion'
                                                value={descripcion}
                                                onChange={onInputChange}
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
                                <div
                                >
                                    <div style={{ margin: '0 auto' }}>
                                        <table className='text-center'>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>nombre</th>
                                                    <th>Usuario</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <Miembros onChangeCheckbox={onChangeCheckbox} usuarios={usuarios} />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary' type='submit'>
                            Crear
                        </button>

                        <button className='btn btn-danger'>
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}
