import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
/* PAGES */
import Home from './pages/Home.js';
import Map from './pages/Map.js';
import Travels from './pages/Travels.js';
import Routes from './pages/Routes.js';
import Account from './pages/Account.js';
import Help from './pages/Help.js';
import Rules from './pages/Rules.js';
import InfoAboutUs from './pages/InfoAboutUs.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import Authorisation from './pages/Authorisation.js';
import Registration from './pages/Registration.js';
import SearchTickets from './pages/SearchTickets.js';
/* COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';
import OnlineHelp from './components/OnlineHelp';
import './i18n';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/routes" element={<Routes />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<Help />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/info-about-us" element={<InfoAboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Authorisation" element={<Authorisation />} />
        <Route path="/SearchTickets" element={<SearchTickets />} />
      </>
    )
  );

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <OnlineHelp />
      <Footer />
    </div>
  );
}

export default App;
