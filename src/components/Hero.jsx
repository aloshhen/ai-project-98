import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-coffee-50 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Your Coffee, Your Ecosystem
          </h1>
          <p className="text-xl text-coffee-900/80 max-w-2xl mx-auto mb-10">
            Discover a seamless coffee experience that connects you with the best local cafes, roasters, and brewing techniques.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coffee-500 text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <span>Explore Cafes</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-coffee-500 text-coffee-500 px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <Coffee className="w-5 h-5" />
              <span>Learn More</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}