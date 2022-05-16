import React,{useState, useEffect} from 'react';
import Block from './Block';
import { Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getBlocks } from '../services/codeblocks.service';


const Lobby = () => {
    const isAuth = useSelector((state) => state.data.isAuthenticated)
    const name = useSelector((state) => state.data.user.name)
    const [codeBlocks,setCodeBlockes] = useState([]);

    const getData = async () =>{
        try {
            //request
            const codeblocksRes = await getBlocks();
            //set the data
            setCodeBlockes(codeblocksRes.data);
            
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() =>{
        getData();     
    },[])
    
    if(!isAuth){
        //Block all exept log in users from arrive lobby page
        return <Navigate to={'/'} />
    }

  return ( 
    <div>
      <h1>welcome {name} Please Choose code block</h1>
      <div className='code_blocks_container'>
        {codeBlocks.map((block,index) => (
            <Block block={block} key={index} />
        ))}
      </div>
    </div>
  )
}

export {Lobby}
