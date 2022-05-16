import axios from 'axios';

export const getBlocks = async function() {
    //request config
    const config = {
        headers: {
            'x-auth-token': localStorage.getItem('token')
        }
    }
    //request
    //const codeblocksRes = await axios.get('/api/codeblock',config); //production
    const codeblocksRes = await axios.get('http://localhost:5000/api/codeblock',config);
    return codeblocksRes;
}

export const getBlockBySessionId = async function(id){
    //request       
    //const codeblock = await axios.post(`/api/sessions/${id}/codeblock`); //production
    const codeblock = await axios.post(`http://localhost:5000/api/sessions/${id}/codeblock`);
    return codeblock;
}

export const checkBlockAnswer = async function(blockid, content){
     //request config
     const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }
      //request data
      const data = {
        'content': content
      }
      //request
      //const codeblock = await axios.post(`/api/codeblock/${blockid}`,JSON.stringify(data),config); //production
      const codeblock = await axios.post(`http://localhost:5000/api/codeblock/${blockid}`,JSON.stringify(data),config);
      return codeblock;
}