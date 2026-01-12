import { motion } from 'framer-motion'
import { Map, Clock, Users } from 'lucide-react'

const steps = [
  {
    icon: Map,
    title: 'Discover Cafes',
    description: 'Browse and find unique local coffee shops near you.'
  },
  {
    icon: Clock,
    title: 'Quick Ordering',
    description: 'Order ahead and pick up your favorite brew without waiting.'
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Join a network of coffee lovers and local roasters.'
  }
]

export default function About() {
  return (
    <section className="py-24 bg-coffee-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">How It Works</h2>
          <p className="text-xl text-coffee-900/70 max-w-2xl mx-auto">
            Three simple steps to transform your coffee experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className="mb-4 flex justify-center">
                <step.icon className="w-16 h-16 text-coffee-500" />
              </div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">{step.title}</h3>
              <p className="text-coffee-900/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}