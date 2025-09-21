import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            {description || `This is the placeholder page for the ${title} section. Content will be added here soon.`}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PlaceholderPage;
