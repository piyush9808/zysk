import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Hero from '../assets/hero2.png'
const AnalyticsLanding: React.FC = () => {
  return (

    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center  sm:px-6 lg:px-4 pt-20 ">

      <div className="max-w-7xl w-full  text-center ">

        <div className="gap-y-10	max-w-full">
          <div className="flex justify-center space-x-4 text-sm mb-8">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">New feature</span>
            <a href="#" className="text-purple-800 hover:text-gray-900 flex items-center">
              Check out the team dashboard <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <h1 className="lg:text-7xl sm:text-6xl font-medium text-gray-900 leading-tight">
            Beautiful analytics to grow smarter
          </h1>
          <p className="mt-8 text-xl text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl w-full">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">

          <button className="flex items-center justify-center px-8 py-3 border border-gray-300 rounded-lg text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition duration-300">
            <Play className="mr-2 h-5 w-5" /> Demo
          </button>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Sign up
          </button>

        </div>

        <div className="mt-10 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>


        <div className="mt-8 relative">
          <img
            className="w-full rounded-lg shadow-2xl"
            src={Hero}
            alt="Analytics Dashboard"
          />
        </div>

      </div>

    </div>
  );
};

export default AnalyticsLanding;