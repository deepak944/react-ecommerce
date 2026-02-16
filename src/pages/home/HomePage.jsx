import './HomePage.css'
import { Header } from '../../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductGrids } from './ProductGrids';

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
     axios.get('/api/products')
    .then((response) => {
      setProducts(response.data);
    });
   
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
