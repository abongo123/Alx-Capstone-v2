import React from 'react'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const Home =() => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 text-center'>
      <video autoPlay loop muted className='absolute top-0 left-0 w-full object-cover z-0'>
        <source src='\src\Images\Homepg video.mp4'/>
      </video>
      <div className='relative z-10'>
      <h1 className=' font-serif italic text-2xl md:text-3xl text-gray-900 -mt-10 font-black'>SERENITY HUB</h1>
      <div className='px-8 py-4 rounded-full shadow-lg flex flex-col items-center max-w-lg mt-20'>
      <motion.h1 className='italic text-3xl font-bold text-gray-800 mb-4' initial={{ opacity: 0, y: -30 }} animate={{opacity: 2, y: -1}} transition={{duration: 0.50}}>Welcome to Serenity Hub</motion.h1>
      <p className='italic font-serif text-lg text-green-950 max-w-lg mb-6 font-bold'>Unlock Your Best Self!</p>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <Link to="/Register">
        <motion.button className='text-black w-64 py-9 rounded-lg hover:bg-teal-500 mt-11 font-mono text-center font-bold' whileHover={{scale: 1.00}}>
          Register
        </motion.button>
        </Link>
        <Link to="/Login">
        <motion.button className='text-black w-64 py-9 rounded-lg hover:bg-green-400 mt-11 font-mono text-center font-bold flex-row' whileHover={{scale: 1.00}}>
          Login
        </motion.button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Home