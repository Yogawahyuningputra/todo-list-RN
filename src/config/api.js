import axios from "axios"

export const API = axios.create({
    baseURL: "https://api.kontenbase.com/query/api/v1/61a55ff2-0acd-4896-a32c-11d600f31805/",
})

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete API.defaults.headers.common["Authorization"]
    }
}