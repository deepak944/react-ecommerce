import './HomePage.css'
import { Header } from '../../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductGrids } from './ProductGrids';

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeDate = async() => {
     const response =await axios.get('/api/products')
      setProducts(response.data);
    };
    getHomeDate();
  },[]);
  
  return (
    <>
      <title>Ecommerce project</title>
      <Header cart={cart}/>
      
      <div className="home-page">
      <ProductGrids products={products} />
    </div>
  </>
  );
}
