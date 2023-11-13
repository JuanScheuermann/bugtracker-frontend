import React, { useState } from 'react'
import { proyectoApi } from '../Api/configuracion';

export const useComentariosService = () => {

    const [comentarios, setComentarios] = useState([]);

    const obtenerComentarios = async (eid) => {


        try {
            const { data } = await proyectoApi.get(`comentario/${eid}`);
            if (data.length > 0) {
                setComentarios([...data])
            }
            else {
                setComentarios([])
            }

        } catch (error) {
            console.log(error)
        }
    }

    const agregarComentario = async ({ cuerpo, miembroId, etiquetaId }) => {
        try {

            const newcomentario = {
                cuerpo,
                miembroId: Number(miembroId),
                etiquetaId: Number(etiquetaId)
            }
            const { data } = await proyectoApi.post(`comentario/${etiquetaId}/agregar`, newcomentario);
            console.log(data)
            setComentarios([...comentarios, data]);

        } catch (error) {
            console.log(error)
        }
    }


    return {
        comentarios,
        obtenerComentarios,
        agregarComentario
    }
}
