import axios from 'axios';

export const createSession = async function(blockId,mentorId) {
    //request data
    const sessionData = {
        blockId : blockId,
        mentorId:  mentorId,
      }
      
      //request
      //const session = await axios.post(`/api/sessions`, sessionData); //production
      const session = await axios.post(`http://localhost:5000/api/sessions`, sessionData);
      return session;
}