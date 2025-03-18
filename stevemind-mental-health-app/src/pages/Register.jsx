import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import *as yup from "yup"
import { Link } from "react-router-dom"


const schema = yup.object() .shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(12).required()
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

      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 p-6 rounded-lg shadow-lg w-70">
        <input {...register("fullName")} placeholder="Full Name" className="w-full p-2 mb-2 border rounded"/>


      </form>


    </div>
  )
}