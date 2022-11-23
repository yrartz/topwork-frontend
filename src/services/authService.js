import axios from "./index"

export const registerAction = (formData) => {
  return axios.post("/auth/register", formData)
}

export const loginAction = (formData) => {
  return axios.post("/auth/login", formData)
}