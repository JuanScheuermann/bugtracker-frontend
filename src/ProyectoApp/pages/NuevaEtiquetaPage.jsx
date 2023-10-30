import React from 'react'
import { Link } from 'react-router-dom'

export const NuevaEtiquetaPage = () => {
    return (
        <div className='p-5 w-100'>
            <form action="" className='border shadow p-4 w-md-50 w-sm-100 '
                style={{ margin: '0 auto' }}
            >

                <div className='mb-4'>
                    <h3>Nueva Etiqueta</h3>
                    <hr />
                </div>

                <div className='form-group mb-3'>
                    <label>Titulo</label>
                    <input type="text" required className='form-control' />
                </div>

                <div className='form-group mb-3'>
                    <label>Detalles</label>
                    <textarea className='form-control' rows={5}>

                    </textarea>
                </div>

                <div className='form-group mb-3'>
                    <label>Prioridad</label>
                    <select className='form-control'>
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>


                <button type='submit' className='btn btn-dark px-3'>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'whitesmoke',

                    }}>
                        Crear Etiqeta
                    </Link>
                </button>
            </form>
        </div>
    )
}
