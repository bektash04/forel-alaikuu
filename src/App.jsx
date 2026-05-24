import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Delivery from './pages/Delivery';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import { translations } from './data/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('ru');
  const t = translations[lang];

  const pageProps = { t, setCurrentPage };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      case 'about':
        return <About {...pageProps} />;
      case 'products':
        return <Products {...pageProps} />;
      case 'gallery':
        return <Gallery {...pageProps} />;
      case 'delivery':
        return <Delivery {...pageProps} />;
      case 'reviews':
        return <Reviews {...pageProps} />;
      case 'contacts':
        return <Contacts {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <main>{renderPage()}</main>
      <Footer t={t} setCurrentPage={setCurrentPage} />
      <FloatingActions />
    </div>
  );
}
