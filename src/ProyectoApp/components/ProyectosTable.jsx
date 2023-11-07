import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { estadoD } from '../types/types'

export const ProyectosTable = ({ proyectos }) => {


    return proyectos.map((p) => (
        <tr key={p.id}>

            <td><Link to={`proyecto/${p.id}`}> {p.titulo}</Link></td>
            <td>{p.descripcion}</td>
            <td><Badge bg='warning'>{estadoD[p.estadoDesarrollo]}</Badge></td>
        </tr>
    ))
}
