
import { useState } from 'react';
import { proyectoApi } from '../Api/configuracion'

export const useUsuarioService = () => {

    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuarios = async () => {
        try {
            let user = JSON.parse(localStorage.getItem('user'))

            const { data } = await proyectoApi.get(`usuario/all`);
            setUsuarios([...data.usuarios].filter(u => u.id != user.uid))
        } catch (error) {

        }
    }

    return {
        usuarios,
        obtenerUsuarios
    }
}
