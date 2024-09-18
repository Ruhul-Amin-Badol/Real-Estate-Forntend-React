import React from 'react';
import ProductCart1 from './ProductCart1';

const PropertySlider = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex  align-items-center">
        {/* Align text to the start of the first column */}
        <div className="col-6 text-start Propertyslide-head-p">
          <p>Popular Properties</p>
        </div>
        {/* Align text to the end of the second column */}
        <div className="col-6 text-end Propertyslide-link">
          <a href="#">See all properties</a>
        </div>
      </div>
      {/* Property slider content can go here */}
      <div className='row'>
        <div className="col-12 "><ProductCart1/></div>
     
      </div>
    </div>
  );
};

export default PropertySlider;
