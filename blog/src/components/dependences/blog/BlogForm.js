import Titulo from "./Titulo"
import Notification from "./Notification"
import Filtro from "./Filtro"
import Registro from "./Registro"
import Agregar from "./Agregar"
import blogService from "../services/blog"

import {React, useState, useEffect} from 'react'

const BlogForm = ({setNotification}) => {
    // const [blogs, setBlogs] = useState([])

    return (
        <div>
        <Titulo text="Banco de blogs"/>
        <Filtro/>
        <Registro notifications={setNotification}/>
        <Agregar notifications={setNotification}/>
      </div>
    )
}

export default BlogForm