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
import Shop from './components/Shop/Shop.1'
import Cart from './components/Cart/Cart'
import Product from './components/Products/Product'
import PaymentSuccess from './components/Payment/PaymentSuccess'

function App() {

  const { isAuth , loading } = useSelector(state => state.user);
  console.log('main auth =',isAuth);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(ProfileAuthentication())
   },[dispatch])

  return (
  <>
  <Navbar />
   <Routes>
     <Route path='/' element= {isAuth ? <Home /> : <Login /> }>  </Route>
     <Route path='/register' element= {<Register />}>  </Route>
     <Route path='/login' element= {<Login />}>  </Route>
     <Route path='/about' element= {isAuth ? <About /> : <Login />}>  </Route>
     <Route path='/product' element= {isAuth ? <Product /> : <Login />}>  </Route>
     <Route path='/cart' element= {isAuth ? <Cart /> : <Login />}>  </Route>
     <Route path='/paymentsuccess' element= {isAuth ? <PaymentSuccess /> : <Login />}>  </Route>
     
    </Routes> 
    <ToastContainer  autoClose = {300} />
  </>
  )
}

export default App
