import React from 'react';

const PostScamForm = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🚨 Report a Scam</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Company Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Scam Description</label>
          <textarea
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the incident"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Proof (optional)</label>
          <input type="file" className="w-full" />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          Submit Scam Report
        </button>
      </form>
    </section>
  );
};

export default PostScamForm;
