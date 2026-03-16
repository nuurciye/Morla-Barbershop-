/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ritual from './pages/Ritual';
import Sanctuary from './pages/Sanctuary';
import Reserve from './pages/Reserve';
import Success from './pages/Success';
import Gallery from './pages/Gallery';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - Routes does not have key in its types but it works for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ritual" element={<Ritual />} />
          <Route path="sanctuary" element={<Sanctuary />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
