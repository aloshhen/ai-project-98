import { motion } from 'framer-motion'
import { Coffee, Zap, Globe, Leaf } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Local Roasters',
    description: 'Connect with artisan coffee roasters and discover unique, locally sourced beans.'
  },
  {
    icon: Zap,
    title: 'Quick Ordering',
    description: 'Seamless ordering and pickup from your favorite cafes with just a few taps.'
  },
  {
    icon: Globe,
    title: 'Global Flavors',
    description: 'Explore coffee cultures from around the world, right from your local ecosystem.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Support eco-friendly cafes and roasters committed to sustainability.'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Features That Brew Perfection</h2>
          <p className="text-xl text-coffee-900/70 max-w-2xl mx-auto">
            Our ecosystem is designed to elevate your coffee experience from bean to cup.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-coffee-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
            >
              <div className="mb-4 flex justify-center">
                <feature.icon className="w-12 h-12 text-coffee-500" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 mb-3">{feature.title}</h3>
              <p className="text-coffee-900/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}