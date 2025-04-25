// src/pages/DonatePage.tsx
import React from "react";

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Support Scampany 💛</h1>
        <p className="text-lg mb-8">
          Your donation helps us maintain and improve the platform, purchase a custom domain, and build more features for the community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://www.buymeacoffee.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 text-black font-semibold py-4 rounded shadow-lg hover:bg-yellow-400 transition text-lg"
          >
            ☕ Buy Me A Coffee
          </a>

          <a
            href="https://ko-fi.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white font-semibold py-4 rounded shadow-lg hover:bg-pink-600 transition text-lg"
          >
            ❤️ Support on Ko-fi
          </a>

          <a
            href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-4 rounded shadow-lg hover:bg-blue-700 transition text-lg"
          >
            💸 Donate via PayPal
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Thank you for being part of our mission to fight scams and support jobseekers.
        </p>
      </div>
    </div>
  );
};

export default DonatePage;

