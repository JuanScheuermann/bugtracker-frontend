import { useEffect, useState } from 'react'
import { Miembros } from '../components/Miembros'
import { useMiembrosService, useUsuarioService } from '../../hooks'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

export const AgregarMiembro = () => {

    const { usuarios, obtenerNuevosMiembros, mensajeError } = useUsuarioService();
    const { miembros, agregarMiembro } = useMiembrosService();
    const { register, handleSubmit } = useForm();
    const [newmiembros, setMiembros] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        obtenerNuevosMiembros(id);
    }, [])

    const onChangeCheckbox = (event) => {

        const { value, checked } = event.target;
        if (checked) {
            setMiembros(pre => [...pre, { usuarioId: value, proyectoId: id }])

        } else {
            setMiembros(pre => {
                return [...pre.filter(u => u.UserId !== value)]
            })
        }

    }

    const search = (data) => {

        obtenerNuevosMiembros(id, data.search);
    }

    const submit = (e) => {
        e.preventDefault();

        if (newmiembros.length <= 0) {
            Swal.fire('', 'Debes agregar almenos un miembro', 'info')
            return;
        }

        agregarMiembro(id, newmiembros);
        navigate(`/proyecto/${id}`)
    }

    useEffect(() => {

        if (mensajeError !== undefined) {
            Swal.fire('Error', mensajeError, 'error');
        }
    }, [mensajeError])


    return (
        <div>
            <div className='mt-3 ' style={{ margin: '0 auto', width: '90%' }}>
                <form action="" onSubmit={submit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            name='search'
                            placeholder="Correo del usuario"
                            {...register("search")}

                        />
                        <button className="input-group-text shadow-none px-4 btn-warning" onClick={handleSubmit(search)}>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                    <div className='' >
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>nombre</th>
                                    <th>Usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Miembros onChangeCheckbox={onChangeCheckbox} usuarios={usuarios} miembros={miembros} />
                            </tbody>
                        </table>
                    </div>

                    <button type='submit' className='btn btn-primary mt-2'>
                        Agregar miembros
                    </button>
                </form>
            </div>
        </div>
    )
}
