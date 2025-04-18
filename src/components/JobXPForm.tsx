import React, { useState } from 'react';

const JobXPForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Job Experience:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <input
        name="company"
        type="text"
        placeholder="Company Name"
        className="w-full p-3 border rounded"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        name="position"
        type="text"
        placeholder="Your Position"
        className="w-full p-3 border rounded"
        value={formData.position}
        onChange={handleChange}
        required
      />
      <textarea
        name="experience"
        placeholder="Describe your experience..."
        className="w-full p-3 border rounded h-32"
        value={formData.experience}
        onChange={handleChange}
        required
      />
      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default JobXPForm;

