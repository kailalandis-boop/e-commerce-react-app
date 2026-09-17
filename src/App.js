import "./index.css";
import Nav from './components/Nav';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from '../src/data.js';
import BookInfo from './pages/BookInfo.jsx';

function App() {  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books:id" element={<BookInfo books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
