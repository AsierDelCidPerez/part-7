import axios from "axios"

const baseUrl = 'https://restcountries.com/v2/name/'

export const getByName = async name => {
    return (await axios.get(`${baseUrl}/${name}?fullText=true`)).data[0]
}