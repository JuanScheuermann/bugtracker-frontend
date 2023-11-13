import { useEffect } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../hooks/useAuthStore';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';



export const ContrasenaPage = () => {

    const { mensajeError, cambiarContraseña } = useAuthStore();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { token } = useParams();


    const formSubmit = (data, e) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error')
            return;
        }


        cambiarContraseña({ password: data.password, token });
    }

    useEffect(() => {
        if (mensajeError != undefined) {
            Swal.fire('Error', mensajeError, 'error')
        }
    }, [mensajeError])


    return (
        <AuthLayout>
            <div className='row justify-content-center h-100 w-100 p-5'>
                <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                    <div className="card shadow-lg rounded-0 animate__animated animate__fadeInLeft">
                        <div className="card-body p-5">
                            <h1 className='fs-4 card-title fw-bold mb-4'>Cambio de contraseña</h1>
                            <form action="" className='needs-validation' autoComplete='off' onSubmit={handleSubmit(formSubmit)}>

                                <div>
                                    <p>Ingrese su nueva contraseña</p>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2 text-muted">Contraseña</label>
                                    <input

                                        type="password"
                                        className="form-control"
                                        name="password"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className='text-danger'>La contraseña es obligatoria</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="mb-2 text-muted">Confirmar Contraseña</label>
                                    <input

                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        {...register("confirmPassword", { required: true })}
                                    />
                                    {errors.email && <span className='text-danger'>Confirme su contraseña</span>}
                                </div>

                                <div className="d-flex align-items-center mb-2">
                                    <button type="submit" className="btn btn-dark ms-auto w-100">
                                        Inicar sesion
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}