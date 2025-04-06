import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import *as yup from "yup"
import { Link } from "react-router-dom"
import {useNavigate } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import { useAuth } from "../context/AuthContext"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


const auth = getAuth()


const schema = yup.object() .shape({
  fullName: yup.string().required("Input your Full Name before you Proceed!"),
  email: yup.string().email().required("Input Your Email"),
  password: yup.string().min(8).max(12).required("Password Must be at least 8 characters")
})

const Register =() => {
  const {register, handleSubmit, formState: {errors}} =useForm({
    resolver: yupResolver(schema)
  })

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };


  const navigate = useNavigate()

  const onSubmit = async (data) => {

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      alert("Registration Successful, Please proceed to login")
      navigate("/login")
    } catch (error) {
      console.error("Registration Error", error.message)
      alert("Registration Failed! Try again.")
    }
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white py-9 px-12 rounded-lg shadow-lg w-80 flex flex-col justify-between">
      <div className="flex justify-center mb-7 w-full pb-5 border-b-2 border-gray-700">
        <img src="Images/salford.jpg" alt="logo" className="w-24 h-20 object-contain"></img>
        </div>
      <h3 className="text-center px-8 mt-4 p-2 py-3">Create Account</h3>
        <input {...register("fullName")} placeholder="Full Name" className="w-full p-2 mb-2 border rounded"/>
        <p className="text-red-500">{errors.fullName?.message}</p>

        <input {...register("email")} placeholder="Your Email" className="w-full p-2 mb-2 border rounded mt-8"/>
        <p className="text-red-600">{errors.email?.message}</p>

        <div className="relative mt-5">
        <input {...register("password")} type={passwordVisible ? "text": "password"} placeholder="Set Your Password" className="w-full p-2 mb-2 border rounded mt-8"/>
        <span onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 cursor-pointer">{passwordVisible ? <FaEyeSlash/> : <FaEye/>}</span>
        <p className="text-red-700">{errors.password?.message}</p>
        </div>

        <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded w-full mt-2 font-bold">Register</button>

        <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>

      </form>

    </div>
  )
}

export default Register;