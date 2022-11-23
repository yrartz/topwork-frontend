import axios from "./index"

export const fetchAllUsers = () => {
  return axios.get("/api/users")
}