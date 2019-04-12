import React, { Component } from 'react';
import './about.css';
import{Link} from "react-router-dom"

export default class About extends Component {
 render() {
  return (
    <div className="about">
         <p className="maintitle-about"> hello from About </p>
       <Link to="/">  <p className="subTitle-about">Home</p> </Link>
         
                  
    </div>
   )
 }
   
 }

