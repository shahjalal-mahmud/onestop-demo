import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutOverview from '../components/AboutOverview';
import KeyHighlights from '../components/KeyHighlights';
import LocationSection from '../components/LocationSection';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutOverview />
      <KeyHighlights />
      <LocationSection />
      <CallToAction />
    </div>
  );
};

export default Home;