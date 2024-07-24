import React from 'react'
import OLX from '../assets/Olx.png'
import Arrow from '../assets/Arrow.png'
import Search from '../assets/Search.png'
import Search2 from '../assets/Search2.png'
import Add from '../assets/Add.png'
import MainAdd from '../assets/MainAdd.png'

const Navbar = () => {
  return (
    <div className='flex ml-auto mr-auto relative xl:w-full h-[80px] bg-gray-200'>
      <div className='flex relative top-0 left-0 z-1 xl:w-full h-[95%] bg-gray-100'>
        <img src={OLX} alt="Olx-logo" className='w-[48px] h-[48px] m-3 pr-2' />
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
            className="pl-10 sm:w-[300px] md:w-[350px] lg:w-[650px] xl:w-[950px] h-[70%] border-2 border-black rounded-md"
          />
          <button className="absolute right-0 ">
            <img 
              src={Search2} 
              className=" flex justify-end items-end w-[40px] h-[44px] p-2 bg-black rounded-md " 
              alt="Search" 
            />
          </button>
        </div>

        <div className="p-8 relative flex items-center mx-2 mt-3 ">
          <select className='mb-3 text-xl bg-gray-100' name="Language" id="lang">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            
          </select>
        </div>

        <div className=' p-8 relative flex items-center mx-2 mt-3 '>
          <button type='submit' className='text-xl bg-none border-b-2 border-black'>
            Login
          </button>
        </div>
        <div className='pl-12 relative flex items-center mx-2 mt-3'>

          <div className='relative flex items-center w-[100px] h-[45px] bg-blue-300 m-1 rounded-3xl pt-2 '>
            <div className='relative flex justify-center items-center w-[98px] h-[43px] bg-blue-600 rounded-3xl pr-2'>
              <div className='relative flex justify-center items-center w-[96px] h-[42px] bg-yellow-400 rounded-3xl mb-2'>
                <div className='relative flex justify-center items-center w-[94px] h-[41px] bg-white  rounded-full ml-2 mt-1 '>
                    <button className='flex justify-center items-center'>
                      <img src={MainAdd} className=' w-[25%] h-[10%] mr-2 ' alt="sell" />
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




