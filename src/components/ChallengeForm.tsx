import React from 'react';

const ChallengeForm: React.FC = () => {
  return (
    <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Company Name (Being Challenged)
        </label>
        <input
          type="text"
          placeholder="e.g., Example Corp"
          className="mt-2 block w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-base text-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Position / Role
        </label>
        <input
          type="text"
          placeholder="e.g., HR Manager"
          className="mt-2 block w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-base text-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Evidence / Explanation
        </label>
        <textarea
          rows={5}
          placeholder="Explain your challenge and provide supporting info..."
          className="mt-2 block w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-base text-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
      >
        Submit Challenge
      </button>
    </form>
  );
};

export default ChallengeForm;