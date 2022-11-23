//dependencies
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios"
import { registerAction } from "../services/authService.js"

//components
import Input from "../components/Input"

const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().min(3).required(),
  password: yup.string().min(8).required(),
  role: yup.number().required()
}).required();

const Register = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [emailError, setEmailError] = useState(null)
  const navigate = useNavigate()
  
  const handleRegister = data => {
    registerAction({
      email: data.email,
      name: data.name,
      password: data.password,
      role: data.role,
    })
    .then(response => {
        navigate("/login")
     })
    .catch(e => {
      if (e.response.status == 400) {
        if (e.response.data.path === "email") {
          setEmailError(e.response.data.msg)
        }
      } else {
        alert("Something went wrong")
      }
      console.log(error)
    })
  }

  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit(handleRegister)}>
      <div>
        <Input label="email" type="email" register={register} error={errors.email?.message} />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <Input label="name" type="text" register={register} error={errors.name?.message} />
      </div>
      <div>
        <Input label="password" type="password" register={register} error={errors.password?.message} />
      </div>
      <div>
        <label>Register as:</label>
        <select {...register("role")}>
          <option value="2">Client</option>
          <option value="3">Freelancer</option>
        </select>
        <p>{errors.role?.message}</p>
      </div>
      <button type="submit">Register</button>
    </form>
    
    <p>Already have an account? <Link to="/login">Login here</Link></p>
    </>
  )
}

export default Register