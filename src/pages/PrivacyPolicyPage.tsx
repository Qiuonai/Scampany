// src/pages/PrivacyPolicyPage.tsx
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Scampany</strong>, we value your privacy. This Privacy Policy outlines how your information is collected, used, and protected when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We do not collect personal information (like email addresses) when you submit a form, register, or interact with our platform. </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          Your information helps us:
          <ul className="list-disc ml-6 mt-2">
            <li>Display scam reports and job experiences</li>
            <li>Respond to challenges or inquiries</li>
            <li>Improve the platform and user experience</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your information. 
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We use modern security practices  to store and protect your data. However, no platform is completely immune to risks, and we encourage responsible usage.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy from time to time. When we do, we’ll notify users by updating the date on this page.
        </p>

        <p className="text-sm mt-10 text-gray-500">
          Last updated: April 25, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
