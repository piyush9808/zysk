import React from 'react';

const StartFreeTrial: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Start your free trial
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Get started
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-md text-lg font-semibold border border-gray-300 hover:bg-gray-50 transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartFreeTrial;