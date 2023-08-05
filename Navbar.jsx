import React from "react";
import { Link } from 'react-router-dom';
import "./Topbar.css";
import "./Login.jsx";
export default function NavBar(){
    return(
        <div class="TOPBAR">
            <div class="topLeft">
               <Link to="./Main" style={{textDecoration:"none",color:"Black"}}>  MEDIUM</Link>
            </div>
                
                <div class="topRight">
                        <div class="LOGIN">
                     <Link to="/Myprofile"> <button >My PROFILE</button></Link>
                        </div>
                </div>
        </div>
    )

}