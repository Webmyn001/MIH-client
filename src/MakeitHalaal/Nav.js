
import React, { useState } from "react";

import Navlinks from "./Navlinks";
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "./Images/logo2.png"

function Nav () {
    const [open, setopen] = useState(false)
    const handleClick = ()=> setopen(!open)
return(
            <div className=" text-[#fff8ea] w-full h-[40px] flex justify-between items-center">
            
           
            <div>
            <Link to="/"> 
              <div className="flex gap-x-4 items-center">
              <img src={logo} alt="logo" className="h-[55px] cursor-pointer rounded-lg"/>
                <h1 className="text-xl font-bold font-sans tracking-wide ">Make It Halal </h1>
                </div>   
               </Link> 
             </div>
             
              <div> 
                  
                  <ul className="md:flex hidden  gap-x-10 items-center px-4">
                    <Navlinks/>
                  </ul>
                </div>
                  {/* small screens */}

                  <ul className={`md:hidden fixed top-0 z-30 bg-[#1048a9] h-screen w-3/5 right-0 shadow-2xl
                  flex flex-col gap-10 text-medium p-7 pt-20 rounded-2xl ease-in-out duration-700 ${open ? "top-0" : "right-[-300%]"}`}>
                    <Navlinks handleClick={handleClick} />
                  </ul>

                  <div className="z-50 md:hidden  cursor-pointer flex items-center" 
                   onClick={handleClick}>
                    {open ? <FaTimes/> : <FaBars/>}
                  </div>

             
          </div>
)
}

export default Nav