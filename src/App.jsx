import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ServicesPage from './ServicesPage.jsx';
import CaseStudyPage from './CaseStudyPage.jsx';
import AboutPage from './AboutPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/work" element={<CaseStudyPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
