import React,{useEffect} from 'react';
import socketIOClient from "socket.io-client";


var socket ;
const Header = () => {
    
    

    useEffect(() =>{
      //setting endpoint and create socket
        const endpoint = 'http://localhost:5000/';
        socket = socketIOClient(endpoint);

    },[])
  return (
    <div className='header'>
    <h1>My Code Review App</h1>
      
    </div>
  )
}

export {Header,socket};
