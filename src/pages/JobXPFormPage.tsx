// src/pages/JobXPPage.tsx
import React from "react";
import JobXPForm from "../components/JobXPForm";
import JobXPSection from "../components/JobXPSection"; // 👈 New component

const JobXPPage: React.FC = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Share Your Job Experience
          </h2>
          <JobXPForm />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            All Job Experiences
          </h2>
          <JobXPSection /> {/* 👈 NEW section with search and pagination */}
        </section>
      </div>
    </main>
  );
};

export default JobXPPage;


