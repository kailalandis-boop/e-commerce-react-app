import "./index.css";
import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from '../src/data.js';
import BookInfo from './pages/BookInfo.jsx';
import Cart from "./pages/Cart.jsx";

function App() {  
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
    console.log(cart)
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
      )
    )
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} cart={cart} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
