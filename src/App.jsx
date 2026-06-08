import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
