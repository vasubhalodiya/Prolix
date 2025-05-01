import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import Navbar from './assets/components/Navbar/Navbar';
import Claude from './assets/components/pages/Claude';
import API from './assets/components/pages/API';
import Solution from './assets/components/pages/Solution';
import Footer from './assets/components/Footer/Footer';
import './assets/components/Navbar/navbar.css';


function App() {
  return (
    <>
    <div className="container">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/claude" element={<Claude />} />
            <Route path="/api" element={<API />} />
            <Route path="/solution" element={<Solution />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
