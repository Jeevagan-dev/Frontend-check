// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function Home() {

//     const [auth , setauth] = useState(false);
//     const [message, setmessage] = ('');
//     const [name , setname] = ('');
//     axios.defaults.withCredentials = true;
//     useEffect(()=>{
//         try{
//          const result =  axios.get('http://localhost:5000');
//          if(result.data.status === 'success'){
//             setauth(true);
//             setname(result.data.name);
//          }
//          else{
//            setauth(false);
//            setmessage(result.data.Error);
//          }
//         }
//         catch(err){
//             console.log(err);
//         }
//     },[])
//   return (
//      <div>
//         {
//             auth ? <div> {name} Authorised </div> : <div>{message} Not authorised </div>
//         }
//      </div>
//   )
// }



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
export default function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');


  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://backend-check-3ob3.onrender.com');
        console.log(result);
        if (result.data.status === 'success') {
          setAuth(true);
          console.log(result)
          setName(result.data.name);
        } else {
          setAuth(false);
          setMessage(result.data.Error);
        }
      } catch (err) {
        console.log(err);
        setAuth(false);
        setMessage("An error occurred");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        auth ? <div>{name} Authorized
        
        <AdminHome />
        </div> : <div> you are not authorised </div>
      }
    </div>
  )
}
