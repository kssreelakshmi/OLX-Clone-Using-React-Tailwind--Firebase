
import React from 'react';

const FooterComponent = () => {
  return (
    <div className=" w-full relative mt-auto">
      <div className="flex justify-between items-center bg-gray-200 p-4">
        <div>
          <div className="text-2xl font-bold">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="mt-2">
            <ul>
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            <p>ABOUT US</p>
          </div>
          <div className="mt-2">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            <p>OLX</p>
          </div>
          <div className="mt-2">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy Information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 bg-teal-800 text-white">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  );
};

export default FooterComponent;
