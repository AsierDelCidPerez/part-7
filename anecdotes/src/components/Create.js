import { useState } from "react"
import Notification from "./Notification"
const Create = ({addNew}) => {
    const [notf, setNotf] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const el = e.target
        addNew({
            content: el.content.value,
            author: el.author.value,
            url: el.url.value,
            votes: 0
        })
        setNotf(`a new anecdote: "${el.content.value}" has been created`)
    }

    return (
    <div>
        <h2>create a new anecdote</h2>
        <Notification notf={notf} setNotf={setNotf}/>
        <form onSubmit={handleSubmit}>
            <div>
            content
            <input name='content' placeholder="contenido" />
            </div>
            <div>
            author
            <input name='author' placeholder="autor"/>
            </div>
            <div>
            url for more info
            <input name='url' placeholder="URL de la web"/>
            </div>
            <button>create</button>
        </form>
    </div>
    )
}


export default Create