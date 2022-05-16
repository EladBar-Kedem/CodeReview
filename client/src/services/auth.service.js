import axios from 'axios';

export const login = async function(email,password) {
    console.log(process.env);
        //request config
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //request data
        const data = {
            'email':email,
            'password':password
        }
        //request
        //const res = await axios.post(`/api/auth`,JSON.stringify(data),config); //production
        const res = await axios.post(`http://localhost:5000/api/auth`,JSON.stringify(data),config);

        return res;
}




