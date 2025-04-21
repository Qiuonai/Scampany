import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface JobXP {
  id: string;
  company: string;
  position: string;
  experience: string;
  rating: number;
  postedAt?: any;
}

const ITEMS_PER_PAGE = 6;

const JobXPSection = () => {
  const [jobXPs, setJobXPs] = useState<JobXP[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchJobXPs = async () => {
      try {
        const q = query(collection(db, "jobXP"), orderBy("postedAt", "desc"));
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

  const filteredJobXPs = jobXPs.filter((job) =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobXPs.length / ITEMS_PER_PAGE);
  const paginatedJobXPs = filteredJobXPs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset to first page on new search
  };

  const handleSearch = () => {
    // Trigger search when the user clicks the search button
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading Job Experiences...</p>;
  }

  return (
    <section className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">All Job Experiences</h2>

      {/* Search bar with button */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by company or position..."
          className="px-4 py-2 border rounded w-full max-w-md dark:bg-gray-800 dark:text-white focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none transition"
        >
          Search
        </button>
      </div>

      {/* No job experiences */}
      {paginatedJobXPs.length === 0 ? (
        <p className="text-center text-gray-500">No job experiences found.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-4">
            {paginatedJobXPs.map((job) => (
              <div
                key={job.id}
                className="p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{job.position} @ {job.company}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{job.experience}</p>
                <p className="mt-3 text-yellow-400">
                  {"★".repeat(job.rating)}{"☆".repeat(5 - job.rating)}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Previous
            </button>
            <span className="self-center text-gray-700 dark:text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default JobXPSection;


