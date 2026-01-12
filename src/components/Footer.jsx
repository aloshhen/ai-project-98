import { Coffee, Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="text-white w-8 h-8" />
              <span className="font-bold text-xl">CoffeeEco</span>
            </div>
            <p className="text-white/70">
              Connecting coffee lovers with local cafes and global flavors.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80">Home</a></li>
              <li><a href="#features" className="hover:text-white/80">Features</a></li>
              <li><a href="#about" className="hover:text-white/80">About</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80"><Twitter /></a>
              <a href="#" className="hover:text-white/80"><Instagram /></a>
              <a href="#" className="hover:text-white/80"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">© 2024 CoffeeEco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}