import { useEffect, useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const formData = {
  email: '',
  password: '',
  nombre: '',
  apellido: ''
}
export const RegistrarPage = () => {

  const { mensajeError, startRegister } = useAuthStore()
  const [show, setShow] = useState(true);
  const { register, formState: { errors }, handleSubmit } = useForm(formData);

  const formSubmit = (data, e) => {
    e.preventDefault();
    startRegister({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: data.password
    });
  };

  useEffect(() => {
    if (mensajeError !== undefined) {
      Swal.fire('Error', mensajeError, 'error')
    }
  }, [mensajeError])


  return (
    <AuthLayout>

      <div className='row justify-content-center h-100 w-100 p-5'>
        <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
          <div className="card shadow-lg rounded-0 animate__animated animate__fadeInLeft">
            <div className="card-body p-5">
              <h1 className='fs-4 card-title fw-bold mb-4'>Registrarse</h1>
              <Form onSubmit={handleSubmit(formSubmit)} autoComplete='off'>

                <div className="mb-3 form-group">
                  <label className="mb-2 text-muted">Nombre</label>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    name="nombre"
                    {...register("nombre", { required: true })}
                  />
                  {errors.nombre && <span className='text-danger'>Nombre obligatorio</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 text-muted">Apellido</label>
                  <input
                    id="apellido"
                    type="text"
                    className="form-control"
                    name="apellido"
                    {...register("apellido", { required: true })}
                  />
                  {errors.apellido && <span className='text-danger'>Apellido obligatorio</span>}
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
                  {errors.email && <span className='text-danger'>Email obligatorio</span>}
                </div>

                <div className="mb-3">
                  <label className="mb-2 text-muted">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className='text-danger'>Contraseña obligatorio</span>}
                </div>

                <div className="d-flex align-items-center">
                  <button type="submit" className="btn btn-dark ms-auto w-100">
                    Crear cuenta
                  </button>
                </div>

                <div className='mt-2'>
                  <span>Ya tienes una cuenta ? <Link to={'/auth/login'}>Click aqui</Link></span>
                </div>

              </Form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
