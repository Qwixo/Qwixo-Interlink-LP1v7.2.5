import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const StudentJourneyComparisonSection = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title - Updated with "Visual" */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-16"
        >
          Student Journey Comparison Visual
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Student A Column - Now the struggling student (LEFT SIDE) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-red-600">A</span>
              </div>
              <h3 className="text-2xl font-bold text-[#064088]">
                Student without Preparation
              </h3>
            </div>
            
            {/* Academic Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Academic Skills</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Struggles with academic writing and research requirements</p>
              </div>
            </div>
            
            {/* Participating in Class */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Participating in Class</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Too nervous to speak up or ask questions when confused</p>
              </div>
            </div>
            
            {/* Understanding Professors & Assignments */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Understanding Professors & Assignments</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Misses key information in lectures and assignment instructions</p>
              </div>
            </div>
            
            {/* Learning Strategies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Learning Strategies</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Lacks effective study habits for U.S. university environment</p>
              </div>
            </div>
            
            {/* Graduation Rate */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Graduation Rate</h4>
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">At risk of dropping out or extending degree timeline</p>
              </div>
            </div>
            
            {/* Final Status */}
            <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-bold text-red-700 text-center">
                Overwhelmed, unprepared, and possibly failing
              </p>
            </div>
          </motion.div>
          
          {/* Student B Column - Now the INTERLINK student (RIGHT SIDE) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-green-600">B</span>
              </div>
              <h3 className="text-2xl font-bold text-[#064088]">
                Attended INTERLINK
              </h3>
            </div>
            
            {/* Academic Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Academic Skills</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Learns academic writing, research, and presentation skills</p>
              </div>
            </div>
            
            {/* Participating in Class */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Participating in Class</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Confident speaking in class discussions and asking questions</p>
              </div>
            </div>
            
            {/* Understanding Professors & Assignments */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Understanding Professors & Assignments</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Understands lectures and assignment requirements clearly</p>
              </div>
            </div>
            
            {/* Learning Strategies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Learning Strategies</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Has effective study habits and time management skills</p>
              </div>
            </div>
            
            {/* Graduation Rate */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#064088] mb-2">Graduation Rate</h4>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">High probability of completing degree on time</p>
              </div>
            </div>
            
            {/* Final Status */}
            <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-700 text-center">
                Confident and prepared for university
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentJourneyComparisonSection;
