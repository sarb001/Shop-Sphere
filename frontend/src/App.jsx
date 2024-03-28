import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import About from './components/About/About'
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ProfileAuthentication } from './components/actions/UserActions'

function App() {

  const { isAuth , loading } = useSelector(state => state.user);
  console.log('main auth =',isAuth);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(ProfileAuthentication())
   },[])

  return (
  <>
  <Navbar />
   <Routes>
     <Route path='/' element= {<Home />}>  </Route>
     <Route path='/register' element= {<Register />}>  </Route>
     <Route path='/login' element= {<Login />}>  </Route>
     <Route path='/about' element= {<About />}>  </Route>
     {/* <Route path='/logout' element= {<About />}>  </Route> */}
     {/* <Route path='/userprofile' element= {<About />}>  </Route> */}
    </Routes> 
    <ToastContainer />
  </>
  )
}

export default App
