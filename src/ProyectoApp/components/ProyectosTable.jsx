import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { estadoD } from '../types/types'

export const ProyectosTable = ({ proyectos = [], mostrarutor = false }) => {


    return proyectos.map((p) => (
        <tr key={p.id}>

            <td><Link to={`/proyecto/${p.id}`}> {p.titulo}</Link></td>
            {
                mostrarutor == true &&
                <td>
                    <Badge bg='success'>
                        {p.autorNombre}
                    </Badge>
                </td>
            }
            <td>{p.descripcion}</td>
            <td><Badge bg='warning'>{estadoD[p.estadoDesarrollo]}</Badge></td>
        </tr>
    ))
}
