import React from "react";
import {Link} from "react-router-dom"
function Navlinks (props) {
    const Links = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"Form",
            link:"/form"
        },
        
        {
            name:"Contact Us",
            link:"/contact"
        },
          
       
        
    ]
    return(
        <>
               {Links.map((link,i) => (
                <li key={i} className="font-semibold text-[#fff8ea] hover:text-[#0b0f11]">
                
                <Link to={link.link} onClick={props.handleClick} >{link.name} </Link> 
                </li>
               ))
               
               }
        </>
    )
}

export default Navlinks