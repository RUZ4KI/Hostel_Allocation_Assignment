import React from 'react';
import "../css/Navbar.css";
import firebase from "firebase";
import  AvatarIcon  from '@material-ui/core/Avatar';

function Navbar() {
    return (
        <div className="qHeader">
             <div className="qHeader__left">
             <div className = "qHeader_logo">
                  <img src="http://www.logo-designer.co/wp-content/uploads/2015/05/Hostelbookers-logo-design-lucky-generals.png" alt=""/>
                  
             </div >
             <div className="qHeader_name">
                 <h2>Newton School</h2>
             </div>
             </div>
             
             <div className="qHeader__avatar">
                    <AvatarIcon
                     onClick={() => firebase.auth().signOut()} src={firebase.auth().currentUser.photoURL}
                    />
            </div>
        </div>
    )
}

export default Navbar
