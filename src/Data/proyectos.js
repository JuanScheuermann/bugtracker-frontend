export const proyectos = [
    {
        id: 1,
        Titulo: "Proyecto prueba",
        Descripcion: "Mi primer proyecto",
        Autor: "Juan Scheuermann",
        Miembros: [
            "Matias Paz",
            "Jose Montiel"
        ]
    }
]

export const etiquetas = [
    {
        id: '1',
        proyectoId: 1,
        titulo: 'Problemas con la bd',
        fecha: '10/12/2022',
        detalles: 'No puedo establecer una conexion, no se que sucede',
        estado: 'Abierta',
        prioridad: 'Alta',
        comentarios: [
            {id: 1, miembro: 'Jose', descripcion: 'revisa la cadena de conexion'}
        ]
    }
]