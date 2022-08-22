import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { actOfShowNotfWithMsg } from '../redux/reducers/notReducer'

const baseUrl = '/api/notes'

let token = null

export const setToken = myToken => {
    token = `bearer ${myToken}`
}

export const getAllNotes = async() => {
    return (await axios.get(baseUrl)).data
}

export const createNew = async newNote => {
    const config = {
        headers: {Authorization: token}
    }
    return (await axios.post(baseUrl, newNote, config)).data
}

export const updateNote = async (id, newContent) => {
    const config = {
        headers: {Authorization: token}
    }
    return (await axios.put(`${baseUrl}/${id}`, newContent, config)).data
}