import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const PostScamForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    proof: '',
    tag: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'scampanies'), {
        ...formData,
        postedAt: serverTimestamp(),
      });
      alert('Scam report submitted successfully!');
      setFormData({
        title: '',
        description: '',
        company: '',
        proof: '',
        tag: '',
      });
    } catch (err) {
      console.error('Error adding document:', err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="w-full max-w-2xl space-y-8 p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
          Report a Scam Company
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter the company name"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Short title of the incident"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Describe your experience in detail"
            ></textarea>
          </div>

          <div>
            <label htmlFor="proof" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Proof (link or description)
            </label>
            <input
              type="text"
              name="proof"
              value={formData.proof}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Link or short description"
            />
          </div>

          <div>
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tag (e.g., Internship Scam, Payment Fraud)
            </label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., Internship Scam"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostScamForm;
