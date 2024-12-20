import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import {useDataContext} from './Provider/DataContext'
import { DataProvider } from './Provider/DataContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  </React.StrictMode>
);
