import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
import FeatureSection from '../components/FeatureSection';
import IntegrationSection from '../components/IntegrationSection';
import CTASection from '../components/CTASection';

interface HomePageProps {
  navigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <main>
      <HeroSection navigate={navigate} />
      <ValuePropositionSection />
      <FeatureSection navigate={navigate} />
      <IntegrationSection />
      <CTASection navigate={navigate} />
    </main>
  );
};

export default HomePage;
