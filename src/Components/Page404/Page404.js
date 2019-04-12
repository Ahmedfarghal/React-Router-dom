import React, { Component } from 'react';
import './page404.css';
import{Link} from "react-router-dom"


export default class Page404 extends Component {
    render(){
        return(
            <div className="Page404">
            <p className="mainTitle-Page404">Page Not Found... !! </p>
       <Link to="/">  <p className="subTitle-Page404">Back to Home</p> </Link>

            </div>
        )
    }
}