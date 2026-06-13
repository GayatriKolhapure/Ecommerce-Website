import './HomePage.css'
import Header from "../../Components/Header"
import axios from 'axios';
import {useState, useEffect} from 'react';

import ProductGrid from './ProductGrid'
//install axios library by using command "npm install axios@1.8.4"


function HomePage({cart,loadCart}) {

  // fetch('http://localhost:3000/api/products/')
  // .then((response) => {
  //   return response.json()
  // }).then((data) => {
  //     console.log(data)
  //   });

  const [products, setProduct] = useState([]);

  useEffect(() => {
      axios.get("/api/products/")
  .then((response) => {
    setProduct(response.data);
  });
  }, []);


  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" to="/images/ecommerce.png" />
      <Header 
      cart = {cart}
      />
      <div className="home-page">
          <ProductGrid 
          products = {products}
          loadCart = {loadCart}
          />
      </div>
    </>
  )
}

export default HomePage;