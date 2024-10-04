import React from 'react';
import { Zap } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-2 rounded-full">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <span className="ml-2 text-green-600 font-semibold self-center">Sisyphus</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          We've been using Untitled to kick start every new project and can't imagine working without it.
        </h2>
        <div className="mt-8">
          <img
            className="w-12 h-12 rounded-full mx-auto mb-4"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Candice Wu"
          />
          <div className="font-medium text-gray-900">Candice Wu</div>
          <div className="text-gray-500">Product Manager, Sisyphus</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;