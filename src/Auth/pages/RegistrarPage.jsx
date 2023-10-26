import {useState} from 'react'
import { Form } from 'react-bootstrap';

export const RegistrarPage = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
  };

  return (
    <div className='row justify-content-center h-100 w-100 p-5'>
      <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
        <div className="card shadow-lg rounded-0 animate__animated animate__fadeInLeft">
          <div className="card-body p-5">
            <h1 className='fs-4 card-title fw-bold mb-4'>Registrarse</h1>
            <Form validated={validated} onSubmit={handleSubmit} noValidate autoComplete='off'>

                <Form.Group className="mb-3">
					<label className="mb-2 text-muted">Nombre</label>
					<input id="nombre" type="text" className="form-control" name="nombre" required />	
                    <Form.Control.Feedback type='invalid'>El nombre es obligatorio</Form.Control.Feedback>
				</Form.Group>

                <Form.Group className="mb-3">
					<label className="mb-2 text-muted">Apellido</label>
					<input id="apellido" type="text" className="form-control" name="apellido" required />
                    <Form.Control.Feedback type='invalid'>El apellido obligatorio</Form.Control.Feedback>

				</Form.Group>

                <div className="mb-3">
					<label className="mb-2 text-muted">E-Mail</label>
					<input id="email" type="email" className="form-control" name="email" required />
                    <Form.Control.Feedback type='invalid'>El Correo es obligatorio</Form.Control.Feedback>
				</div>

                <div className="mb-3">
					<label className="mb-2 text-muted">Contraseña</label>
					<input id="contrasena" type="password" className="form-control" name="contrasena" required />
                    <Form.Control.Feedback type='invalid'>La contraseña debe tener minimo 6 caracteres</Form.Control.Feedback>
				</div>

                <div className="d-flex align-items-center">
					<button type="submit" className="btn btn-dark ms-auto w-100">
						Crear cuenta
					</button>
				</div>

              <div className='mt-2'>
                <span>Ya tienes una cuenta ? <a href="">Click aqui</a></span>
              </div>

            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
