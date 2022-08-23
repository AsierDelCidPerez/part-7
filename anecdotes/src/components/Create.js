import { useState } from "react"
import Notification from "./Notification"

const useField = (type) => {
    const [value, setValue] = useState('')
    const onChange = e => setValue(e.target.value)
    
    return {
        type, value, onChange, setValue
    }
}

const Create = ({addNew}) => {
    const [notf, setNotf] = useState(null)
    const content = useField('text')
    const author = useField('text')
    const url = useField('text')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNew({
            content: content.value,
            author: author.value,
            url: url.value,
            votes: 0
        })
        setNotf(`a new anecdote: "${content.value}" has been created`)
    }

    const reset = () => {
        content.setValue('')
        author.setValue('')
        url.setValue('')
    }

    const myUrl = {
        value: url.value,
        type: url.type, 
        onChange: url.onChange
    }
    const myAuthor = {
        value:author.value,
        type:author.type, 
        onChange: author.onChange
    }
    const myContent = {
        value:content.value,
        type:content.type, 
        onChange: content.onChange
    }

    return (
    <div>
        <h2>create a new anecdote</h2>
        <Notification notf={notf} setNotf={setNotf}/>
        <form onSubmit={handleSubmit}>
            <div>
            content
            <input {...myContent} />
            </div>
            <div>
            author
            <input {...myAuthor} />
            </div>
            <div>
            url for more info
            <input {...myUrl} />
            </div>
            <button type="submit">create</button>
            <button onClick={reset}>reset</button>
        </form>
    </div>
    )
}


export default Create