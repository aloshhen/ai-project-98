import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-coffee-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Coffee Journey Today</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join our coffee ecosystem and unlock a world of flavor, convenience, and community.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-coffee-500 px-8 py-4 rounded-full flex items-center space-x-2 font-bold"
            >
              <Coffee className="w-6 h-6" />
              <span>Join Now</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-4 rounded-full"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}