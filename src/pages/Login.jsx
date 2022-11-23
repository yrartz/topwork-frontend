//dependencies
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios"
import { useDispatch } from "react-redux"
import { initializeUser } from "../app/user/userSlice.js"
import { loginAction } from "../services/authService.js"

//components
import Input from "../components/Input"

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
}).required();

const Login = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [loginError, setLoginError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleLogin = data => {
    loginAction({
      email: data.email,
      password: data.password,
    })
    .then(res => {
        console.log(res.data.user)
        dispatch(initializeUser({
          id: res.data.user.id,
          email: res.data.user.email,
          name: res.data.user.name,
          role: res.data.user.role,
          token: res.data.token
        }))
        navigate("/")
     })
    .catch(e => {
      if (e.response && e.response.status == 404) {
        setLoginError(e.response.data.msg)
      } else {
        alert("Something went wrong")
      }
      console.log(e)
    })
  }
  
  return (
    <>
    <h1>Login</h1>
    
    <form onSubmit={handleSubmit(handleLogin)}>
     {loginError && <p>{loginError}</p>}
      <div>
        <Input label="email" type="email" register={register} error={errors.email?.message} />
      </div>
      <div>
        <Input label="password" type="password" register={register} error={errors.password?.message} />
      </div>
      <button type="submit">Login</button>
    </form>
    
    <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </>
  )
}

export default Login