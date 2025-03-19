import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import *as yup from "yup"
import { Link } from "react-router-dom"


const schema = yup.object() .shape({
  fullName: yup.string().required("Input your Full Name before you Proceed!"),
  email: yup.string().email().required("Input Your Email"),
  password: yup.string().min(8).max(12).required("Password Must be at least 8 characters")
})

const Register =() => {
  const {register, handleSubmit, formState: {errors}} =useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit =(data) => {
    console.log("Congrats! You've been Registered", data)
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <h2 className="text-2xl font-bold text-black mb-6">Register with Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 p-6 rounded-lg shadow-lg w-80">
        <input {...register("fullName")} placeholder="Input Your Full Name" className="w-full p-2 mb-2 border rounded"/>
        <p className="text-red-500">{errors.fullName?.message}</p>

        <input {...register("email")} placeholder="Input Your Email" className="w-full p-2 mb-2 border rounded mt-8"/>
        <p className="text-red-600">{errors.email?.message}</p>

        <input {...register("password")} placeholder="Set Your Password" className="w-full p-2 mb-2 border rounded mt-8"/>
        <p className="text-red-700">{errors.password?.message}</p>

        <button type="submit" className="bg-green-400 text-red-500 px-4 py-2 rounded w-full mt-2 font-bold">Register</button>

        <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>



      </form>


    </div>
  )
}

export default Register;