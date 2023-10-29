import React from 'react'

export const NuevaEtiquetaPage = () => {
    return (
        <div className='w-100' style={{ margin: '30px auto' }}>
            <form action="" className='w-50'>
                <div className='form-grouo'>
                    <label>Titulo</label>
                    <input type="text" required className='form-control' />
                </div>

                <div className='form-grouo'>
                    <label>Detalles</label>
                    <input type="text" required className='form-control' />
                </div>

                <div className='form-grouo'>
                    <label>Prioridad</label>
                    <select className='form-control'>
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
