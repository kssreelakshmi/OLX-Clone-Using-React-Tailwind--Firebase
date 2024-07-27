import React, { useContext } from 'react';
import { ProductDetails } from '../store/FirebaseContext';

const ViewPost = () => {
  const { postDetails } = ProductDetails();
  console.log(postDetails);

  if (!postDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="pt-16 flex">
      <div className="p-4 w-[70vw]">
        <img
          src={postDetails.url}
          alt=""
          className="w-[65vw] h-[85vh] object-cover"
        />
      </div>
      <div className="p-4 mt-12 w-[30vw]">
        <div className="border border-black p-2 rounded-md mb-8">
          <p className="font-bold text-3xl text-[#002f34] mb-5">&#x20B9; {postDetails.price}</p>
          <span className="block">{postDetails.productName}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="border border-black p-2 rounded-md">
          <p className="text-xl font-bold text-[#002f34] mb-2">Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
