import React from 'react'
import Header from './MakeitHalaal/Header'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Form from './MakeitHalaal/Form/Form';
import Home from './MakeitHalaal/Home';
import Contact from './MakeitHalaal/Contact';
import Footer from './MakeitHalaal/Footer';
import DashboardApp from './MakeitHalaal/Dashboard/DashboardApp';
import Fulldetails from './MakeitHalaal/Dashboard/Fulldetails';
import Notfound from './MakeitHalaal/Notfound';
import Update from './MakeitHalaal/Dashboard/Update';

function App() {
  return (
    <div>
       <Router>
      <Header/>
      <Routes>
         <Route exact path="/" element = {<Home/>}></Route>
         <Route exact path="/form" element = {<Form/>}></Route>
         <Route exact path="/contact" element = {<Contact/>}></Route>

         {/* dashboard */}
         <Route exact path="/dashboard" element = {<DashboardApp/>}></Route>
         <Route path = "/fulldetails/:id" exact element= {<Fulldetails/>}></Route>
         <Route exact path="/update" element = {<Update/>}></Route>
         

         <Route path = "*"  element= {<Notfound/>}></Route>
           

     
      </Routes>
     <Footer/>
           
            

          
      </Router>
       
     
          
             
            

          
     
     
    
    
    </div>
  )
}

export default App