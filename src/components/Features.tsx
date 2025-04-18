import React from 'react';
import { ShieldCheck, Eye, Users } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose Scampany?
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck className="mx-auto text-blue-600 w-10 h-10" />
            <h3 className="text-xl font-semibold mt-4">Trust & Transparency</h3>
            <p className="mt-2 text-gray-600">We expose scam companies and protect job seekers globally.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Eye className="mx-auto text-blue-600 w-10 h-10" />
            <h3 className="text-xl font-semibold mt-4">Community Driven</h3>
            <p className="mt-2 text-gray-600">Reviews and experiences by real people, verified by our moderators.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Users className="mx-auto text-blue-600 w-10 h-10" />
            <h3 className="text-xl font-semibold mt-4">Fair Voice for All</h3>
            <p className="mt-2 text-gray-600">Companies can respond and challenge reports with evidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
