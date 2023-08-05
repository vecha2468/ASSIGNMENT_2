import Post from "./Post";
import './Myprofile.css';
import NavBar from './Navbar';
import { Link } from "react-router-dom";
export default function Myprofile() {
    return (
        <>
     <NavBar/>        
      <div className="Myprofile">
            <div class="complete">
            <h1 style={{textAlign:"center"}}>MY POSTS</h1>
           <Link to="/write"> <h3 style={{textAlign:"end"}}>New Post</h3></Link>
            <div class="Myposts">
        <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        </div>
        
        <div class="Details">
        <h1 style={{textAlign:"center",marginright:"40px"}}>MY Profile</h1>
            <img  style={{height:"150px",width:"150px",justifySelf:"space-between"}}src ="https://cdn.vox-cdn.com/thumbor/Y97pdEOBw39qZ2SdbIo_dKkHOmY=/0x0:4000x6000/1200x0/filters:focal(0x0:4000x6000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9637713/Fillipovic__Jill__cr_Gary_He_.jpeg "></img>
            <span>MY NAME</span>
            <span>Email Id</span>
            <span>Number of Posts</span>
        </div>
        </div>
        </>
    );
  }