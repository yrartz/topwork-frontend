// dependencies
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
      
      <Outlet />
    </>
  )
}

export default Dashboard