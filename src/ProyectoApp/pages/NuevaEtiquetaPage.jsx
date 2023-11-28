import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useEtiquetaStore } from '../../hooks/useEtiquetaStore';
import Swal from 'sweetalert2'

export const NuevaEtiquetaPage = () => {

    const { id } = useParams();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { crearEtiqueta, MensajeError } = useEtiquetaStore();
    //const navigate = useNavigate();

    const submitForm = (data, e) => {

        e.preventDefault();
        crearEtiqueta({
            titulo: data.titulo,
            detalles: data.detalles,
            prioridad: data.prioridad,
            pid: id
        });

    }

    useEffect(() => {
        if (MensajeError !== undefined) {
            Swal.fire('Error', MensajeError, 'error')
        }
    }, [MensajeError])

    return (
        <div className='p-5 w-100'>
            <form action="" onSubmit={handleSubmit(submitForm)} className='border shadow p-4 w-md-50 w-sm-100 '
                style={{ margin: '0 auto' }}
            >

                <div className='mb-4'>
                    <h3>Nueva Etiqueta</h3>
                    <hr />
                </div>

                <div className='form-group mb-3'>
                    <label>Titulo</label>
                    <input type="text"
                        name='titulo'
                        className='form-control'
                        {...register("titulo", { required: true })}
                    />
                    {errors.titulo && <span className='text-danger'>El titulo es obligatorio</span>}
                </div>

                <div className='form-group mb-3'>
                    <label>Detalles</label>
                    <textarea
                        className='form-control'
                        name='detalles'
                        rows={5}
                        {...register("detalles", { required: true })}
                    >
                    </textarea>
                    {errors.detalles && <span className='text-danger'>Debe administrar detalles de la etiqueta</span>}
                </div>

                <div className='form-group mb-3'>
                    <label>Prioridad</label>
                    <select
                        className='form-control'
                        name='prioridad'
                        {...register("prioridad", { required: true })}

                    >
                        <option value={1}>Baja</option>
                        <option value={2}>Media</option>
                        <option value={3}>Alta</option>
                    </select>
                    {errors.prioridad && <span className='text-danger'>Debe sellicionar una prioridad</span>}
                </div>


                <button type='submit' className='btn btn-dark px-3'>
                    Crear Etiqeta
                </button>
            </form>
        </div>
    )
}
