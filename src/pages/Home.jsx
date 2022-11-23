import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Home = () => {
  const user = useSelector(state => state.user.user)
  
  return (
    <>
    <h1 className="text-blue-700">Home</h1>
    <h1>hello, {user.name}</h1>
    {user.role === "admin" && <Link to="/admin">Dashboard</Link>}
    </>
  )
}

export default Home