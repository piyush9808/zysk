import React from 'react';
import { Inbox, Zap, BarChart } from 'lucide-react';
import Features from '../assets/features.png'

const FeatureItem: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center max-w-fit px-10">
    <Icon className="w-6 h-6 text-purple-600 mb-2" />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
      Learn more &rarr;
    </a>
  </div>
);

const AdvancedFeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className='w-full flex justify-center'>
            <h2 className="text-sm font-semibold text-purple-800 uppercase tracking-wide bg-purple-200 w-fit px-2 py-1 rounded-xl">Features</h2>
          </div>
          <h3 className="mt-2 text-3xl leading-8 font-900 tracking-tight text-gray-900 sm:text-4xl">
            Cutting-edge features for advanced analytics
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="relative">
          <img
            src={Features}
            alt="Analytics Dashboard"
            className="w-full rounded-lg"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureItem
            icon={Inbox}
            title="Share team inboxes"
            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          />
          <FeatureItem
            icon={Zap}
            title="Deliver instant answers"
            description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          />
          <FeatureItem
            icon={BarChart}
            title="Manage your team with reports"
            description="Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;