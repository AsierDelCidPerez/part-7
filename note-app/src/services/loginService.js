import axios from "axios"

const baseUrl = '/api/login'

export const loginUsingCredentials = async credentials => {
    return (await axios.post(baseUrl, credentials)).data
}

