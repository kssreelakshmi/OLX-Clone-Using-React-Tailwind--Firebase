import React from 'react';
import banner from '../../public/Images/banner.jpg'

function Banner() {
  return (
    <>
    <div className='w-full h-[45px] flex relative mt-1 bg-white-100 border-y-2 border-gray-200 bg-gray-100'>
      <div className='flex justify-between items-center pl-2'>
      <div className="p-10 relative flex items-center mx-2 mt-3 ">
          <select className='mb-3 text-lg bg-gray-100' name="All Categories" id="lang">
            <option value="All">All Categories</option>
            <option value="Cars">Cars</option>
            <option value="Motor Cycles">Motor Cycles</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="For Sale">For Sale: Houses & Apartments</option>
            <option value="Scooter">Scooter</option>
            <option value="For Rent">For Rent: Houses</option>
            
          </select>
        </div>
      <p className='mx-4'>Cars</p>
      <p className='mx-4'>Motor Cycles</p>
      <p className='mx-4'>Mobile Phones</p>
      <p className='mx-4'>For Sale: Houses & Apartments</p>
      <p className='mx-4'>Scooter</p>
      <p className='mx-4'>For Rent: Houses</p>
      </div>
    </div>
    <div className='w-full h-[250px] lg:h-[350px] m-1'>
    <img className='w-full h-full object-cover object-top' src = {banner} />       
    </div>
    
    </>
  );
}

export default Banner;
