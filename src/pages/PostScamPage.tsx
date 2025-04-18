// Example: src/pages/PostScamPage.tsx

import React from 'react';
import PostScamForm from '../components/PostScamForm';

const PostScamPage: React.FC = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          🚨 Report a Scam
        </h1>
        <PostScamForm />
      </div>
    </main>
  );
};

export default PostScamPage;



