import { useRef, useState } from 'react'
import data from "./../data.json";
import AuthLayout from './Components/AuthLayout';
import Login from './Components/Login'
import Signup from './Components/Signup';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Page from './Components/Page';
import { Navigate , createBrowserRouter , RouterProvider } from 'react-router-dom';



interface usersObj{
    email:string
    password:string
}

function App() {
  const Filmdata = data
  console.log(Filmdata);
  // const [logSign,setLogSign] = useState(0)
  
  const users= useRef<usersObj[]>([]) //useRef
  const [search, setSearch] = useState<undefined|string>()
  const [logOut, setLogOut] = useState<boolean>(false)


  const router = createBrowserRouter([
    {
      element:<Layout search={search} setSearch={setSearch} logOut={logOut} setLogOut={setLogOut} />,
      children:[
        {
          path:"/home",
          element:<Home Filmdata={Filmdata} search={search} />
        },
        {
          path:"/:page",
          element:<Page Filmdata={Filmdata} search={search} />
        }
      ]
    },
    {
      element:<AuthLayout/>,
      children:[
        {
          path:"/",
          element:<Navigate to="/login" />
        },
        {
          path:"/login",
          element:<Login users={users} setLogOut={setLogOut} />
        },
        {
          path:"/signup",
          element:<Signup users={users} />
        }
      ]
    }
  ])

  


  




  return (
    <>
      <RouterProvider  router={router}  />
    </>
  )
}

export default App
