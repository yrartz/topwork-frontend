import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/admin/Dashboard"
import Users from "./pages/admin/Users"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App