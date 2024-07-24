import React from 'react';
import OLX from '../assets/Olx.png'


const Create = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="border border-gray-300 shadow-2xl p-12 rounded-3xl">
        <div className='flex justify-center '>
          <img src={OLX} alt="olx" className='size-20 mr-2 border-x-1'/>
          <h1 className=' font-semibold text-black text-2xl mt-6 text-center'>Sell a product</h1>
        </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block">Name</label>
              <input
                className="w-full border-2 p-2 rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-0"
                type="text"
                id="name"
                name="Name"
                placeholder='Product Name'
              />
            </div>
            <div>
              <label htmlFor="category" className="block">Category</label>
              <input
                className="w-full border-2 p-2 rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-0"
                type="text"
                id="category"
                name="category"
                placeholder='Category'
              />
            </div>
            <div>
              <label htmlFor="price" className="block">Price</label>
              <input
                className="w-full border-2 p-2 rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-0"
                type="number"
                id="price"
                name="Price"
                placeholder='Price'
              />
            </div>
          </form>
          <div className="mt-6">
            <img alt="Posts" width="200px" height="200px" src="" />
          </div>
          <form className="mt-4 space-y-4">
            <input type="file" className="w-full" />
            <button className="w-full h-12 bg-black/85 text-white font-bold rounded-2xl hover:bg-white hover:text-teal-700 hover:border-2 hover:border-teal-700 transition-colors">Upload and Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
