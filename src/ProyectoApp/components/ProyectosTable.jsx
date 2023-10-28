import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'

export const ProyectosTable = ({ proyectos }) => {


    return proyectos.map((p) => (
        <tr>
            <td><Link to='/proyecto/1' > {p.Titulo}</Link></td>
            <td>{p.Descripcion}</td>
            <td><Badge bg='warning'>En desarrollo</Badge></td>
            <td>11/09/22</td>
        </tr>
    ))
}
