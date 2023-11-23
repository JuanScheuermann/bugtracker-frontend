import React, { useEffect } from 'react'
import { useUsuarioService } from '../../hooks'
import { ModalEditarusuario } from '../components/ModalEditarusuario';

export const AdminUsuariosPage = () => {

  const { obtenerUsuarios, usuarios, agregarPermisoUsuario, mensajeError } = useUsuarioService();

  useEffect(() => {
    obtenerUsuarios();
  }, [])

  return (
    <div>
      <div className='mt-3 ' style={{ margin: '0 auto', width: '90%' }}>
        <div className="input-group mb-3">
          <input type="text" className="form-control"
            name='search'
            placeholder="Correo del usuario"

          />
          <button className="input-group-text shadow-none px-4 btn-warning">
            <i className="bi bi-search"></i>
          </button>
        </div>
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
                    <td>
                      <ModalEditarusuario
                        rol={u.rol}
                        uid={u.id}
                        mensajeError={mensajeError}
                        agregarPermisos={agregarPermisoUsuario} />
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
