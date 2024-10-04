import React from 'react';
import { Zap, Box, Feather, Circle, Globe, Sun } from 'lucide-react';

const CompanyLogos: React.FC = () => {
  const companies = [
    { name: 'Boltshift', icon: Zap, color: 'text-blue-500' },
    { name: 'Lightbox', icon: Box, color: 'text-gray-800' },
    { name: 'FeatherDev', icon: Feather, color: 'text-green-500' },
    { name: 'Spherule', icon: Circle, color: 'text-purple-500' },
    { name: 'GlobalBank', icon: Globe, color: 'text-blue-600' },
    { name: 'Nietzsche', icon: Sun, color: 'text-orange-500' },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 pt-36">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-center text-gray-900  font-medium mb-8 text-2xl sm:text-md">
          Join 4,000+ companies already growing
        </h2>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 lg:grid-cols-6 xl:px-24 ">
          {companies.map((company) => (
            <div key={company.name} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <company.icon className={`xl:h-22 xl:w-22 sm:h-10 sm:w-10 ${company.color}`} />
                <span className={`xl:text-xl sm:text-sm  font-semibold ${company.color}`}>{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;