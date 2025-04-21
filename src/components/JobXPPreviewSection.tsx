import React, { useEffect, useState } from "react";
import { db } from '../firebase/firebase';
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";

interface JobXP {
  id: string;
  company: string;
  position: string;
  experience: string;
  rating: number;
  postedAt?: any;
}

const JobXPPreviewSection = () => {
  const [jobXPs, setJobXPs] = useState<JobXP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobXPs = async () => {
      try {
        const q = query(collection(db, "jobXP"), orderBy("postedAt", "desc"), limit(3));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as JobXP));
        setJobXPs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JobXP data:", error);
        setLoading(false);
      }
    };

    fetchJobXPs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading Job Experiences...</p>;
  }

  if (jobXPs.length === 0) {
    return <p className="text-center text-gray-500">No job experiences found.</p>;
  }

  return (
    <section className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Recent Job Experiences</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {jobXPs.map((job) => (
          <div
            key={job.id}
            className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {job.position} <span className="text-sm text-gray-500 dark:text-gray-400">@ {job.company}</span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 line-clamp-4">{job.experience}</p>
            <div className="mt-4 flex items-center gap-1 text-yellow-400 text-lg">
              {Array.from({ length: 5 }, (_, i) =>
                i < job.rating ? "★" : "☆"
              ).join("")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobXPPreviewSection;

