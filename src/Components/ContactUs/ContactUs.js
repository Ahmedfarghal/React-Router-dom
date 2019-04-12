import React, { Component } from 'react';
import './contactus.css';
import{Link} from "react-router-dom"

export default class ContactUs extends Component {
 render() {
  return (
    <div className="ContactUs">
         <p className="maintitle-contactus"> hello from ContactUs </p>
       <Link to="/">  <p className="subTitle-contactus">Home</p> </Link>
         
                  
    </div>
   )
 }
   
 }


