// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScampaniesPage from './pages/ScampaniesPage';
import PostScamPage from './pages/PostScamPage';
import JobXPPage from './pages/JobXPPage';
import ChallengePage from './pages/ChallengePage';
import ContactPage from './pages/ContactPage';
import ScamReportDetails from './pages/ScamReportDetails';
import JobXPFormPage from './pages/JobXPFormPage';
import DonationBanner from './components/DonationBanner';
import DonatePage from './pages/DonatePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
  return (
    <Router>
      <DonationBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scampanies" element={<ScampaniesPage />} />
        <Route path="/post-scam" element={<PostScamPage />} />
        <Route path="/job-xp" element={<JobXPPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/scampanies/:id" element={<ScamReportDetails />} />
        <Route path="/jobxp" element={<JobXPFormPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


