import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks/useAuthStore'
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { mensajeError, startLogin } = useAuthStore();

  const { email, password, onInputChange, formState } = useForm(formData);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    startLogin({ email, password });

  }

  return (
    <AuthLayout>

      <div className='row justify-content-center h-100 w-100 p-5'>
        <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
          <div className="card shadow-lg rounded-0 animate__animated animate__fadeInLeft">
            <div className="card-body p-5">
              <h1 className='fs-4 card-title fw-bold mb-4'>Login</h1>
              <form action="" className='needs-validation' autoComplete='off' onSubmit={onLoginSubmit}>

                <div className="mb-3">
                  <label className="mb-2 text-muted">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    className="form-control"
                    name="email"
                    onChange={onInputChange}
                    required />

                </div>

                <div className="mb-3">
                  <label className="mb-2 text-muted">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    required />

                </div>

                <div className="d-flex align-items-center mb-2">
                  <button type="submit" className="btn btn-dark ms-auto w-100">
                    Inicar sesion
                  </button>
                </div>

                <div className="d-flex align-items-center">
                  <button className="btn btn-dark ms-auto w-100">
                    <Link to='/auth/registrar' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                      Registrarse
                    </Link>
                  </button>
                </div>

                {/* <div className='mt-2'>
                <span>Olvidaste tu contraseña ? <a href="">Click aqui</a></span>
              </div> */}

              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
