
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InstallationDetails from './pages/InstallationDetails';
import SmartFeatures from './pages/SmartFeatures';
import AboutService from './pages/AboutService';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation-details" element={<InstallationDetails />} />
            <Route path="/smart-features" element={<SmartFeatures />} />
            <Route path="/about-service" element={<AboutService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
