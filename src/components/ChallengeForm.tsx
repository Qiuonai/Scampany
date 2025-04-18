import React, { useState } from 'react';

const ChallengeForm = () => {
  const [formData, setFormData] = useState({
    reportId: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Challenge submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <input
        name="reportId"
        type="text"
        placeholder="Scam Report ID"
        className="w-full p-3 border rounded"
        value={formData.reportId}
        onChange={handleChange}
        required
      />
      <textarea
        name="reason"
        placeholder="Reason for challenging the report..."
        className="w-full p-3 border rounded h-32"
        value={formData.reason}
        onChange={handleChange}
        required
      />
      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit Challenge
      </button>
    </form>
  );
};

export default ChallengeForm;

