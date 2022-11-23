// dependencies
import { useState, useEffect } from "react"
import { fetchAllUsers } from "../../services/userService.js"

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetchAllUsers()
    .then(res => {
      setUsers(res.data.users)
    })
    .catch(e => {
      console.log(e)
      alert("Something went wrong")
    })
  }, [])
  
  return (
    <>
      <h1>Users page</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {users.length === 0 && <p>No data available</p>}
    </>
  )
}

export default Users