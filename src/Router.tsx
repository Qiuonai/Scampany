// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ScampaniesPage from './pages/ScampaniesPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scampanies" element={<ScampaniesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
