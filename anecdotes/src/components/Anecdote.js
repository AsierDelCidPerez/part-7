
const Anecdote = ({anecdote}) => (
    <div>
        <h2>{anecdote.content}</h2>
        <p>Autor: {anecdote.author}</p>
        <p>has {anecdote.votes} votes</p>
        <p>for more info see <a href={anecdote.url} target='_blank' rel="noreferrer">{anecdote.url}</a></p>
    </div>
)

export default Anecdote