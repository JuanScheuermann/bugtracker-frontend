import React, { useEffect, useState } from 'react'
import { Tab, Tabs, Form } from 'react-bootstrap'
import {
    useProyectoStore,
    useUsuarioService
} from '../../hooks'
import { useForm } from 'react-hook-form'
import { Miembros } from '../components/Miembros';
import { Link, useNavigate } from 'react-router-dom';

const initalState = {
    titulo: '',
    descripcion: '',
}

export const NuevoProyectoPage = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()
    const { obtenerUsuarios, usuarios } = useUsuarioService();
    const { crearProyecto } = useProyectoStore();
    const [miembros, setMiembros] = useState([]);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();


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

    const submitForm = (data) => {

        crearProyecto({ titulo: data.titulo, descripcion: data.descripcion, miembros })
        navigate('/proyectos', { replace: true });
    }

    const search = () => {
        const data = document.getElementById('search-input').value;
        console.log(data)
        obtenerUsuarios(data)
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
                <Form onSubmit={handleSubmit(submitForm)} noValidate autoComplete='off'>
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
                                        <div className='my-4'>
                                            <label >Titulo</label>
                                            <input type="text"
                                                id='titulo'
                                                className='form-control w-100'
                                                name='titulo'
                                                {...register("titulo", { required: true })}
                                            />
                                            {errors.titulo && <span>El titulo es obligatorio</span>}
                                        </div>

                                        <Form.Group className='form-group'>
                                            <label >Descripcion</label>
                                            <textarea className='w-100 border-1 rounded-1 p-2 form-control'
                                                style={{ height: '80px' }}
                                                name='descripcion'
                                                {...register("descripcion")}

                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey='miembros' title='Miembros'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control"
                                        name='search'
                                        placeholder="Correo del usuario"
                                        id='search-input'
                                    />
                                    <button className="input-group-text shadow-none px-4 btn-warning"
                                        onClick={search}>
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                                <div>
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
                                                <Miembros onChangeCheckbox={onChangeCheckbox} usuarios={usuarios} miembros={miembros} />
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

                        <button className='btn btn-danger' type='button'>
                            <Link className='nav-link text-white' to='/proyectos'>Cancela</Link>
                        </button>
                    </div>
                </Form>
            </section>
        </div>
    )
}
