// src/components/ScampaniesPreviewSection.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

interface ScamPost {
  id: string;
  company: string;
  title: string;
  summary: string;
  postedAt: any;
}

const ScampaniesPreviewSection: React.FC = () => {
  const [scams, setScams] = useState<ScamPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScamReports = async () => {
      try {
        const q = query(collection(db, "scampanies"), orderBy("postedAt", "desc"), limit(3));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as ScamPost));
        setScams(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching scam reports:", error);
        setLoading(false);
      }
    };

    fetchScamReports();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Recent Scam Reports
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading scam reports...</p>
      ) : scams.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No scam reports found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scams.map((scam) => (
            <Link
            to={`/scampanies/${scam.id}`}
            key={scam.id}
            className="group bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/10 rounded-2xl p-6 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/60 duration-300"
          >
            <h3 className="text-xl font-bold text-red-600 dark:text-blue-400 mb-2 ">
              {scam.company}
            </h3>
            <h4 className="text-md font-medium text-gray-800 dark:text-gray-100 italic mb-3">
              {scam.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">
              {scam.summary}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400 block">
              {scam.postedAt?.toDate?.().toLocaleDateString() || "Unknown Date"}
            </span>
          </Link>
          
          ))}
        </div>
      )}

      <div className="flex justify-end mt-8">
        <Link
          to="/scampanies"
          className="px-6 py-3 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition drop-shadow-md"
        >
          More Scampanies →
        </Link>
      </div>
    </section>
  );
};

export default ScampaniesPreviewSection;




