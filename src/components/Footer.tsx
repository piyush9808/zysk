import React from 'react';
import bigLogo from '../assets/biglogo.png'


const footerSections = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
  },
  {
    title: 'Resources',
    items: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
  },
  {
    title: 'Use cases',
    items: ['Startups', 'Enterprise', 'Government', 'SaaS centre', 'Marketplaces', 'Ecommerce'],
  },
  {
    title: 'Social',
    items: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble'],
  },
  {
    title: 'Legal',
    items: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 px-4 sm:px-6 lg:px-20">
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                      {item}
                      {item === 'Solutions' && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                          New
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      {/* Mobile Footer */}
      <div className="lg:hidden">
        <div className="space-y-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                      {item}
                      {item === 'Solutions' && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                          New
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Common Footer Bottom */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <img src={bigLogo} alt="" />
          </div>
          <div className="flex items-center">
            <span className="text-sm">© 2077 Untitled UI. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;