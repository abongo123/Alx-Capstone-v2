import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import *as yup from "yup"
import { data, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
<<<<<<< HEAD
=======
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
>>>>>>> backup-branch


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
<<<<<<< HEAD
      console.log("User Logged In", data)
      alert("Successfully Login! Redirecting to Dashboard...")
=======
>>>>>>> backup-branch
      navigate("/dashboard")
    } catch (error) {
      console.error("Login Error", error.message)
      alert(`Login Failed: ${error.code} - ${error.message}`)
    }
    
  }
<<<<<<< HEAD
=======
  const [passwordVisible, setPasswordVisible] = useState(false);
const togglePasswordVisibility = () => {
  setPasswordVisible((prev) => !prev);
};
>>>>>>> backup-branch

  return (
    <div className="relative w-screen h-screen flex bg-blue-400">
      <div className="relative z-10 w-full flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white py-12 px-11 rounded-lg shadow-lg w-80 min-h-[450px] flex flex-col justify-between">
        <div className="flex justify-center mb-7 w-full pb-5 border-b-2 border-gray-700">
        <img src="Images/salford.jpg" alt="logo" className="w-24 h-20 object-contain"></img>
        </div>
      <h3 className="text-center">Sign In</h3>
        <input {...register("email")} placeholder="Email" className="w-full p-2 mb-2 border rounded"/>
        <p className="text-red-600">{errors.email?.message}</p>

<<<<<<< HEAD
        <input {...register("password")} placeholder="Password" className="w-full p-2 mb-2 border rounded mt-5"/>
=======
        <div className="relative mt-5">
        <input {...register("password")} type={passwordVisible ? "text": "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded mt-5">
        </input>
        <span onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 cursor-pointer">{passwordVisible ? <FaEyeSlash/> : <FaEye/>}</span>
        </div>
>>>>>>> backup-branch
        <p className="text-red-600">{errors.password?.message}</p>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2">Login</button>

        <p className="mt-3">Don't have an account? <Link to="/register" className="text-red-500">Register</Link></p></form>
        </div>
    </div>
  )
}

export default Login