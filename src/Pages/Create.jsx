import React, { useState } from 'react';
import OLX from '../assets/Olx.png';
import { useNavigate } from 'react-router-dom';
import { ProductDetails, UserAuth } from '../store/FirebaseContext';

const Create = () => {
  const { user } = UserAuth();
  const { sellProduct } = ProductDetails();
  const navigate = useNavigate();

  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const date = new Date();

  const handleForm = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image to upload');
      return;
    }
    try {
      await sellProduct(productName, category, price, image, date);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-gray-300 shadow-2xl p-12 rounded-3xl">
        <div className='flex justify-center'>
          <img src={OLX} alt="olx" className='size-20 mr-2 border-x-1'/>
          <h1 className='font-semibold text-black text-2xl mt-6 text-center'>Sell a product</h1>
        </div>
        <form className="space-y-4" onSubmit={handleForm}>
          <div>
            <label htmlFor="name" className="block">Name</label>
            <input
              className="w-full border-2 p-2 rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-0"
              type="text"
              id="name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="Price"
              placeholder='Price'
            />
          </div>
          <div className="mt-6">
            <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} />
          </div>
          <div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" className="w-full" />
            <button type="submit" className="w-full h-12 bg-black/85 text-white font-bold rounded-2xl hover:bg-white hover:text-teal-700 hover:border-2 hover:border-teal-700 transition-colors">Upload and Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
