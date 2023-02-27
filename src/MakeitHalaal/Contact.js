import React from "react";
import {ImLocation} from "react-icons/im"
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {AiFillBank} from "react-icons/ai"


 function Contact () {
    return(
        <div name= "contact"> 
            <div className=" text-[#fff8ea] bg-gradient-to-t
            min-h-screen from-[#25c5d5] to-[#3360b4] pb-[50px]">

            <h1 className="text-center text-2xl sm:text-3xl pt-[100px] font-bold">About us</h1>
<div className="flex flex-col justify-center items-center">
         <div className="w-[350px] sm:w-[500px] md:w-[600px] ">
            <h2 className="text-center p-4 font-semibold ">
             Make It Halal Ramadan Relief program commitee wish to asist students all over Nigeria Institution 
             to reduce suffering during Ramadan.
             <h2> Give the Needy student opportunities to be able to eat healthy food during the month of mercy.</h2>
          
          <h2 className="pt-4 text-base">The Program started 1442 A.H and we were able to 
          reach 25 students from different universities, 1443 A.H we were able to reach out to 50 students 
          from different universities.
           </h2>
           <h2 className="pt-4 text-base">This year we hope to increase the amount and the number of student that 
           will benefit from our Ramadan Relief Program. </h2>
           </h2>
</div>
</div>
          
          
      

                  <h1 className="text-center text-2xl sm:text-3xl pt-[50px] font-bold">Contact us</h1>
          <div className="flex flex-col px-6  font-semibold  pl-12 pt-3  font-serif ">
                 <h2 className="flex items-center gap-x-3 py-1"> <span className="text-xl"><ImLocation/></span>Ajadi Central Mosque, No5 Oduduwa lane, Ajadi Ologuneru Ibadan.</h2>
                  <h2 className="flex items-center gap-x-3 py-1"> <span className="text-xl"><BsFillTelephoneInboundFill/></span>  08139122219 </h2>
                  <h2 className="flex items-center gap-x-3 py-1"> <span className="text-xl"><BsFillTelephoneInboundFill/></span>  09055022646 </h2>
                  <h2 className="flex items-center gap-x-3 py-1 "> <span className="text-xl"><BsFillTelephoneInboundFill/></span>  09064334413 </h2>
                  <h2 className="flex items-center gap-x-3 py-1"> <span className="text-xl"><BsFillTelephoneInboundFill/></span>  09123476605 </h2>

                  <h2 className="flex items-center gap-x-3 py-1"> <span className="text-xl"><MdEmail/></span> makeithalal18@gmail.com</h2>
          </div> 
          <h1 className="flex items-center px-6 justify-center  gap-x-3 pt-[50px]
           text-2xl font-bold"><span className="text-3xl"><AiFillBank/></span>Bank Details</h1> 
             <div className="flex flex-col pl-12 pt-3 font-semibold font-serif " >
                    
                  <h2>Bank Name : FCMB</h2>
                  <h2>Account Name: Make it Halal</h2>
                  <h2>Account Number: 2000212659</h2>
           </div>
                 
            </div>
        </div>
    )
 }

  export default Contact