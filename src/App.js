import React from 'react'
import Header from './MakeitHalaal/Header'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Form from './MakeitHalaal/Form/Form';
import Home from './MakeitHalaal/Home';
import Contact from './MakeitHalaal/Contact';
import Footer from './MakeitHalaal/Footer';
import Notfound from './MakeitHalaal/Notfound';

function App() {
  return (
    <div>
       <Router>
      <Header/>
      <Routes>
         <Route exact path="/" element = {<Home/>}></Route>
         <Route exact path="/form" element = {<Form/>}></Route>
         <Route exact path="/contact" element = {<Contact/>}></Route>

         <Route path = "*"  element= {<Notfound/>}></Route>
           

     
      </Routes>
     <Footer/>
           
            

          
      </Router>
       
     
          
             
            

          
     
     
    
    
    </div>
  )
}

export default App