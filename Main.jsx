import React,{ useState } from 'react';
import NavBar from './Navbar';
import Header from './Header';
import Posts from './Posts';
export default function Main(){
    return(
       < div class="Main">
           <NavBar/>
           <Header/>
           <Posts/>
        </div>
    )
}