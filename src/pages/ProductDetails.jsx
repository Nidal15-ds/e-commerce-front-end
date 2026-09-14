import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find product by id matching the dynamic route parameter
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="details-page">
        <div className="not-found">
          <h2>Product not found!</h2>
          <Link to="/products" className="back-link">&larr; Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <Link to="/products" className="back-link">&larr; Back to Products</Link>
      
      <div className="details-container">
        <div className="details-img-wrapper">
          <img src={product.image} alt={product.title} className="details-img" />
        </div>
        
        <div className="details-content">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>
          <div className="details-rating">⭐ {product.rating} / 5.0 Rating</div>
          <div className="details-price">${product.price.toFixed(2)}</div>
          <p className="details-desc">{product.description}</p>
          
          <button onClick={() => addToCart(product)} className="details-add-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}