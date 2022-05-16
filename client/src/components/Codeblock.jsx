import React,{useEffect,useState} from 'react';
import { socket } from './Header';
import Highlight from 'react-highlight';
import { useParams } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkBlockAnswer } from '../services/codeblocks.service';
import { getBlockBySessionId } from '../services/codeblocks.service';

let blockid ='';

const Codeblock = () => {
    const isStudent = useSelector((state) => !state.data.isAuthenticated)
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [formData, setFormData] = useState({
        codeblock: ``,
        blockId:''
    });
    

    const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      //send event of codeChange to the socket server
      socket.emit("codeChange", e.target.value)
    }

    const bringData = async () =>{
        try {
          //request       
          const codeblock = await getBlockBySessionId(id);
        
          //set data
          setFormData({ ...formData,codeblock : codeblock.data.content , blockId : codeblock.data._id});
          blockid = codeblock.data._id;
        } catch (err) {
          alert(err.message);
        }
    }

    useEffect(() => {
        // componentDidMount
        var state_current = this;
        bringData();
        //setting what to do when CODE_CHANGED event Recieved
        socket.on("CODE_CHANGED", changeData);
    
        // componentWillUnmount
        return () => {
          //close listeners on
            socket.off("CODE_CHANGED");
        };
      }, []);

      const checkAnswer = async() =>{
        try {
          if(!blockid){
            throw new Error('Block id missing');
          }
          //request
          const codeblock = await checkBlockAnswer(blockid, formData.codeblock);
          if(codeblock.data){
            alert(`Bravo You Did It`)
          }else{
            alert(`Try Again`)
          }
        } catch (err) {
          alert(err.message);
        }
      }

    const getData = code => {
        setFormData({...formData, codeblock : code.content });    
    };

    const changeData = (changedCodeBlock) => {
      setFormData({ ...formData, codeblock: changedCodeBlock});
    }

  return (
    <div>
      <div className='block_container'>
        {isStudent && <textarea name='codeblock' className='codeblock' value={formData.codeblock} onChange={(e) => onChange(e)}/>}
        <Highlight className='highlight' language="javascript">
          {formData.codeblock}
        </Highlight>
      </div>
      <div>
      {!isStudent &&<button type='submit' onClick={() => navigate('/lobby')} >Back</button>}
      {isStudent &&<button className='block_done_btn' type='submit' onClick={() => checkAnswer()} >Done</button>}
      </div>
      
    </div>
  )
}

export default Codeblock
