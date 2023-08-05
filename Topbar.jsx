import React from "react";
import { Link } from 'react-router-dom';
import "./Topbar.css";
import "./Login.jsx";
export default function TopBar(){
    return(
        <div class="TOPBAR">
            <div class="topLeft">
               <Link to="/" style={{textDecoration:"none",color:"Black"}}>  MEDIUM</Link>
            </div>
                
                <div class="topRight">
                        <div class="LOGIN">
                     <Link to="/Login"> <button >LOGIN</button></Link>
                        </div>
                        <div class="SIGNUP">
                        <button>SIGNUP</button>
                        </div>
                </div>
        </div>
    )

}