import React from 'react';
import { Inbox, Zap, BarChart, MessageCircle, Cog, Users } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center md:items-start md:text-left">
    <Icon className="w-8 h-8 text-purple-600 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Inbox,
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: Zap,
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
      icon: BarChart,
      title: "Manage your team with reports",
      description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
    },
    {
      icon: MessageCircle,
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },
    {
      icon: Cog,
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },
    {
      icon: Users,
      title: "Our people make the difference",
      description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Features</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Analytics that feels like it's from the future
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;