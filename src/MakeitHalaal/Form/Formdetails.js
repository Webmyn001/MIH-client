import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Formdetails() {
  
  const [Name, setName] = useState("")
  const [School, setSchool] = useState("")
  const [BankName, setBankname] = useState("")
  const [AcctName, setAcctName] = useState("")
  const [AcctNo, setAcctNo] = useState("")
  const [Shortnote, setShortnote] = useState("")
  const [Whatsapp, setWhatsapp] = useState("")
  const [images, setImages]= useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  

  const saveForm = async (e) => {
    
    e.preventDefault();
     

    axios.post("https://repulsive-threads-foal.cyclic.app//api/lessons/add", {Name,School,BankName,AcctName,AcctNo,Whatsapp,Shortnote,images})
    .then((res)=>
    { 
     
    console.log("saved succesfully")
    navigate("/");
    alert("Thank you , form succesfully submitted , we will get back to you on Whatsapp ")
   
  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form or ensure you are connected to the Internet.")
      
     })
    
    }

    useEffect(()=>{
       axios.get("http://localhost:4000/api/lessons/").then((res)=>{
       }).catch((err) => {
        console.log(err)
       })

    },[])

    
    useEffect(()=>{
      axios.get("http://localhost:4000/api/lessons/").then((res)=>{
      }).catch((err) => {
       console.log(err)
      })

   },[])

   //loading
 const Load =()=> {
      alert("Please wait while your request is been processed ")
    }

   // conversion of image to base64

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = ()=>{
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      };
    })
  } 
const Onchangename =(e)=> {
        setName(e.target.value)
    }

    const Onchangeschool =(e)=> {
      setSchool(e.target.value)
  }
  const OnchangeBankname =(e)=> {
    setBankname(e.target.value)
}

const OnchangeAcctName =(e)=> {
  setAcctName(e.target.value)
}

const OnchangeAcctNo =(e)=> {
  setAcctNo(e.target.value)
}

const Onchangewhatsapp =(e)=> {
  setWhatsapp(e.target.value)
}
const OnchangeShortnote =(e)=> {
  setShortnote(e.target.value)
}

 const OnchangefileID = async (e) => { 
   const files = Array.from(e.target.files)
       
if (e.target.files.length < 2 ) {
  setImages(null)
   alert("please upload two images School ID card and Jamb Admission Letter")
   }else{
        setImages([]);
        files.forEach(file => {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages(oldArray => [...oldArray, reader.result]);
                    
                }
            }

            reader.readAsDataURL(file)

        })
   }
 }


console.log(Name,School,BankName,AcctName,AcctNo,Whatsapp,Shortnote,images )
  return (
    <div>
       
       <form className="flex flex-col justify-center items-start sm:flex sm:items-center px-7 pl-9 pb-5"
       onSubmit={saveForm} enctype="multipart/form-data">
                
                <label className=" font-semibold text-[#fff8ea] pt-3 text-xl py-1 ">Name </label>
                <input placeholder="Abdul-Rahman Faruq"  value={Name} onChange={Onchangename}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]" required/>
                
                <label className="font-semibold pt-3 text-[#fff8ea] text-xl py-1 ">School</label>
                <input placeholder="University Of Ibadan" value={School} onChange={Onchangeschool}
                className=" border-[#0b0f11] focus:outline-0 border-2 mb-3 sm:w-[400px] rounded-lg px-3 text-[#594545]" required/>

                <h1 className='pt-5 font-semibold text-[#fff8ea] text-xl'>Accounts Details</h1>
                <label className="  text-[#fff8ea] pt-3 py-1 ">Bank Name</label>
                <input placeholder="First Bank" value={BankName} onChange={OnchangeBankname}
                className=" border-[#0b0f11] text-[#20201f] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 " required/>
                <label className=" text-[#fff8ea]  py-1 ">Account Name</label>
                <input  value={AcctName} onChange={OnchangeAcctName}
                className=" border-[#0b0f11] focus:outline-0 border-2
                 sm:w-[400px] rounded-lg px-3 text-[#0e0d0c]" placeholder="Abdul-Rahman Faruq" required />
                <label className=" text-[#fff8ea] py-1 ">Account Number</label>
                <input  value={AcctNo} onChange={OnchangeAcctNo} type="Number"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] rounded-lg px-3 text-[#141311]"placeholder="0123456789" required />



          


                <h1 className='pt-5 text-[#fff8ea] font-semibold text-xl'>Proof Of Studentship</h1>
               <label htmlFor='file'  className=" text-xs text-[#fff8ea] py-1 ">kindly select two images, your School ID card and Jamb Admission Letter</label>
                <input  type='file'  name='images' onChange={OnchangefileID}
                className=" border-[#0b0f11] focus:outline-0 
                sm:w-[400px] w-[250px] border-2 rounded-lg px-3 text-[#0f0e0c]" multiple required/>
                    
                     
                   
               
          
                <label className=" text-[#fff8ea] pt-5 text-xl font-semibold py-1 ">Whatsapp Number</label>
                <input value={Whatsapp} onChange={Onchangewhatsapp} type="Number"
                className=" border-[#0b0f11] focus:outline-0 border-2 
                sm:w-[400px] rounded-lg px-3 text-[#0f0f0d]" placeholder="08100000000" required />

                

                <label className="italic text-[#fff8ea] pt-5 font-semibold py-1 ">Write a short note to proof that you truely need it.</label>
                <textarea placeholder="Write a short note ..... "  value={Shortnote} onChange={OnchangeShortnote} 
                className= " border-[#0b0f11] focus:outline-0 w-[250px] h-[100px] border-2 rounded-lg px-3 text-[#594545]" required/>
                
                
                <div className="flex items-center justify-center gap-x-5 py-7  pb-0">
                 <div className=''>
                 <button className="bg-[#1048a9] rounded-md px-3 py-2 " onClick={Load}>Submit</button>
                 </div>
               </div>  

         </form>
      



    </div>
  )
  }

  export default Formdetails
