import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { books } from './data';
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  const [cart, setCart] = useState([]);

  function totals() {
    const subtotal = cart.reduce((acc, item) => acc + (item.salePrice || item.originalPrice) * item.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id ? {...item, quantity: +quantity} : item));
  }
  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id));
  }
  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => counter += item.quantity);
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} totals={totals()} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;