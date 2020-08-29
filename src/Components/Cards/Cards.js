import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js'

class Cards extends Component {

    styles = () =>{
        return{
            textAlign:'right',
            paddingLeft:"900px",
            color:"white"
            
        }
    }
    


    render() {
        return (
            (
               <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                   <a className="navbar-brand" style={{paddingLeft:"200px" , fontFamily:"cursive", color:"white" , fontWeight:"bold"}} href="<Navbar/>">zomato</a>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
   
                   <div style = {this.styles()} className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item active">
                               <a className="nav-link" style = {{color:"white"}} href="<Navbatr/>">Home <span className="sr-only">(current)</span></a>
                           </li>
                           <li className="nav-item active">
                               <a className="nav-link" style = {{color:"white" , paddingLeft:"50px"}} href="<Navbar/>">Sign In</a>
                           </li>
                       </ul>
                   </div>
                   </nav>
                   
           )
               )
    }
}

export default Cards
