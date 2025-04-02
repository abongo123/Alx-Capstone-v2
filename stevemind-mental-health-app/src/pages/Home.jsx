import React from 'react'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const Home = () => {
  return (
    <div className='relative min-h-screen flex'>
      <div className='flex-1'>
        <img src='Images/salford.jpg' alt='Background' className='h-full w-full object-cover' style={{maxHeight: '100vh'}}/>
      </div>
<div className='flex-2 bg-green-100 flex items-center justify-center'>
        <div className='relative z-10 flex flex-col gap-4 items-center' style={{maxHeight: '100vh'}}>
          <Link to="/Register">
            <motion.button
              className='text-black w-64 py-9 rounded-lg hover:text-green-900 mt-4 text-center font-bold'
              whileHover={{ scale: 1.05 }}>Register</motion.button></Link>
          <Link to="/Login">
            <motion.button
              className='text-black w-64 py-9 rounded-lg hover:text-green-800 text-center font-bold flex-row mt-5'
              whileHover={{ scale: 1.05 }}>Login</motion.button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
