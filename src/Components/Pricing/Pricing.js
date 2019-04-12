import React, { Component } from 'react';
import './pricing.css';
import{Link} from "react-router-dom"

export default class Pricing extends Component {
 render() {
  return (
    < div className = "pricing" >
         <p className = "maintitle-pricing" > hello from Pricing </p>
       <Link to="/">  <p className="subTitle-pricing">Home</p> </Link>
         
                  
    </div>
   )
 }
   
 }


