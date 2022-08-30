import axios from "axios"
import React, { useEffect, useState } from "react"

const useNotes = url => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        axios.get(url).then(res => setNotes(res.data))
    })
    return notes
}

const App = () => {
    const [counter, setCounter] = useState(0)
    const [values, setValues] = useState([])
    const notes = useNotes(BACKEND_URL)

    const getMyHandle = increment => () => {
        setCounter(counter + increment)
        setValues(values.concat(counter))
    }

    return (
        <div className="container">
            Hello Webpack {counter}
            <button onClick={getMyHandle(1)}>+1</button>
            <button onClick={getMyHandle(-1)}>-1</button>
            <button onClick={getMyHandle(-counter)}>reset</button>
            <ul>
            {
                notes.map(note => <li key={note.id}>{note.content}</li>)
            }
            </ul>
        </div>
    )
}

export default App