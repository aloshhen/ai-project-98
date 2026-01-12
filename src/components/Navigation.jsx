import { Coffee, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/30 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-500" />
          <span className="font-bold text-coffee-900">CoffeeEco</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-coffee-500 hover:text-coffee-900">Home</a>
          <a href="#features" className="text-coffee-500 hover:text-coffee-900">Features</a>
          <a href="#about" className="text-coffee-500 hover:text-coffee-900">About</a>
        </div>
        <button className="md:hidden">
          <Menu className="text-coffee-500" />
        </button>
      </div>
    </motion.nav>
  )
}