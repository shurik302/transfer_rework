import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './i18n';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />} />
    )
  );

  return (
    <div>
      <Navigation />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
