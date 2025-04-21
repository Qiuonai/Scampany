import React from 'react';
import { ShieldAlert, BriefcaseBusiness, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
    title: 'Scampanies',
    desc: 'Expose companies that scam employees, ghost after work, or demand money for jobs.',
  },
  {
    icon: <BriefcaseBusiness className="w-8 h-8 text-blue-400" />,
    title: 'JOBXP',
    desc: 'Share real job experiences — the good, the bad, and the brutally honest.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: 'Challenge Fairly',
    desc: 'Give companies a fair chance to respond and defend themselves with proof.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="text-white">
      <h2 className="text-3xl font-bold text-center mb-12">What is Scampany?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg hover:shadow-red-500/40 hover:scale-[1.02] transition-all"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

