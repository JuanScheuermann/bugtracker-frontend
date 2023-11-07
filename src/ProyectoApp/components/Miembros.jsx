import React from 'react'

export const Miembros = ({ onChangeCheckbox, usuarios = [] }) => {
    return (
        <>
            {
                usuarios.map(u => (
                    <tr key={u.id}>
                        <td>
                            <input type="checkbox" onChange={onChangeCheckbox}
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
