import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CurrentWeather from './pages/CurrentWeather';
import HistoricalWeather from './pages/HistoricalWeather';
import Dashboard from './pages/Dashboard';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/current" element={<CurrentWeather />} />
            <Route path="/history" element={<HistoricalWeather />} />
          </Routes>
        </main>
        <footer className="footer-glass">
          <p>© 2026 Atmos Weather App. Advanced Aesthetic Design.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
