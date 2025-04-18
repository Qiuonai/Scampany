import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ScampaniesPage from './pages/ScampaniesPage';
import PostScamPage from './pages/PostScamPage';
import JobXPPage from './pages/JobXPPage';
import ChallengePage from './pages/ChallengePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scampanies" element={<ScampaniesPage />} />
        <Route path="/post-scam" element={<PostScamPage />} />
        <Route path="/job-xp" element={<JobXPPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;


