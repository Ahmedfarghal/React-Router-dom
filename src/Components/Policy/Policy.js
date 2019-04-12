import React, { Component } from 'react';
import './policy.css';
import{Link} from "react-router-dom"

export default class Policy extends Component {
 render() {
  return (
    <div className="policy">
         <p className = "maintitle-policy" > hello from Policy </p>
       <Link to="/">  <p className="subTitle-policy">Home</p> </Link>
         
                  
    </div>
   )
 }
   
 }


