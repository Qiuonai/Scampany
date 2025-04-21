import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          📬 Get in Touch
        </h1>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;