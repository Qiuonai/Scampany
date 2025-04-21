import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const JobXPForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    experience: "",
    rating: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value: number) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.company || !formData.position || !formData.experience || formData.rating === 0) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }

    try {
      await addDoc(collection(db, "jobXP"), {
        ...formData,
        postedAt: serverTimestamp(),
      });

      alert("Job Experience submitted successfully!");
      setFormData({
        company: "",
        position: "",
        experience: "",
        rating: 0,
      });
    } catch (error) {
      console.error("Error submitting job experience:", error);
      alert("Something went wrong while submitting.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
    >
      <div className="space-y-4">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Your Position"
          value={formData.position}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
          required
        />
        <textarea
          name="experience"
          placeholder="Describe your experience..."
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
          rows={5}
          required
        />
      </div>

      <div className="flex items-center gap-2 mt-4">
        <label className="text-gray-700 dark:text-gray-200">Rating:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-xl ${
              star <= formData.rating ? "text-yellow-400" : "text-gray-400"
            } transition-all duration-200 ease-in-out transform hover:scale-125`}
            onClick={() => handleRatingChange(star)}
          >
            ★
          </button>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transform transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default JobXPForm;
