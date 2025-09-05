import {useState, useEffect} from 'react'
import axios from 'axios'


export default function ListaComponents() {
    const [cursos, setCursos] = useState([])

    useEffect(() => {
        async function fetchCursos() {
          const response = await axios.get('http://localhost:8000/cursos/')
          setCursos(response.data)
        }
        fetchCursos()
    }, [])
    return (
    <div>
        <h1>lista De Cursos</h1>
        <table>
            <thead>
              <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Descripcion</th>
                    <th>precio</th>
                </tr>
            </thead>
            <tbody>
              {cursos.map((b:any) => (
                <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.nombre}</td>
                    <td>{b.Descripcion}</td>
                    <td>{b.precio}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}
