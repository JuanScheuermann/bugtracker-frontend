import './auth.css'

export const LoginPage = () => {
  return (
    <div className='row justify-content-center h-100 w-100 p-5'>
      <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
        <div className="card shadow-lg rounded-0 animate__animated animate__fadeInLeft">
          <div className="card-body p-5">
            <h1 className='fs-4 card-title fw-bold mb-4'>Login</h1>
            <form action="" className='needs-validation' autoComplete='off'>

              <div className="mb-3">
								<label className="mb-2 text-muted">E-Mail</label>
								<input id="email" type="email" className="form-control" name="email" required />
								
							</div>

              <div className="mb-3">
								<label className="mb-2 text-muted">Contraseña</label>
								<input id="email" type="password" className="form-control" name="email" required />
						
							</div>

              <div className="d-flex align-items-center mb-2">
									<button type="submit" className="btn btn-dark ms-auto w-100">
										Inicar sesion
									</button>
							</div>

              <div className="d-flex align-items-center">
									<button type="submit" className="btn btn-dark ms-auto w-100">
										Registrarse
									</button>
							</div>

              <div className='mt-2'>
                <span>Olvidaste tu contraseña ? <a href="">Click aqui</a></span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
