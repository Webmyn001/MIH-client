import React from "react";
import {AiOutlineCopyright, AiOutlineMail} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"


 function Footer () {
    return (
        <div className="bg-[#1048a9] bg-opacity-90 w-full h-[100px] text-base font-sans tracking-wider text-gray-200">
            <div className="flex flex-col justify-center items-center pt-3 ">
                <h1 className="flex items-center gap-x-1"> Webmyn <span><AiOutlineCopyright/></span> 2023</h1>
                <h1 className="flex items-center gap-x-1"> <AiOutlineMail/> bellomuhyideen0001@gmail.com</h1>
                <h1 className="flex items-center gap-x-1"> <BsWhatsapp/> 08139116879</h1>
            </div>
        </div>
    )
 }

  export default Footer