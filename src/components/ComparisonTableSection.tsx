import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, DollarSign } from 'lucide-react';

const ComparisonTableSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12"
        >
          Why INTERLINK? See the Difference at a Glance
        </motion.h2>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <span className="text-lg font-bold text-gray-700">Feature</span>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#064088]">INTERLINK</span>
                    <Check className="ml-2 text-green-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Free Programs</span>
                    <X className="ml-2 text-red-500 w-5 h-5" />
                  </div>
                </th>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200 w-1/4">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-700">Large Competitors</span>
                    <DollarSign className="ml-2 text-yellow-500 w-5 h-5" />
                  </div>
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {/* Speaking & Fluency */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">Speaking & Fluency</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Intensive speaking practice with native speakers</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>Limited speaking practice, often with non-native speakers</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Good speaking practice but less personalized</span>
                  </div>
                </td>
              </tr>
              
              {/* Personalized Attention */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">Personalized Attention</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Small classes (8-15 students) with individual feedback</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>Large classes with minimal individual attention</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>Medium to large classes with limited feedback</span>
                  </div>
                </td>
              </tr>
              
              {/* University Preparation */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">University Preparation</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Academic skills, research methods, and university culture</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>Basic language only, no academic preparation</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Some academic preparation but less comprehensive</span>
                  </div>
                </td>
              </tr>
              
              {/* University Admission */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">University Admission</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Direct admission to partner universities without TOEFL/IELTS</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>No university pathways or admission support</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Some university pathways but fewer partner institutions</span>
                  </div>
                </td>
              </tr>
              
              {/* Cultural Experience */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">Cultural Experience</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Weekly cultural activities and community integration</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>No organized cultural activities or immersion</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Some cultural activities but less community integration</span>
                  </div>
                </td>
              </tr>
              
              {/* Engaging Classes */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">Engaging Classes</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Interactive, project-based learning with real-world applications</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>Repetitive exercises with limited engagement</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Structured but less creative learning environment</span>
                  </div>
                </td>
              </tr>
              
              {/* Cost */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <span className="font-medium">Cost</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Moderate tuition with high value for investment</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <Check className="text-green-500 w-5 h-5 mr-2" />
                    <span>Free or very low cost but limited quality</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <X className="text-red-500 w-5 h-5 mr-2" />
                    <span>High tuition with similar or less effective results</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Final Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-[#064088]">
            INTERLINK offers the perfect balance of quality, personalization, and value
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
