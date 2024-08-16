// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/apiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched products:', data); // Log the data for debugging

        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          console.error('Fetched data is not an array or is empty:', data);
          setProducts([]); // Set an empty array if data is not valid
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to load products.');
        setProducts([]); // Optionally set an empty array on error
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Top Products</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.length > 0 ? (
          products.map(product => (
            <li key={product.productName}>
              <h2>{product.productName}</h2>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Discount: {product.discount}%</p>
              <p>Availability: {product.availability}</p>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
