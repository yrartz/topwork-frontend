import axios from "axios"

const token = localStorage.getItem("TOKEN")

axios.defaults.baseURL = "http://localhost:3000/api"
axios.defaults.headers.common["Authorization"] = token ?? `Bearer ${token}`

export default axios