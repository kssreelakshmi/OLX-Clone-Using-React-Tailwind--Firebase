import React from 'react'
import OLX from '../assets/Olx.png'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <>
      <div className='min-h-screen'>
      
      <div className='flex justify-center items-center '>
        <div className=' w-[500px] h-[450px] px-4 py-36 z-20'>
          <div className='relative rounded-xl  bg-gradient-to-r bg-gray-200 shadow-2xl'>
            <div className='max-w-[320px] mx-auto py-16'>
              <div className='flex justify-center items-center'>
                <img src={OLX} alt="olx" className='size-20 m-1'/>
                <h2 className='text-3xl text-center '>Sign Up</h2>
              </div>
              <form className='w-full flex flex-col py-4' >

                <input className='p-3 my-2 border-black rounded-lg' type="text" placeholder='Username' autoComplete='Username'/>

                <input className='p-3 my-2 border-black rounded lg' type="number" placeholder='Phone NUmber' autoComplete='Phone Number'/>

                <input className='p-3 my-2 border-black rounded-lg' type="email" placeholder='email' autoComplete='Email'/>

                <input className='p-3 my-2 border-black rounded lg' type="password" placeholder='password' autoComplete='current-password'/>
                
                <button type='submit' className='bg-black text-white py-3 my-6 rounded-full' >Sign Up</button>
                <div className='justify-between items-center text-gray-600'>
                  <p className='my-2 flex ml-3 '>
                    If you have account?
                    <Link to='/login' className='text-gray-700 border-x-2 text-de ml-2'>Login</Link>  
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup