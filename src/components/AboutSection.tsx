import React from 'react';
import { ShieldAlert, BriefcaseBusiness, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Features data
const features = [
  {
    icon: <ShieldAlert className="w-10 h-10 text-red-500" />,
    title: 'Scampanies',
    desc: 'Expose companies that scam employees, ghost after work, or demand money for jobs.',
  },
  {
    icon: <BriefcaseBusiness className="w-10 h-10 text-blue-400" />,
    title: 'JOBXP',
    desc: 'Share real job experiences — the good, the bad, and the brutally honest.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
    title: 'Challenge Fairly',
    desc: 'Give companies a fair chance to respond and defend themselves with proof.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-white dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8 md:px-16">
        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Scampany
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-sans leading-relaxed">
            Scampany is a platform built to expose scam companies, share real job experiences, and protect future job seekers.
            Our mission is to build transparency in the job market and empower professionals to make informed choices.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-200/30 dark:border-white/10 rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;




