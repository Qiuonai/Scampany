import React, { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const ScampaniesPage: React.FC = () => {
  const [scamReports, setScamReports] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const reportsPerPage = 6;

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const q = query(collection(db, 'scampanies'), orderBy('postedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const reports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setScamReports(reports);
      } catch (error) {
        console.error('Error fetching scam reports:', error);
      }
    };

    fetchReports();
  }, []);

  const filteredReports = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return scamReports.filter((report) =>
      report.company?.toLowerCase().includes(lowerSearch) ||
      report.title?.toLowerCase().includes(lowerSearch) ||
      report.description?.toLowerCase().includes(lowerSearch)
    );
  }, [scamReports, searchTerm]);

  const sortedReports = useMemo(() => {
    return [...filteredReports].sort((a, b) => {
      const dateA = new Date(a.postedAt?.toDate?.() || 0).getTime();
      const dateB = new Date(b.postedAt?.toDate?.() || 0).getTime();
      return sortOption === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [filteredReports, sortOption]);

  const currentReports = useMemo(() => {
    const indexOfLastPost = currentPage * reportsPerPage;
    const indexOfFirstPost = indexOfLastPost - reportsPerPage;
    return sortedReports.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, sortedReports]);

  const totalPages = Math.ceil(sortedReports.length / reportsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = () => {
    setSearchTerm(searchInput.trim());
    setCurrentPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Scam Reports
        </h2>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="flex w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Search by company or keyword..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-md transition duration-300"
            >
              Search
            </button>
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full sm:w-auto bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md shadow-sm transition duration-300"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Reports */}
<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {currentReports.length > 0 ? (
    currentReports.map((report) => (
      <Link key={report.id} to={`/scampanies/${report.id}`}>
        <div className="rounded-xl border border-gray-300 dark:border-gray-700 p-4 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{report.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
            <strong>Company:</strong> {report.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {report.description.length > 100
              ? `${report.description.slice(0, 100)}...`
              : report.description}
          </p>
          {report.proof && (
            <p className="text-xs text-blue-600 dark:text-blue-400 break-words">
              <strong>Proof:</strong>{' '}
              {report.proof.startsWith('http') ? (
                <a href={report.proof} target="_blank" rel="noopener noreferrer" className="underline">
                  {report.proof}
                </a>
              ) : (
                report.proof
              )}
            </p>
          )}
          {report.postedAt && (
            <p className="text-xs text-gray-400 mt-2">
              {new Date(report.postedAt.toDate()).toLocaleString()}
            </p>
          )}
        </div>
      </Link>
    ))
  ) : (
    <div className="col-span-full text-center mt-10 text-gray-600 dark:text-gray-400">
      <p className="text-xl font-semibold mb-2">😕 No scam reports found.</p>
      <p className="text-sm">Try a different keyword or clear the search.</p>
    </div>
  )}
</div>


        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              } hover:bg-indigo-500 hover:text-white transform hover:scale-105`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScampaniesPage;

