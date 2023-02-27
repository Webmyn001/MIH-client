import React from 'react'
import Formdetails from './Formdetails'

function Form() {
  return (

    <div className=' bg-gradient-to-t min-h-screen from-[#25c5d5] to-[#3360b4]   shadow-sm'>
        <h1 className='text-2xl font-semibold underline text-[#fff8ea] text-center  '> Make it Halaal Ramadan Relief Program</h1>
        <h2 className='pt-5 text-xl font-semibold text-[#fff8ea] text-center'>Kindly complete the form below if you are interested. </h2>
        <Formdetails/>
    </div>
  )
}

export default Form