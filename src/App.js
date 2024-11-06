import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home'; // Trang Home mặc định
import Index from './components/Index';
import Shop from './components/shop';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Checkout from './components/checkout';
import Contact from './components/contact';
import ShopDetails from './components/shop-details';
import ShoppingCart from './components/shopping-cart';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Trang Home mặc định */}
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/index" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
