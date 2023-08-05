import React,{ useState } from 'react';
import TopBar from './Topbar';
import "./Home.css"
export default function Home(){
    return(
       < div class="Home">
           <TopBar/>
           <div class="Content">Welcome TO MEDIUM WEBSITE</div>
        </div>
    )
}