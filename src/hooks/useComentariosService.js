import React, { useState } from 'react'
import { proyectoApi } from '../Api/configuracion';
import { useDispatch, useSelector } from 'react-redux';
import { setComentarios } from '../store/Proyecto/ComentariosSlice'

export const useComentariosService = () => {

    //const [comentarios, setComentarios] = useState([]);
    const {
        comentarios
    } = useSelector(state => state.comentarios)
    const dispatch = useDispatch();

    const obtenerComentarios = async (eid) => {


        try {
            const { data } = await proyectoApi.get(`comentario/${eid}`);

            //setComentarios(data)
            dispatch(setComentarios(data));

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
            await obtenerComentarios(etiquetaId)

        } catch (error) {
            console.log(error)
        }
    }

    const editarComentario = async ({ cid, cuerpo, eid }) => {
        try {

            const comentarioEdit = {
                id: cid,
                cuerpo
            }
            await proyectoApi.put(`comentario/${eid}/mod_comentario/${cid}`,
                comentarioEdit);

            /*             console.log(comentarios)
                        const filtComentarios = comentarios.map(x => {
                            if (x.id == cid) { x.cuerpo = cuerpo; }
                            return x;
                        });
            
                        setComentarios([...filtComentarios]);
                        console.log(comentarios) */

            await obtenerComentarios(eid)
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarComentario = async ({ eid, cid }) => {
        try {

            await proyectoApi.delete(`comentario/${eid}/del_comentario/${cid}`);

            dispatch(setComentarios(comentarios.filter(x => x.id != cid)));
        } catch (error) {
            console.log(error)
        }
    }

    return {
        comentarios,
        obtenerComentarios,
        agregarComentario,
        editarComentario,
        eliminarComentario
    }
}
