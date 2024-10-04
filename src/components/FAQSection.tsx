import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of the current billing cycle."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Refunds are provided for annual plans on a prorated basis."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to your invoices, such as your PO number or additional details for your records."
  },
  {
    question: "How does billing work?",
    answer: "We offer both monthly and annual billing. For monthly plans, you'll be billed on the same date each month. For annual plans, you'll be billed once a year on the anniversary of your signup date."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email in your account settings. Be sure to verify your new email address after making the change."
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{item.answer}</p>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Everything you need to know about the product and billing.
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-center mb-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member 1" className="w-8 h-8 rounded-full -mr-2" />
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member 2" className="w-8 h-8 rounded-full -mr-2" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Team member 3" className="w-8 h-8 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;