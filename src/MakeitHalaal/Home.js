import React, { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import HomeImage from "./HomeImage";
import axios from "axios";




 const Home =()=> {
     
    const [date, setDate] = useState(new Date())
    const [update, setUpdate] =useState([])
    const getUpdate = async ()=> {
      axios.get("https://repulsive-threads-foal.cyclic.app/api/updates/getupdates")
      .then((res)=> setUpdate(res.data))
      .catch((err)=> console.log(err))
    }
    
     useEffect(()=> {
      getUpdate();
      var timer = setInterval(()=>setDate(new Date()), 1000)
      return function cleanup() {
         clearInterval(timer)
      }
      
     },[])

    return(
        <div className=" bg-gradient-to-t min-h-screen from-[#25c5d5] to-[#3360b4]  shadow-sm ">
                {/* date and time */}
         <div className="flex justify-between px-5 py-3 md:text-xl font-semibold font-serif text-[#fff8ea]">
           <h1>{date.toLocaleDateString()}</h1>
            <h1>{date.toLocaleTimeString()}</h1>
            

        </div> 

          <h1 className="text-center font-bold text-[#fff8ea]  text-2xl md:text-3xl 
           tracking-wider pb-5 ">
         Make It Halal Ramadan Relief Program</h1>
                         
              

        {/* Home image */}
    <div className="md:flex md:gap-x-5 md:flex-row flex flex-col items-center justify-center gap-y-5">
        
        <div><HomeImage/></div>
          
          <div className="w-[350px] sm:w-[400px] md:w-[500px] flex flex-col"> 
         <h2 className="text-[#fff8ea] text-xl text-center p-4 font-semibold ">
             Make It Halal Ramadan Relief program commitee wish
              to asist students all over Nigeria Institution 
             to reduce suffering during Ramadan.
           
             <h2 className="font-bold text-xl text-[#b61c1a] underline text-center">Latest News</h2>
       {
      update.map((update)=>(
          <div className="w-[350px] text-[#fff8ea] sm:w-[400px] md:w-[500px]">
      <h1 className='font-semibold text-sm px-3 '>{update.Text}</h1>
      
          </div>
        ))
      }
         <h2 className="pt-4 text-sm">If you are intrested in the program 
           kindly <Link to="/form"> <button className="text-[#1048a9]">Click here</button></Link> to 
           fill in the required information.
            </h2>

            
           <h2 className="pt-4 text-sm">For more information about the program or financial assistance 
           kindly <Link to="/contact"> <button className="text-[#1048a9]">Contact us.</button></Link> 
            </h2>
          
       </h2>
       
      </div>
      
 </div>
        
      
       
           
        </div>
    )
 }

 export default Home
