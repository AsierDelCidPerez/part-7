import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const MyNote = ({myNote}) => {
    return (
        <div id={myNote.id}>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Clave</th>
                    <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Contenido</th>
                    <td>{myNote.content}</td>
                    </tr>
                    <tr>
                    <th scope="row">Importante</th>
                    <td>{myNote.important ? 'IMPORTANTE' : 'NO IMPORTANTE'}</td>
                    </tr>
                    <tr>
                    <th scope="row">Autor</th>
                    <td>{myNote.user.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyNote