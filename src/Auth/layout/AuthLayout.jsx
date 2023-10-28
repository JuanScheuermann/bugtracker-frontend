import { Container } from 'react-bootstrap'

export const AuthLayout = ({ children }) => {
    return (
        <Container fluid className='p-0 m-0'>
            {children}
        </Container>
    )
}
