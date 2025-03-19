import React from 'react'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const Home =() => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-green-100 px-6 text-center'>
      <h1 className='italic text-2xl md:text-3xl text-gray-900 -mt-10 font-black'>STEVEMIND MENTAL HEALTH APP</h1>
      <div className='bg-blue-200 px-8 py-4 rounded-full shadow-lg flex flex-col items-center max-w-lg mt-20'>
      <motion.h1 className='italic text-3xl font-bold text-gray-800 mb-4' initial={{ opacity: 0, y: -30 }} animate={{opacity: 2, y: -1}} transition={{duration: 0.50}}>Welcome to SteveMind</motion.h1>
      <p className='italic font-mono text-lg text-green-950 max-w-lg mb-6'>Your Mind, Our Mission</p>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <Link to="/Register">
        <motion.button className='bg-gray-500 text-black w-64 py-9 rounded-lg hover:bg-teal-500 mt-11 font-mono text-center font-bold' whileHover={{scale: 1.00}}>
          Register
        </motion.button>
        </Link>
        <Link to="/Login">
        <motion.button className='bg-gray-500 text-black w-64 py-9 rounded-lg hover:bg-green-400 mt-11 font-mono text-center font-bold flex-row' whileHover={{scale: 1.00}}>
          Login
        </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default Home