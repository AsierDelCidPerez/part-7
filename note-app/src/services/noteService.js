import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { actOfShowNotfWithMsg } from '../redux/reducers/notReducer'

let token = null

export const setToken = myToken => {
    token = `bearer ${myToken}`
}

const useResource = url => {

    const getAllNotes = async() => {
        return (await axios.get(url)).data
    }

    const createNew = async newNote => {
        const config = {
            headers: {Authorization: token}
        }
        return (await axios.post(url, newNote, config)).data
    }

    const updateNote = async (id, newContent) => {
        const config = {
            headers: {Authorization: token}
        }
        return (await axios.put(`${url}/${id}`, newContent, config)).data
    }

    const deleteNote = async (id) => {
        const config = {
            headers: {Authorization: token}
        }
        return (await axios.delete(`${url}/${id}`, config)).data
    }

    return {
        getAllNotes, createNew, updateNote, deleteNote
    }

}

export default useResource