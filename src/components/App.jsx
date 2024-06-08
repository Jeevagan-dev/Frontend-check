import React from 'react';
import Adminlogin from './Adminlogin';
import Studentlogin from './Studentlogin';
import AdminHome from './AdminHome';
import Home from './Home';
import './style.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";


function App() {
  const auth = true;
  return (
    <div>

        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Adminlogin />}></Route>
            <Route path='/Admin' element={<Adminlogin />}></Route>
            <Route path='/AdminHome' element={ auth ? <AdminHome /> : <Adminlogin />}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
