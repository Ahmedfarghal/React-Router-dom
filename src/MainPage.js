import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom"
import './MainPage.css';
import About from "./Components/About/About"
import ContactUs from "./Components/ContactUs/ContactUs"
import Login from "./Components/Login/Login"
import Policy from "./Components/Policy/Policy"
import Pricing from "./Components/Pricing/Pricing"
import Page404 from './Components/Page404/Page404';

class MainPage extends Component {
  render() {
    return (

<BrowserRouter>
  <Switch>
    <Route exact path="/React-Router-dom"  render={()=>(
      <ul className = "navigation" >
        <li className="About">
       <Link to="/About"> <p className="mainPage-p">About</p></Link>  
          </li>
        <li className="Login">
         <Link to="/Login"> <p className="mainPage-p">Login</p> </Link>  
        </li>
        <li className="Policy">
         <Link to="/Policy"> <p className="mainPage-p">Policy</p></Link>
        </li>
        <li className="Pricing">
        <Link to="/Pricing">  <p className="mainPage-p">Pricing</p> </Link>
        </li>
        <li className = "Contactus">
         <Link to="/Contactus"> <p className="mainPage-p">Contactus</p></Link> 
        </li>
      </ul> 
    )}/>
    
    <Route path="/About" 
    render={(props)=> <About {...props} isAuthed={true}/>}/>
    />

    <Route path="/ContactUs"  
    render={(props)=> <ContactUs {...props} isAuthed={true}/>}/>
    />

    <Route path="/Login" 
    render={(props)=><Login {...props} isAuthed={true}/>}/>
    />

    <Route path="/Policy" 
    render={(props)=><Policy {...props} isAuthed={true}/>}/>
    />

    <Route path="/Pricing" 
    render={(props)=><Pricing {...props} isAuthed={true}/>}/>
    />

    < Route path = "/"
    render={(props)=><Page404 {...props} isAuthed={true}/>}/>
    />
    
  </Switch>
     </BrowserRouter>


     
    );
  }
}

export default MainPage;
