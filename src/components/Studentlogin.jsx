import React from 'react';
import { FaUserCheck } from "react-icons/fa6";
import { useState } from 'react';


function Studentlogin() {

    const [ password , setPassword ] = useState("");
    const [showPassword , setShowPassword] = useState(false);

  return (
 
<div className='b-100vh'>
    <div className='card'>
        <div>
        <FaUserCheck  className='FaUserCheck'/>
       <h2>Student Login</h2>
        </div>
        <form action="" method="post">
            <div className="c-area">
                 <label htmlFor="username" > Username</label>
                 <input type="text" placeholder='Enter Username' id='username' name='username' />
            </div>
            <div className="c-area">
                 <label htmlFor="password"> Password</label>
                 <input type={"password"} 
                 id='password' placeholder='Enter password' name='password' />
                 
                 
            </div>
           
            <div className="c-area">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Studentlogin;