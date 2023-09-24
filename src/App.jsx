import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import TestimonialPage from './pages/TestimonialPage';
import SyaratPage from './pages/SyaratPage';
import FaqPage from './pages/FaqPage';
import NavbarComponent from './data/components/NavbarComponent';
import FooterComponent from './data/components/FooterComponent';

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route
          path="/"
          Component={HomePage}
        />
        <Route
          path="/kelas"
          Component={KelasPage}
        />
        <Route
          path="/testimonial"
          Component={TestimonialPage}
        />
        <Route
          path="/syarat"
          Component={SyaratPage}
        />
        <Route
          path="/faq"
          Component={FaqPage}
        />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
