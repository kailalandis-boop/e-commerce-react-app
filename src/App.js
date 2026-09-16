import "./index.css";
import Nav from './components/Nav';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" component={<Books />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
