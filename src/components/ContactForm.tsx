import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-xl mx-auto border dark:border-gray-700">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          placeholder="e.g., John Doe"
          className="mt-1 w-full rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 shadow-inner"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 shadow-inner"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="How can we help you?"
          className="mt-1 w-full rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 shadow-inner"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-cyan-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;