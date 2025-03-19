import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import *as yup from "yup"
import { data, Link } from "react-router-dom"

const schema =yup.object().shape({
  email: yup.string().email("Input valid Email").required("Input Your Email"),
  password: yup.string().min(8, "Password must be at least 8 characters"). required("Input your Password"),
})

const Login =() =>{
  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit =(data) => {
    console.log("User Logged In", data)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h2 className="text-3xl font-bold text-black mb-5">Login to your Account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-green-200 p-6 rounded-lg shadow-lg w-80">
        <input {...register("email")} placeholder="Email" className="w-full p-2 mb-2 border rounded"/>
        <p className="text-red-600">{errors.email?.message}</p>

        <input {...register("password")} placeholder="Password" className="w-full p-2 mb-2 border rounded mt-5"/>
        <p className="text-red-600">{errors.password?.message}</p>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2">Login</button>

        <p className="mt-3">Don't have an account? <Link to="/register" className="text-red-500">Register</Link></p>


      </form>



    </div>
  )
}

export default Login