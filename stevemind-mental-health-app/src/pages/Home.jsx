import React from 'react'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const Home =() => {
  return (
    <div className='relative min-h-screen flex items-center justify-center px-6 text-center'>
      {/* Video Background */}
      <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-0'>
        <source src='/images/salford.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
  
      {/* Content */}
      <div className='relative z-10 flex flex-col gap-4 items-center'>
        <Link to="/Register">
          <motion.button
            className='text-yellow-600 w-64 py-9 rounded-lg hover:bg-teal-200 mt-4 text-center font-bold'
            whileHover={{scale: 1.05}} // Slightly zoom in on hover
          >
            Register
          </motion.button>
        </Link>
        <Link to="/Login">
          <motion.button
            className='text-yellow-500 w-64 py-9 rounded-lg hover:bg-green-200 text-center font-bold flex-row mt-5'
            whileHover={{scale: 1.05}} // Slightly zoom in on hover
          >
            Login
          </motion.button>
        </Link>
      </div>
    </div>
  );
  
}

export default Home