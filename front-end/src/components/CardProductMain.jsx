import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function CardProductMain() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:3001/products');
      setAllProducts(data);
    };
    getProducts();
  }, []);

  return (
    <main>
      { allProducts.map((product) => (
        <ProductCard { ...product } key={ product.id } />
      )) }
    </main>
  );
}

export default CardProductMain;
