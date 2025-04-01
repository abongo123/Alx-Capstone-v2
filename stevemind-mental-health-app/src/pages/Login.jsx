import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import *as yup from "yup"
import { data, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


const schema =yup.object().shape({
  email: yup.string().email("Input valid Email").required("Input Your Email"),
  password: yup.string().min(8, "Password must be at least 8 characters"). required("Input your Password"),
})

const Login =() =>{
  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate =useNavigate()

  const onSubmit = async (data) => {
    try{
      await signInWithEmailAndPassword(auth,data.email, data.password)
      console.log("User Logged In", data)
      alert("Successfully Login! Redirecting to Dashboard...")
      navigate("/dashboard")
    } catch (error) {
      console.error("Login Error", error.message)
      alert(`Login Failed: ${error.code} - ${error.message}`)
    }
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white py-10 px-10 rounded-lg shadow-lg w-80 min-h-[450px] flex flex-col justify-between">
      <h1 className="text-center text-xl font-bold mb-6 pb-4 border-b-2 border-gray-300 px-10">Serenity Hub</h1>
      <h3 className="text-center">Sign In</h3>
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