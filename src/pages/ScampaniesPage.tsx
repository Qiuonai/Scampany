// src/pages/ScampaniesPage.tsx

import React from "react";

interface ScamCompany {
  id: number;
  name: string;
  description: string;
  reportedBy: string;
  dateReported: string;
}

const dummyScampanies: ScamCompany[] = [
  {
    id: 1,
    name: "FakeTech Solutions",
    description: "Did not pay interns and used false job postings.",
    reportedBy: "anonymous123",
    dateReported: "2025-04-10",
  },
  {
    id: 2,
    name: "ShadyRecruiters Inc.",
    description: "Collected money for fake job offers.",
    reportedBy: "realuser45",
    dateReported: "2025-03-22",
  },
];

const ScampaniesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        🕵️‍♂️ Reported Scam Companies
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyScampanies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-red-600">{company.name}</h2>
            <p className="text-gray-700 my-2">{company.description}</p>
            <p className="text-sm text-gray-500">
              Reported by: {company.reportedBy} on {company.dateReported}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScampaniesPage;
