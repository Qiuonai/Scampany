// src/pages/TermsOfUsePage.tsx
import React from "react";

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>

        <p className="mb-4">
          Welcome to <strong>Scampany</strong>. By accessing or using our platform, you agree to comply with and be bound by the following terms. Please review them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Use of the Platform</h2>
        <p className="mb-4">
          You agree to use Scampany responsibly and ethically. You may not:
          <ul className="list-disc ml-6 mt-2">
            <li>Post false or misleading scam reports or job experiences</li>
            <li>Harass, threaten, or defame others</li>
            <li>Use the platform for illegal purposes</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. User Content</h2>
        <p className="mb-4">
          By submitting content (like scam reports or job experiences), you grant Scampany a non-exclusive, royalty-free license to display and distribute it on our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
        <p className="mb-4">
          All content on Scampany, including logos, text, and graphics, is the property of Scampany unless otherwise stated and is protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate access to the platform for any user who violates these terms or engages in harmful behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Scampany is not liable for any damages arising from the use or misuse of information on the platform. All content is provided "as-is" without warranties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms of Use periodically. Continued use of the platform means you accept the updated terms.
        </p>

        <p className="text-sm mt-10 text-gray-500">
          Last updated: April 25, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
