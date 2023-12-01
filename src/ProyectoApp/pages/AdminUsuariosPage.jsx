import React, { useEffect } from 'react'
import { useUsuarioService } from '../../hooks'
import { ModalEditarusuario } from '../components/ModalEditarusuario';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

export const AdminUsuariosPage = () => {

  const {
    obtenerUsuariosAdmin,
    usuarios,
    bloquearUsuario,
    agregarPermisoUsuario,
    mensajeError } = useUsuarioService();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    obtenerUsuariosAdmin();
  }, [])

  const bloquear = (uid) => {

    bloquearUsuario(uid)
  }

  const searchUsuarios = (data, e) => {

    e.preventDefault();
    obtenerUsuariosAdmin(data.search)

  }

  useEffect(() => {

    if (mensajeError !== undefined) {
      Swal.fire('Error', 'Ocurrio un error', 'error')
    }

  }, [mensajeError])

  return (
    <div>
      <div className='mt-3 ' style={{ margin: '0 auto', width: '90%' }}>
        <form action="" onSubmit={handleSubmit(searchUsuarios)}>
          <div className="input-group mb-3">
            <input type="text" className="form-control"
              name='search'
              placeholder="Correo del usuario"
              autoComplete='off'
              {...register("search")}
            />
            <button className="input-group-text shadow-none px-4 btn-warning" type='submit'>
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
        <div className='' >
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Estado</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                usuarios.map(u => (

                  <tr key={u.id}>
                    <td>{u.apiNom}</td>
                    <td>{u.email}</td>
                    <td>
                      {u.estado}
                    </td>
                    <td>
                      {u.rol}
                    </td>
                    <td className='d-flex align-items-center'>
                      <ModalEditarusuario
                        rol={u.rol}
                        uid={u.id}
                        mensajeError={mensajeError}
                        agregarPermisos={agregarPermisoUsuario}
                        estado={u.estado == 'Activo' ? false : true}
                      />

                      <button className='btn btn-danger' onClick={() => bloquear(u.id)}>
                        {
                          u.estado == 'Activo'
                            ? 'Bloquear'
                            : 'Desbloquear'
                        }
                      </button>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
