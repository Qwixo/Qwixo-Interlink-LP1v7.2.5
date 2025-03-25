import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { FaHandshake, FaChevronDown } from 'react-icons/fa';
import HowInterlinkHelpsSection from '../components/HowInterlinkHelpsSection';
import SpeakingEnglishPaysOffSection from '../components/SpeakingEnglishPaysOffSection';
import ComparisonTableSection from '../components/ComparisonTableSection';
import StudyOptionsSection from '../components/StudyOptionsSection';
import TimelineSection from '../components/TimelineSection';
import TestimonialsSection from '../components/TestimonialsSection';
{/*import OnTheFenceSection from '../components/OnTheFenceSection';*/}
import IsRightForYouSection from '../components/IsRightForYouSection';
import FAQSection from '../components/FAQSection';
import LastCTASection from '../components/LastCTASection';
import StudentJourneyComparisonSection from '../components/StudentJourneyComparisonSection';
import ScrollToTop from '../components/ScrollToTop';

const GuidePage = () => {
  const [isGuideExpanded, setIsGuideExpanded] = useState(false);

  const toggleGuideExpansion = () => {
    setIsGuideExpanded(!isGuideExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      {/* Section 1: Thank You Confirmation - Updated Title with en dash */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
              >
                Get Ready – Your Guide is on the Way!
              </motion.h1>
              
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-normal text-[#3a6ea5] mb-6"
              >
                We've sent a copy of the guide to your email. But you can also start reading it right here!
              </motion.h3>
              
              <motion.h4
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600"
              >
                Scroll down to start reading, or check your inbox for your copy.
              </motion.h4>
            </div>
            
            {/* Right Column - Image Placeholder */}
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[350px] h-[250px] bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500">Image Placeholder</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: The Full Guide (Expandable) */}
      <section className="w-full py-12 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Guide Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-[#064088]"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">5 Easy Steps to Study in the USA</h1>
            <p className="text-lg md:text-xl text-[#dc5d33] font-semibold">It's easier than you think!</p>
            <p className="mt-4 max-w-2xl mx-auto text-base opacity-90">
              Thousands of students from around the world have successfully followed these 5 steps. Here's how you can too — step by step.
            </p>
          </motion.div>

          {/* Step 1 Full Preview - with fade and Continue Reading */}
          <div className="mt-12 mb-6 relative bg-white rounded-xl shadow-md p-6">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">
                📘 Step 1: Find the Right English Program
              </h2>
              <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                <li>No TOEFL Requirement – Start without standardized tests</li>
                <li>Small Class Sizes – More speaking time, more support</li>
                <li>University Preparation – Academic English & study skills</li>
                <li>Support for International Students – Guidance & cultural help</li>
              </ul>
              <p className="mt-2 italic text-sm text-gray-700">
                Tip: Smaller cities are often safer, friendlier, and more affordable.
              </p>
            </div>
            {!isGuideExpanded && (
              <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#064088]">
                  💵 Step 2: Plan Your Budget
                </h2>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                  <li>Tuition: $1,500–$2,500 per 5-week term</li>
                  <li>Housing & Food: $600–$1,200/month</li>
                </ul>
                <p className="mt-1 italic text-sm text-gray-600">More details in Step 2...</p>
              </div>
            )}

            {/* Fade overlay effect at the bottom */}
            {!isGuideExpanded && (
              <div className="absolute bottom-16 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/90 to-white pointer-events-none z-20 rounded-b-xl" />
            )}

            {/* Continue Reading Button */}
            {!isGuideExpanded && (
              <div className="flex justify-center mt-4 relative z-30">
                <button 
                  onClick={toggleGuideExpansion}
                  className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors px-3 py-1 rounded-md"
                >
                  <FaChevronDown className="text-xs mr-1" />
                  <span>Continue Reading</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Expandable Content */}
          <AnimatePresence>
            {isGuideExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-12"
              >
                {/* Step 2 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">💵 Step 2: Plan Your Budget</h2>
                  <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                    <li>Tuition: $1,500–$2,500 per 5-week term</li>
                    <li>Housing & Food: $600–$1,200/month</li>
                    <li>Visa Fee: ~$350</li>
                    <li>Books, supplies, phone, entertainment</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-700">Beginner students may need up to one year of study. Intermediate/advanced students may complete sooner.</p>
                </div>
                
                {/* Step 3 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">📝 Step 3: Apply to Your School</h2>
                  <p className="mb-2 text-base text-gray-700">Most applications are simple and online. You'll usually need:</p>
                  <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                    <li>Application Form</li>
                    <li>Passport</li>
                    <li>School transcripts</li>
                    <li>Proof of finances (bank statement or sponsor letter)</li>
                    <li>Affidavit of Financial Support (if sponsored)</li>
                  </ul>
                </div>
                
                {/* Step 4 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">📄 Step 4: Get Your Visa</h2>
                  <p className="mb-2 text-base text-gray-700">We'll guide you through the steps:</p>
                  <ol className="list-decimal ml-6 space-y-1 text-base text-gray-700">
                    <li>Receive your I-20 form after applying</li>
                    <li>Complete DS-160 online</li>
                    <li>Pay SEVIS (I-901) fee</li>
                    <li>Print your SEVIS receipt</li>
                    <li>Sign and date your I-20</li>
                    <li>Attend your visa interview with all documents</li>
                    <li>Get approved and enter the U.S.</li>
                  </ol>
                </div>
                
                {/* Step 5 */}
                <div className="bg-white/80 p-6 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-[#064088]">✈️ Step 5: Get Ready for Your U.S. Adventure</h2>
                  <ul className="list-disc ml-6 space-y-1 text-base text-gray-700">
                    <li>Buy your flight</li>
                    <li>Arrange housing (your school can help!)</li>
                    <li>Attend orientation</li>
                    <li>Start your classes and make new friends!</li>
                  </ul>
                </div>
                
                {/* Timeline Section */}
                <div className="bg-[#f9fafb] rounded-xl p-6 shadow-inner">
                  <h2 className="text-xl font-bold mb-4 text-[#064088]">🕒 Suggested Timeline</h2>
                  <ul className="list-disc ml-6 text-sm space-y-1 text-gray-700">
                    <li><strong>12 months before:</strong> Research schools, start budgeting</li>
                    <li><strong>6 months before:</strong> Apply to school, collect documents</li>
                    <li><strong>3 months before:</strong> Prepare finances, apply for visa</li>
                    <li><strong>1 month before:</strong> Book flights, confirm housing</li>
                  </ul>
                </div>
                
                {/* Quick Checklist Summary */}
                <div className="bg-[#064088] text-white p-6 rounded-xl">
                  <h2 className="text-xl font-semibold mb-2">✅ Quick Checklist</h2>
                  <ul className="list-disc ml-6 space-y-1 text-sm">
                    <li>Choose the right English program</li>
                    <li>Create a realistic budget</li>
                    <li>Prepare and submit your school application</li>
                    <li>Gather documents and apply for your visa</li>
                    <li>Book travel and housing before your program starts</li>
                  </ul>
                </div>
                
                {/* Student Testimonials */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6 text-[#064088]">📣 What Our Students Say</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <blockquote className="bg-white shadow p-4 rounded-lg text-sm italic text-gray-700">
                      "INTERLINK pushed me to speak every day — and it worked."<br/>
                      <span className="font-semibold text-[#dc5d33]">— Lina, Colombia</span>
                    </blockquote>
                    <blockquote className="bg-white shadow p-4 rounded-lg text-sm italic text-gray-700">
                      "Thanks to INTERLINK, I understand not just the English language, but also the culture and people in the U.S."<br/>
                      <span className="font-semibold text-[#dc5d33]">— Mikey, Vietnam</span>
                    </blockquote>
                  </div>
                </div>
                
                {/* Want Help with These Steps? - Updated title and content */}
                <div className="py-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-md p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
                      {/* Left Column - Text Content */}
                      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                          <FaHandshake className="text-[#064088] text-4xl mr-3" />
                          <h2 className="text-3xl md:text-4xl font-bold text-[#064088]">
                            Talk with our admissions team!
                          </h2>
                        </div>
                        
                        <p className="text-gray-700 text-lg mb-8 max-w-xl">
                          At INTERLINK, we help students like you every day. The process of studying in the U.S. becomes much easier with our expert guidance. Thousands of international students have successfully navigated this journey with our support, and you can too!
                        </p>
                        
                        <div className="flex justify-center md:justify-start">
                          <button className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md">
                            Get Personalized Help
                          </button>
                        </div>
                      </div>
                      
                      {/* Right Column - Image Placeholder - Now with white background */}
                      <div className="md:w-1/2 flex justify-center">
                        <div className="w-[400px] h-[300px] bg-white rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Happy Students Image Placeholder</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Show Less Button */}
                <div className="flex justify-center mt-4 mb-6">
                  <button 
                    onClick={toggleGuideExpansion}
                    className="flex items-center gap-1 text-[#064088] hover:text-[#053067] font-medium text-sm transition-colors"
                  >
                    <FaChevronDown className="text-xs rotate-180 mr-1" />
                    <span>Show Less</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* REPLACED SECTION: Start pursuing your goals with INTERLINK! */}
      <HowInterlinkHelpsSection />
      
      {/* REPLACED: Speaking English Pays Off with Student Journey Comparison */}
      <StudentJourneyComparisonSection />
      
      {/* UPDATED SECTION: Comparison Table */}
      <ComparisonTableSection />
      
      {/* UPDATED SECTION: Study Options */}
      <StudyOptionsSection />
      
      {/* NEW SECTION: Timeline */}
      <TimelineSection />
      
      {/* NEW SECTION: Testimonials - Not touching as requested */}
      <TestimonialsSection />
      
      {/* NEW SECTION: On The Fence */}
      {/*<OnTheFenceSection />*/}
      
      {/* NEW SECTION: Is Right For You - Commented out as requested */}
      {/* <IsRightForYouSection /> */}
      
      {/* NEW SECTION: FAQ */}
      <FAQSection />
      
      {/* FINAL CTA SECTION - Updated */}
      <LastCTASection />
      
      <Footer />
    </div>
  );
};

export default GuidePage;
