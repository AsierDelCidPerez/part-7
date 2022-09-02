import axios from "axios"

const baseUrl = "/api/users"

export const getAllUsers = async() => {
    return (await axios.get(baseUrl)).data
}

export const getUser = async id => {
    return (await axios.get(`${baseUrl}/${id}`)).data
}