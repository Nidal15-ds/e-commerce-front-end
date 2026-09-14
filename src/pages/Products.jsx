import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './Products.css';

export default function Products() {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryParam = searchParams.get('category') || 'All';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('default');

  // Exact 7 categories matching your home page cards
  const validCategories = ['Qamiss', 'Sport Shoes', 'T-Shirts', 'Watches', 'Jackets', 'Slacks', 'Packs (Bundles)'];

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Filter products to only include those belonging to your store's categories
  let storeProducts = products.filter((p) => validCategories.includes(p.category));

  // Filter by search term and selected category dropdown
  let filteredProducts = storeProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sorting logic
  if (sortBy === 'low-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    setSelectedCategory(val);
    if (val === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  // Group filtered products strictly by the valid categories when viewing "All"
  const groupedProducts = {};
  if (selectedCategory === 'All' && !searchTerm) {
    validCategories.forEach((catName) => {
      const catItems = filteredProducts.filter((p) => p.category === catName);
      if (catItems.length > 0) {
        groupedProducts[catName] = catItems;
      }
    });
  }

  return (
    <div className="products-page">
      <h1 className="page-header">DZ Store Catalog</h1>

      <div className="filters-toolbar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-group">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="filter-select"
          >
            <option value="All">All Categories</option>
            {validCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="default">Sort by: Featured</option>
            <option value="low-high">Price: Low to High (DZD)</option>
            <option value="high-low">Price: High to Low (DZD)</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        selectedCategory === 'All' && !searchTerm ? (
          // Render grouped sections with clean titles for your core categories only
          Object.keys(groupedProducts).map((catName) => (
            <div key={catName} className="category-section" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.25rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                {catName}
              </h2>
              <div className="products-grid">
                {groupedProducts[catName].map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-img-container">
                      <img src={product.image} alt={product.title} className="product-img" />
                    </div>
                    <div className="product-info">
                      <span className="product-category">{product.category}</span>
                      <h3 className="product-title">{product.title}</h3>
                      <div className="product-price">{product.price.toLocaleString()} DZD</div>
                      <div className="product-actions">
                        <Link to={`/products/${product.id}`} className="details-btn">View</Link>
                        <button onClick={() => addToCart(product)} className="add-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Render flat grid when a specific category is chosen or search is active
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-container">
                  <img src={product.image} alt={product.title} className="product-img" />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-price">{product.price.toLocaleString()} DZD</div>
                  <div className="product-actions">
                    <Link to={`/products/${product.id}`} className="details-btn">View</Link>
                    <button onClick={() => addToCart(product)} className="add-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}