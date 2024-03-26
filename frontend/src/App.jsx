import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import About from './components/About/About'
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';

function App() {

  return (
  <>
  <Navbar />
   <Routes>
     <Route path='/' element= {<Home />}>  </Route>
     <Route path='/register' element= {<Register />}>  </Route>
     <Route path='/login' element= {<Login />}>  </Route>
     <Route path='/about' element= {<About />}>  </Route>
    </Routes> 
    <ToastContainer />
  </>
  )
}

export default App
