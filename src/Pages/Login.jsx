import React from 'react';
import { Link } from 'react-router-dom';
import OLX from '../assets/Olx.png'


function Login() {
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center '>
        <div className=' w-[450px] h-[450px] px-4 py-36 z-20'>
          <div className='relative rounded-xl  bg-gradient-to-r bg-gray-200 shadow-2xl'>
            <div className='max-w-[320px] mx-auto py-16'>
              <div className='flex justify-center items-center'>
                <img src={OLX} alt="olx" className='size-20'/>
                <h2 className='text-3xl text-center m-1'>Login</h2>
              </div>
              <form className='w-full flex flex-col py-4' >

                <input className='p-3 my-2 border-black rounded-lg' type="email" placeholder='email' autoComplete='email'/>

                <input className='p-3 my-2 border-black rounded lg' type="password" placeholder='password' autoComplete='current-password'/>
                
                <button type='submit' className='bg-black text-white py-3 my-6 rounded-full' >Login</button>
                <div className='justify-between items-center text-gray-600'>
                  <p className='my-2 flex ml-3 '>
                    If you are new ?
                    <Link to='/signup' className='text-gray-700 text-de ml-2'>Sign Up</Link>  
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;
