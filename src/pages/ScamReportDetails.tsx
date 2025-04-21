import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ScamReportDetails: React.FC = () => {
  const { id } = useParams(); // Get the report ID from URL params
  const navigate = useNavigate(); // Use navigate hook for navigation
  const [report, setReport] = useState<any | null>(null); // State for the fetched report
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const docRef = doc(db, 'scampanies', id || ''); // Get the specific report by ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const reportData = docSnap.data();
          setReport(reportData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching report:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    if (id) {
      fetchReport();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="mb-6 px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Back
        </button>

        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Scam Report Details
        </h2>

        {/* Report Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{report.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <strong>Company:</strong> {report.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <strong>Description:</strong> {report.description}
          </p>

          {/* Trust Score */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Trust Score</h4>
            {report.trustScore && Object.entries(report.trustScore).length > 0 ? (
              <ul>
                {Object.entries(report.trustScore).map(([category, score]) => (
                  <li key={category} className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="capitalize">{category.replace(/([A-Z])/g, ' $1')}</strong>:{' '}
                    <span className="text-yellow-500">
                      {'★'.repeat(Number(score))}{'☆'.repeat(5 - Number(score))}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No trust score available</p>
            )}
          </div>

          {/* Proof */}
          {report.proof && (
            <p className="text-xs text-blue-600 dark:text-blue-400 break-words mt-4">
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

          {/* Posted Date */}
          {report.postedAt && (
            <p className="text-xs text-gray-400 mt-4">
              Posted at: {new Date(report.postedAt.toDate()).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScamReportDetails;

