import { useEffect } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../hooks/useAuthStore';
import Swal from 'sweetalert2';

export const VerificarPage = () => {

    const { mensajeError, sendMail } = useAuthStore();
    const { register, formState: { errors }, handleSubmit } = useForm();



    const formSubmit = (data, e) => {
        e.preventDefault();
        sendMail({ email: data.email });

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
                            <h1 className='fs-4 card-title fw-bold mb-4'>Verificacion de Mail</h1>
                            <form action="" className='needs-validation' autoComplete='off' onSubmit={handleSubmit(formSubmit)}>

                                <div>
                                    <p>Ingrese su mail con el que se registro</p>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2 text-muted">E-Mail</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className='text-danger'>Email obligatoria</span>}
                                </div>

                                <div className="d-flex align-items-center mb-2">
                                    <button type="submit" className="btn btn-dark ms-auto w-100">
                                        verificar
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
