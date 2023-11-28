import Pagination from 'react-bootstrap/Pagination'

export const Paginacion = ({ paginas }) => {

    let items = []
    for (let index = 1; index <= paginas; index++) {

        items.push(
            <Pagination.Item key={index} active={index}>
                {index}
            </Pagination.Item>
        );
    }

    return (
        <div className='w-100 text-center mt-2'>
            <Pagination style={{ margin: '2px auto' }}>
                {items}
            </Pagination>
        </div>
    )
}
