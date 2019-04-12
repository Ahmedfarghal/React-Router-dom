import React, { Component } from 'react';
import './login.css';
import{Link} from "react-router-dom"

export default class Login extends Component {
 render() {
  return (
    <div className="login">
         <p className = "maintitle-login" > hello from Login </p>
       <Link to="/">  <p className="subTitle-login">Home</p> </Link>
         
                  
    </div>
   )
 }
   
 }


