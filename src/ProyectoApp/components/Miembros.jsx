import React from 'react'

export const Miembros = ({ onChangeCheckbox, usuarios = [], miembros = [] }) => {
    return (
        <>
            {
                usuarios.map(u => (
                    u.estado == 'Activo' &&
                    <tr key={u.id}>
                        <td>
                            <input type="checkbox"
                                defaultChecked={
                                    miembros.find(m => m.usuarioId == u.id) != null
                                        ? true
                                        : false
                                }
                                onChange={onChangeCheckbox}
                                value={u.id} />
                        </td>
                        <td>{u.apiNom}</td>
                        <td>{u.email}</td>
                    </tr>
                ))
            }
        </>
    )
}
