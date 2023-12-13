import { useState } from 'react'
import { Route , Routes } from 'react-router'
import data from "./../data.json";
import StartPage from './Components/StartPage';
import Login from './Components/Login'
import Signup from './Components/Signup';
import Website from './Components/Website';
import Home from './Components/Home';
import { Navigate } from 'react-router-dom';

interface usersObj{
    email:string
    password:string
}

function App() {
  const Filmdata = data
  console.log(Filmdata);
  // const [logSign,setLogSign] = useState(0)
  
  let users:usersObj[]|never[]=[]




  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage  />} >
          {/* <Route index path='login' element={<Login users={users} />}/>
          <Route path='signup' element={<Signup users={users} />}/>  */}
          <Route path='website' element={<Website/>}>
            <Route index path='home' element={<Home Filmdata={Filmdata} />}/>
          </Route>
        </Route> 
      </Routes>
    </>
  )
}

export default App
