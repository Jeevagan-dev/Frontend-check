import React from 'react';
import { useState ,useEffect } from 'react';
import { FaUserCheck } from "react-icons/fa6";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';


function Adminlogin() {
  const [auth, setAuth] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://backend-check-3ob3.onrender.com');
        if (result.data.status === 'success') {
          setAuth(true);

        } else {
          setAuth(false);
        }
      } catch (err) {
        console.log(err);
        setAuth(false);
        setMessage("An error occurred");
      }
    };

    fetchData();
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [loginmsg , setloginmsg] = useState(false);

  function logins() {
    setloginmsg(true);
    toast.error('username or password invalid');
  }

  const handleSubmit = async (event)=>{
     event.preventDefault();
     try{
      const res = await axios.post('https://backend-check-3ob3.onrender.com/login', {username:username,password:password});
     
     console.log(res);
      if(res.data.status === "success"){
        navigate('/');
      }
      else{
         logins();
      }
     }
     catch(e){
      console.log(e);
     }
  }

 
  return (

    auth ? <Home /> :
    <div className='b-100vh'>
             <ToastContainer />

    <div className='card'>
        <div>
        <FaUserCheck  className='FaUserCheck'/>
       <h2>Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="c-area">
                 <label htmlFor="username" > Username</label>
                 <input type="text" id='username' name='username' value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
            </div>
            <div className="c-area">
                 <label htmlFor="password"> Password</label>
                 <input type="password" id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="c-area">
                <button type="submit">Login</button>
            </div>
            
        </form>
    </div>
    </div>
  )
}

export default Adminlogin