import React,{ useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { setAuthenticateTrue, setUser } from '../redux/globalState';
import { useDispatch } from 'react-redux';
import {login} from '../services/auth.service'


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        token:''
});
const {name,email,password} = formData;

const onChange = e => {
    //Update data state
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

const sendData = async() => {
    //Check all field filled
    if(email.length === 0 || password.length === 0){
        alert('All field needs to be field');
        return;
    }
    try {
       const res = await login(email, password);
        //Set token for autheticate user
        localStorage.setItem('token', res.data.token);
        //Save redux global state vars
        dispatch(setUser(res.data));
        dispatch(setAuthenticateTrue());
        //redirect while done
        return navigate('/lobby');
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
        if(errors){
            errors.forEach(error => alert(error.msg));
        }      
    }
}

  return (
    <div className='loginContainer'>
        <h2>Welcome Mentor Please Login</h2>
      <div>
          <input className='login_input' onChange={(e)=>onChange(e)} value={email} name='email' placeholder='email'  type='text'/>
          <input className='login_input' onChange={(e)=>onChange(e)} value={password} name='password' placeholder='password'  type='password'/>
      </div>
      <button className='login_btn' onClick={()=>sendData(email, password, dispatch, navigate)}>Login</button>
    </div>
  )
}

export {Login};
