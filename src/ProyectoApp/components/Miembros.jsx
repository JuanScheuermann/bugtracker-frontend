import React from 'react'

export const Miembros = ({ onChangeCheckbox }) => {
    return (
        <>
            <tr>
                <td><input type="checkbox"
                    onChange={onChangeCheckbox}
                    value='marcozlujan13@gmail.com'
                />
                </td>
                <td>Marcoz Lujan</td>
                <td>marcozlujan13@gmail.com</td>
            </tr>

            <tr>
                <td>
                    <input type="checkbox"
                        onChange={onChangeCheckbox}
                        value='josequi@gmail.com'
                    />
                </td>
                <td>Jose Quiroga</td>
                <td>josequi@gmail.com</td>
            </tr>

            <tr>
                <td>
                    <input type="checkbox"
                        onChange={onChangeCheckbox}
                        value='aguatina14@gmail.com'
                    />
                </td>
                <td>Agustina Candel</td>
                <td>aguatina14@gmail.com</td>
            </tr>
        </>
    )
}
