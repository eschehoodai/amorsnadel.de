import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Booking } from './pages/Booking';
import { PermanentMakeup } from './pages/PermanentMakeup';
import { Piercing } from './pages/Piercing';
import { Courses } from './pages/Courses';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { SocialBooking } from './pages/SocialBooking';

// Scroll to Top on Page navigation
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const AppContent: FC = () => {
  const location = useLocation();
  const isSocialBooking = location.pathname === '/termin';

  return (
    <div className="flex flex-col min-h-screen text-soft-white font-sans antialiased overflow-x-hidden" id="app-container">
      {/* Page-wide marble backdrop (see .marble-backdrop in index.css) */}
      <div className="marble-backdrop" aria-hidden="true" />

      {/* Navigation Header */}
      {!isSocialBooking && <Header />}

      {/* Main Content Areas */}
      <main className="flex-grow" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/permanent-makeup" element={<PermanentMakeup />} />
          <Route path="/piercing" element={<Piercing />} />
          <Route path="/kurse" element={<Courses />} />
          <Route path="/buchung" element={<Booking />} />
          <Route path="/termin" element={<SocialBooking />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      {/* Footer info layout */}
      {!isSocialBooking && <Footer />}

      {/* Floating WhatsApp Hybrid Contact Widget */}
      {!isSocialBooking && <WhatsAppWidget />}
      
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
