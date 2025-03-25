import React from 'react'
import { ArrowRight } from 'lucide-react'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'
import useFormSubmission from '../hooks/useFormSubmission'

const HeroSection = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormSubmission();

  return (
    <AuroraBackground className="px-4 pt-4 pb-12 md:pt-6 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center z-10 relative">
        {/* Logo - reduced top padding by 70% */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center"
        >
          <img 
            src="https://i.imgur.com/P0IOLMW.png" 
            alt="Interlink Logo" 
            className="h-12 md:h-16"
          />
        </motion.div>
        
        {/* Hero Content */}
{/* Hero Content */}
<div className="text-center max-w-3xl mb-1">
  {/* Hook above headline */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-sm md:text-base uppercase tracking-wider text-[#064088] font-medium mb-6"
  >
    FREE GUIDE – GET IT NOW!
  </motion.div>
  
  {/* Headline */}
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="text-4xl md:text-5xl font-bold text-[#064088] mb-6" // 👈 increased from mb-4
  >
    5 Easy Steps to Study in the USA
  </motion.h1>
  
  {/* Subheadline */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-lg md:text-xl text-[#064088] mb-10 opacity-90 max-w-2xl mx-auto"
  >
    <p className="mb-2">Yes, you can have the experience of a lifetime in the USA!</p>
<p className="mb-6">
  Get the <span className="font-bold">step-by-step guide</span> for <span className="underline">finding the right program</span> and how to <span className="underline">prepare for your </span>English and Academic studies!
</p>
    <p>- All in one guide -</p>
  </motion.div>
</div>

          
        {/* Opt-in Form - Wider on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl mx-auto bg-white/90 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1 w-full">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name (e.g. John)"
                className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-1 focus:ring-[#064088] bg-white text-gray-800`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
            </div>
            
            <div className="flex-1 w-full">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-1 focus:ring-[#064088] bg-white text-gray-800`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
            </div>
            
            <div className="w-full md:w-auto">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] text-base shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Get Instant Access</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-xs text-center text-gray-500">
<p className="text-sm text-center text-gray-600">
  Trusted by <span className="font-semibold">thousands</span> of students from <span className="font-semibold">60+</span> countries
</p>

          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}

export default HeroSection
