import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSession } from '../services/sessions.service';



const Block = ({block}) => {
  const navigate = useNavigate();
  const mentorId = useSelector((state) => state.data.user._id)
  const blockClicked = async () =>{
    try {
      //request
      const session = await createSession(block._id,mentorId);
      //alert url for student
      //alert(`Send this link to the student: https://frozen-gorge-46349.herokuapp.com/sessions/${session.data._id}`); //production
      alert(`Send this link to the student: localhost:3000/sessions/${session.data._id}`);
      //redirect mentor
      return navigate(`/sessions/${session.data._id}`);       
    } catch (err) {
        alert(err.message);
    }
  }

  return (
    <div className='block' onClick={()=>blockClicked()}>
      <h2> Codeblock: {block.title}</h2>
      <p>click to start Session</p>
    </div>
  )
}

export default Block
