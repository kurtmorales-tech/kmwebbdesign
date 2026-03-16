import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-slate-50">
        <h1 className="text-9xl font-extrabold text-brand-200">404</h1>
        <h2 className="text-4xl font-bold text-slate-900 mt-4">Page Not Found</h2>
        <p className="text-slate-500 mt-4 mb-8 text-center max-w-md">
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default NotFound;