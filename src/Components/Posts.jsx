import React, { useState } from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { ProductDetails } from '../store/FirebaseContext';

function Posts() {
  const navigate = useNavigate();
  const {setPostDetails,products} = ProductDetails();

  return (
    <>
    <div className="p-4">
      <div className="bg-gray-200 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl text-teal-900">Quick Menu</span>
          <span className="text-sm text-teal-900">View more</span>
        </div>
        <div className="flex overflow-x-auto space-x-4">
        {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg flex-shrink-0 w-56 h-68 cursor-pointer bg-gray-100">
                <div className="flex justify-end mb-2">
                  <IoHeartOutline />
                </div>
                <div className="flex justify-center mb-2" onClick={() => {
                  setPostDetails(product);
                  navigate('/view');
                }}>
                  <img src={product.url} alt={product.product_name} className="h-24" />
                </div>
                <div className="mb-2">
                  <p className="text-lg font-bold">&#x20B9; {product.price}</p>
                  <span className="text-base">{product.category}</span>
                  <p className="text-sm">{product.product_name}</p>
                </div>
                <div className="flex justify-start text-sm">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <span className="text-xl text-teal-900">Fresh recommendations</span>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <div className="border p-4 rounded-lg flex-shrink-0 w-56 h-68 cursor-pointer">
            <div className="flex justify-end mb-2">
              <IoHeartOutline />
            </div>
            <div className="flex justify-center mb-2">
              <img src="../../../Images/R15V3.jpg" alt="" className="h-24" />
            </div>
            <div className="mb-2">
              <p className="text-lg font-bold">&#x20B9; 250000</p>
              <span className="text-base">Two Wheeler</span>
              <p className="text-sm">YAMAHA R15V3</p>
            </div>
            <div className="flex justify-end text-sm">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Posts;
