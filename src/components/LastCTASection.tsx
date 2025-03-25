import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const LastCTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
          >
            Let's Make This Real – Apply Now & Get Expert Guidance!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Applying to study in the U.S. can feel overwhelming—but you're not doing this alone.
            At INTERLINK, we personally guide every student through the process, ensuring you have everything you need to succeed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm mb-8"
          >
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Not sure which program is best for you? We'll help you decide.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Need help with visas and documents? We'll walk you through it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#064088] font-bold mr-2">✅</span>
                <span className="text-gray-700">Want to plan your journey step by step? We're here every step of the way.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 font-medium mb-8"
          >
            Your future starts with one simple step: Fill out the application, and we'll guide you from there!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button
              className="bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LastCTASection;
