import Agregar from "../dependences/blog/Agregar"
import Filtro from "../dependences/blog/Filtro"
import Registro from "../dependences/blog/Registro"


const Blogs = () => {

    return (
        <div>
            <Filtro/><br/>
            <Registro/><br/>
            <Agregar/>
        </div>
    )
}

export default Blogs