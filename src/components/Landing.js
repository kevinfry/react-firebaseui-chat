import {Link, useNavigate} from 'react-router-dom';
import { chatRooms } from '../Firebase/chatRooms';
import './Landing.css';
import React, {useContext} from "react";
import {AuthContext} from "../Firebase/context";
import app from "../Firebase/config";

function Landing() {
   const {user}= useContext(AuthContext)
   const navigate = useNavigate();
   return (
         <div>
            {!!user ? <>
               <h2>Choose a Chat Room</h2>
               <ul className="chat-room-list">
                  {chatRooms.map((room) => (
                        <li key={room.id}>
                           <Link to={`/room/${room.id}`}>{room.title}</Link>
                        </li>
                  ))}
                  <li onClick={()=> {
                     app.auth().signOut();
                     navigate('/');
                  }}>
                     ❌ Sign Out ⛔️
                  </li>
               </ul>
            </> : (<button className={"btn"} onClick={()=>{
               navigate('/signin')
            }}>SIGN IN / REGISTER</button>)

            }
         </div>
   )
}
export { Landing };
