import {useState, useEffect} from 'react'
import axios from 'axios'


export default function ListaMarcas() {
    const [marcas, setMarcas] = useState([])

    useEffect(() => {
        async function fetchMarcas() {
          const response = await axios.get('http://localhost:8000/cursos/')
          setMarcas(response.data)
        }
        fetchMarcas()
    }, [])
    return (
    <div>
        <h1>lista De Marcas</h1>
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
              {marcas.map((b:any) => (
                <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.nombre}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}
