import React from 'react'
import { IoMdBatteryCharging } from "react-icons/io";
import { GiLift,GiFamilyHouse } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { PiParkDuotone } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { GrUserPolice } from "react-icons/gr";
import { GiWaterTank } from "react-icons/gi";
import { GiParkBench } from "react-icons/gi";
import { GrCompliance } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";
import { TbBrandIntercom } from "react-icons/tb";
import { GrHostMaintenance } from "react-icons/gr";
import { GiNuclearWaste } from "react-icons/gi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { GiSoccerField } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";


const Amenities = () => {
  return (
    <>
        <div className='container amenities-main mt-5'>
          
          <div className='px-2'>
            <h4>Amenities</h4>
          </div>
          <div className="row p-4">
            <div className="col-md-3 col-sm-2"><p><IoMdBatteryCharging/> Power Back Up</p></div>
            <div className="col-md-3 col-sm-2"><p><GiLift /> Lift</p></div>
            <div className="col-md-3 col-sm-2"><p><GiFamilyHouse/> Club House</p></div>
            <div className="col-md-3 col-sm-2"><p><MdSportsGymnastics/> Gymnasium</p></div>
            <div className="col-md-3 col-sm-2"><p><PiParkDuotone/> Park</p></div>
            <div className="col-md-3 col-sm-2"><p><LuParkingCircle/> Reserved Parking</p></div>
            <div className="col-md-3 col-sm-2"><p><GrUserPolice /> Security</p></div>
            <div className="col-md-3 col-sm-2"><p><GiWaterTank/> Water Storage</p></div>
            <div className="col-md-3 col-sm-2"><p><GiParkBench/> Private Terrace/Garden</p></div>
            <div className="col-md-3 col-sm-2"><p><GrCompliance/> Vaastu Compliant</p></div>
            <div className="col-md-3 col-sm-2"><p><RiCustomerService2Line/> Service/Goods Lift</p></div>
            <div className="col-md-3 col-sm-2"><p><LiaCarSideSolid/> Visitor Parking</p></div>
            <div className="col-md-3 col-sm-2"><p><TbBrandIntercom/> Intercom Facility</p></div>
            <div className="col-md-3 col-sm-2"><p><GrHostMaintenance/> Maintenance Staff</p></div>
            <div className="col-md-3 col-sm-2"><p><GiNuclearWaste/> Waste Disposal</p></div>
            <div className="col-md-3 col-sm-2"><p><MdOutlineLocalLaundryService/> Laundry Service</p></div>
            <div className="col-md-3 col-sm-2"><p><IoWifiSharp/> Internet/Wi-Fi Connectivity</p></div>
            <div className="col-md-3 col-sm-2"><p><PiTelevisionSimple/> DTH Television Facility</p></div>
            <div className="col-md-3 col-sm-2"><p><AiOutlineFire/> Piped Gas</p></div>
            <div className="col-md-3 col-sm-2"><p><GiRunningShoe/> Jogging and Strolling Track</p></div>
            <div className="col-md-3 col-sm-2"><p><MdOutlineSportsTennis/> Outdoor Tennis Courts</p></div>
            <div className="col-md-3 col-sm-2"><p><IoSchool/> Early Learning Centre</p></div>
            <div className="col-md-3 col-sm-2"><p><GiSoccerField/> Kids Play Area</p></div>
            <div className="col-md-3 col-sm-2"><p><LiaBedSolid /> Beds</p></div>
          </div>

        </div>
    </>
    
  )
}

export default Amenities