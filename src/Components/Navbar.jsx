import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import OLX from '../assets/Olx.png'
import Arrow from '../assets/Arrow.png'
import Search from '../assets/Search.png'
import Search2 from '../assets/Search2.png'
import Add from '../assets/Add.png'
import MainAdd from '../assets/MainAdd.png'
import { UserAuth } from '../store/FirebaseContext'

const Navbar = () => {
  const navigate = useNavigate();
  const {user,logOut} = UserAuth();

  const handleLogout = async () =>{
    try{
      await logOut()
      navigate('/')
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div className='flex ml-auto mr-auto relative xl:w-full h-[80px] bg-gray-200'>
      <div className='flex relative top-0 left-0 z-1 xl:w-full h-[95%] bg-gray-100'>
        <Link to='/'>
        <img src={OLX} alt="Olx-logo" className='w-[50px] h-[50px] m-3 pr-2' />
        </Link>
        <div className="relative flex items-center mt-3 mr-4 ">
          <div className="absolute left-3">
            <img src={Search} className="w-[25px] h-[25px]" alt="Search" />
          </div>
          <input
            type="text"
            className="pl-12 sm:w-[150px] md:w-[250px] lg:w-[350px] xl:w-[400px] h-[70%] border-2 border-black rounded-md"
            placeholder='India'
          />
          <div className="absolute right-3">
            <button className="w-[25px] h-[25px]">
              <img src={Arrow} alt="Arrow" />
            </button>
          </div>
        </div>

        <div className="relative flex items-center mt-3">
          <input 
            type="text" 
            placeholder="Find Cars, Mobile Phones and more..." 
            className="pl-10 sm:w-[300px] md:w-[350px] lg:w-[650px] xl:w-[900px] h-[70%] border-2 border-black rounded-md"
          />
          <button className="absolute right-0 ">
            <img 
              src={Search2} 
              className=" flex justify-end items-end w-[40px] h-[44px] p-2 bg-black rounded-md " 
              alt="Search" 
            />
          </button>
        </div>
        <div className='p-6 mb-3 relative flex items-center mx-2 mt-3 '>

          <div className='m-4'>
            <select className=' text-md bg-gray-100' name="Language" id="lang">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              
            </select>
          </div>

          <div className='m-2'>
            
            {user ? user.displayName :
            <button type='submit' className='text-md bg-none border-b-2 border-black' onClick={()=>navigate('/login')}>
              Login
            </button>
            }
            {user && <button onClick={handleLogout} className='text-md bg-none border-b-2 border-black'>Logout</button>}

          </div>
          <div className='m-2'>
            <button type='submit' className='text-md bg-none border-b-2 border-black'onClick={()=>navigate('/signup')}>
              Sign Up
            </button>  
          </div>

        </div>
        <div className='pl-12 relative flex items-center mx-2 mt-3'>

          <div className='relative flex items-center w-[100px] h-[45px] bg-blue-300 m-1 rounded-3xl pt-2 '>
            <div className='relative flex justify-center items-center w-[98px] h-[43px] bg-blue-600 rounded-3xl pr-2'>
              <div className='relative flex justify-center items-center w-[96px] h-[42px] bg-yellow-400 rounded-3xl mb-2'>
                <div className='relative flex justify-center items-center w-[94px] h-[41px] bg-white  rounded-full ml-2 mt-1 '>
                    <button className='flex justify-center items-center'>
                      <img src={MainAdd} className=' w-[25%] h-[10%] mr-2 ' alt="sell" onClick={()=>navigate('/create')}/>
                       Sell
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}



export default Navbar




