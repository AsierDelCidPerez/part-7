import {useState} from 'react'

const useField = type => {
    const [value, setValue] = useState('')
    const onChange = e => setValue(e.target.value)
    return {
        type,
        value,
        onChange
    }
}

const Form = () => {
    const name = useField('text')
    const born = useField('date')
    const height = useField('number')
    const [resumen, setResumen] = useState(null)
    const onSubmit = e => {
        e.preventDefault()
        setResumen(<ul>
            <li>{name.value}</li>
            <li>{born.value}</li>
            <li>{height.value}</li>
        </ul>)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input {...name}/>
                <input {...born}/>
                <input {...height}/>
                <button type="submit">Enviar</button>
            </form>
            <div>
                {resumen}
            </div>
        </div>
    )
}

export default Form