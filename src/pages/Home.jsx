import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import local SVG assets
import qamissIcon from '../assets/qamiss.svg';
import shoesIcon from '../assets/sport-shose.svg';
import tshirtIcon from '../assets/t-shirt.svg';
import watchIcon from '../assets/watch.svg';
import jacketIcon from '../assets/jacket.svg';
import slacksIcon from '../assets/slacks.svg';
import packageIcon from '../assets/package.svg';
import SuggestionBox from '../components/SuggestionBox';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { name: 'Qamiss', path: '/products?category=Qamiss', icon: qamissIcon },
    { name: 'Sport Shoes', path: '/products?category=Sport+Shoes', icon: shoesIcon },
    { name: 'T-Shirts', path: '/products?category=T-Shirts', icon: tshirtIcon },
    { name: 'Watches', path: '/products?category=Watches', icon: watchIcon },
    { name: 'Jackets', path: '/products?category=Jackets', icon: jacketIcon },
    { name: 'Slacks', path: '/products?category=Slacks', icon: slacksIcon },
    { name: 'Packs (Bundles)', path: '/products?category=Packs', icon: packageIcon },
  ];

  const faqs = [
    {
      question: 'Do you offer delivery across all 58 Wilayas in Algeria?',
      answer: 'Yes! We provide reliable home delivery and desk delivery across all 58 wilayas with payment upon receipt (Cash on Delivery).'
    },
    {
      question: 'What is included in the Special Bundle Packs?',
      answer: 'Our bundle packs combine items like a T-shirt, sport shoes, and a watch together with a special discount (around 7% to 15% off regular prices) to give you a complete outfit match.'
    },
    {
      question: 'Can I exchange or return an item if the size does not fit?',
      answer: 'Yes, you have up to 48 hours after receiving your package to request a size exchange through our customer support.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to DZ Store — Premium Men's Style & Qamiss</h1>
          <p>Discover top-quality traditional Qamiss, modern streetwear, sport shoes, and exclusive discounted bundle packs tailored for Algerian gentlemen.</p>
          <Link to="/products" className="hero-btn">Explore Collection</Link>
        </div>
      </section>

      <div className="section-container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-card">
              <div className="category-icon-wrapper">
                <img src={cat.icon} alt={cat.name} className="category-svg-img" />
              </div>
              <span className="category-name">{cat.name}</span>
              <span className="category-btn">View &rarr;</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button onClick={() => toggleFaq(index)} className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === index ? '-' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          <SuggestionBox />
        </div>
      </div>
    </div>
  );
}