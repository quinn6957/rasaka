import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Home } from './components/Home';

// Custom redirect config
const redirects: Record<string, string> = {
    '/old-privacy': '/privacy',
    '//www.rasaka.org/privacy-policy': '/privacy',
    'vmc_request': 'https://forms.office.com/r/7EPBLHtvXw',
    // Add more redirects as needed
};

function RedirectHandler() {
    const location = useLocation();
    const target = redirects[location.pathname];
    if (target) {
        if (target.startsWith('http')) {
            window.location.href = target;
            return null;
        }
        return <Navigate to={target} replace />;
    }
    return null;
}

const AppRouter: React.FC = () => (
    <Router>
        <RedirectHandler />
        <Routes>
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsOfUse />} />"
        </Routes>
    </Router>
);

export default AppRouter;