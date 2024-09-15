import React from 'react';
import { BsArrowDownCircle } from "react-icons/bs"; // Import the circular arrow icon

const NewFlatP = () => {
  return (
    <div>
      <div className=" newflat shadow-lg">
        <div className="">
          {/* Bold and colored text */}
          <p style={{fontSize:'26px' }} className='m-0 fw-bold primary-color'>2K+</p>
          <h6 >New Flat Listed</h6>
          <div className="d-flex justify-content-between mt-3">
            {/* "View all" on the left */}
            <div>
              <a href="#" className="primary-color">View all</a>
            </div>
            {/* Arrow icon on the right */}
            <div>
              <BsArrowDownCircle  size={24} className='primary-color' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFlatP;
