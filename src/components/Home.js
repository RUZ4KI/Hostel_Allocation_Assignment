import React from 'react';
import Navbar from './Navbar';
import Info from './Info';
import Gender from './Gender';
import "../css/Home.css";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <div className="page-content">
            <Info/>
            
            </div>
        </div>
        
        
    )
}

export default Home
