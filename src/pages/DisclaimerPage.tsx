// src/pages/DisclaimerPage.tsx
import React from "react";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>

        <p className="mb-4">
          The information provided by <strong>Scampany</strong> is for general informational purposes only. All information on the platform is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. No Professional Advice</h2>
        <p className="mb-4">
          The content on Scampany does not constitute legal, financial, or professional advice. Users should consult a qualified professional before making decisions based on content found on this site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. User-Generated Content</h2>
        <p className="mb-4">
          Scampany allows users to post scam reports and job experiences. We do not independently verify the accuracy of user-generated content. The views and opinions expressed are those of the individual authors and do not necessarily reflect the views of Scampany.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. External Links</h2>
        <p className="mb-4">
          Scampany may contain links to external websites. We do not control or endorse the content or policies of third-party websites and are not responsible for any information or practices of those sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          Under no circumstance shall Scampany be held liable for any loss or damage incurred as a result of the use of the platform or reliance on any information provided.
        </p>

        <p className="text-sm mt-10 text-gray-500">
          Last updated: April 25, 2025
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
