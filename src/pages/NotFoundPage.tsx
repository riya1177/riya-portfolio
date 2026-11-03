import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#070B14] px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="font-mono text-7xl text-[#4DB8FF] font-bold block drop-shadow-[0_0_20px_rgba(22,139,255,0.4)]">
          404
        </span>
        <h1 className="text-2xl font-bold text-[#F5F8FF]">Page not found</h1>
        <p className="text-sm text-[#A5B4CC] leading-relaxed">
          The page you are looking for doesn't exist or has moved. Return to the homepage.
        </p>
        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
