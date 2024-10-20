import React from 'react'
import { MdHorizontalRule } from "react-icons/md";
import handhouse from "../assets/images/handhouse.jpg";

const Consultation = () => {
  return (
    <>
    <div className='mt-5 pt-5'>
        <div className="row">
            <div className="col-7 consaltation-text">
            <h4 className=" mb-0 mt-0 story-heading">
            <MdHorizontalRule className="text-line" />
            Meet the Team For Book Consultation
            </h4>
            <h2 className="main-heading  mt-0">
            Meet the stewards of your heritage journey
            </h2>
            <p className="description">
            each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
              </p>
              <p className='mt-5'> <button className='btn btn-md consaltation-btn'>Book Consultation Now</button></p>
             
            </div>
            <div className="col-5 d-flex  justify-content-end"><img src={handhouse} alt={handhouse} /></div>
        </div>
    </div>

    </>
  )
}

export default Consultation