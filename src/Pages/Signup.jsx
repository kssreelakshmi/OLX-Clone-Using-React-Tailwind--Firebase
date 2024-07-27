import React,{useState,useContext} from 'react'
import OLX from '../assets/Olx.png'
import { Link,useNavigate } from 'react-router-dom'
import {UserAuth} from '../store/FirebaseContext.jsx';



const Signup = () => {
  const [username, setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const {user,signUp} = UserAuth();
  const navigate = useNavigate()

  const handleForm = async (e)=> {
    e.preventDefault();
    console.log(email)
    console.log(password)
    try {
      await signUp(email, password, username, phoneNumber);
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className='min-h-screen'>
      <div className='flex justify-center items-center '>
        <div className=' w-[500px] h-[450px] px-4 pt-20 z-10'>
          <div className='relative rounded-xl  bg-gradient-to-r bg-gray-200 shadow-2xl'>
            <div className='max-w-[320px] mx-auto py-4 '>
              <div className='flex justify-center items-center'>
                <img src={OLX} alt="olx" className='size-20 m-1'/>
                <h2 className='text-3xl text-center '>Sign Up</h2>
              </div>
              <form className='w-full flex flex-col py-4 ' onSubmit={handleForm} >

                <input className='p-3 my-2 border-black rounded-lg' type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>

                <input className='p-3 my-2 border-black rounded lg' type="number" placeholder='phone number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>

                <input className='p-3 my-2 border-black rounded-lg' type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <input className='p-3 my-2 border-black rounded lg' type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
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