import React, { useState } from 'react'
import { useEffect } from 'react'
import { useUsuarioService } from '../../hooks/useUsuarioService'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const PerfilPage = () => {

    const { obtenerUsuario, usuarioActual, modUsuario, mensajeError } = useUsuarioService();
    const user = JSON.parse(localStorage.getItem('user'))

    const [enable, setEnable] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm({

    });

    const guardarCambio = (data, e) => {

        e.preventDefault();
        modUsuario({
            uid: user.uid,
            email: data.email,
            nombre: data.nombre,
            apellido: data.apellido
        });
        setEnable(true)

    }

    useEffect(() => {
        obtenerUsuario(user.uid);
    }, [])

    useEffect(() => {

        if (mensajeError !== undefined) {
            Swal.fire('Error', mensajeError, 'error');
            setEnable(false)
        }

    }, [mensajeError])


    return (
        <div className='w-75' style={{ margin: '30px auto' }}>

            {
                enable == true &&
                <div className='btn btn-primary mb-1' onClick={() => setEnable(false)}>
                    Editar
                </div>
            }

            <div>
                <form action="" className='border shadow p-4' onSubmit={handleSubmit(guardarCambio)}>
                    <div>
                        <h2>Mis datos</h2>
                    </div>
                    <div className="">
                        <div className="form-group mb-2">
                            <label>Nombre</label>
                            <input type="text"
                                className="form-control"
                                name='nombre'
                                defaultValue={usuarioActual.nombre}
                                disabled={enable}
                                {...register("nombre", { required: true })}
                            />
                            {errors.nombre && <span className='text-danger'>El nombre es obligatorio</span>}
                        </div>
                        <div className="form-group mb-2">
                            <label>Apellido</label>
                            <input type="text"
                                className="form-control"
                                name='apellido'
                                defaultValue={usuarioActual.apellido}
                                disabled={enable}
                                {...register("apellido", { required: true })}
                            />
                            {errors.nombre && <span className='text-danger'>El apellido es obligatorio</span>}

                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label>Email</label>
                        <input type="email"
                            className="form-control"
                            name='email'
                            defaultValue={usuarioActual.email}
                            disabled={enable}
                            {...register("email", { required: true })}
                        />
                        {errors.nombre && <span className='text-danger'>El email es obligatorio</span>}
                    </div>
                    {
                        enable == false &&
                        <div className="form-group mb-2">
                            <label>Nueva Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                {...register("password")}
                            />
                        </div>
                    }
                    {
                        enable == false &&

                        <div className='d-flex justify-content-between '>
                            <button className='btn-custom' onClick={() => setEnable(true)}>Cancelar</button>
                            <button type="submit" className="btn btn-dark">guardar cambios</button>
                        </div>

                    }
                </form>
            </div>
        </div>
    )
}
