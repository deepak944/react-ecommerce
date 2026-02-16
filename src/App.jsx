import { Routes,Route } from 'react-router-dom'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import HomePage from './pages/home/HomePage'
import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
    const [cart, setCart] = useState([]);
     useEffect(() => {
      const fetchAppData= async() => {
      const response = await axios.get('/api/cart-items?expand=product ');
        setCart(response.data);
      };
    fetchAppData();
    }, []);
  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />} />
       <Route path='/checkout' element={<CheckoutPage cart={cart} />} />
       <Route path='/orders' element={<OrdersPage cart={cart} />} />
       <Route path='/tracking' element={<TrackingPage cart={cart} />} />
    </Routes>
  )
} 

export default App
