// FAQSection.tsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Scampany?',
    answer: 'Scampany is a platform to expose scam companies, share authentic job experiences, and help future job seekers make informed decisions.',
  },
  {
    question: 'Can I post anonymously?',
    answer: 'Yes, users have the option to remain anonymous when posting scams or job experiences.',
  },
  {
    question: 'How do you verify scam claims?',
    answer: 'All posts go through a moderation process. Companies can challenge posts and provide proof, ensuring a fair process.',
  },
  {
    question: 'Is Scampany free to use?',
    answer: 'Absolutely! Our mission is to bring transparency to the job market, and we do that by keeping the platform free.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 transition hover:shadow-md cursor-pointer bg-white dark:bg-gray-900"
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {faq.question}
              </h3>
              <span className="text-xl text-blue-500 dark:text-blue-400">
                {openIndex === idx ? '-' : '+'}
              </span>
            </div>
            {openIndex === idx && (
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

