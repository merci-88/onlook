'use client'
import { useState } from 'react'
import { Menu, X, ShoppingBag, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-tea-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-tea-800">
              TeaLeaf
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-tea-700 hover:text-tea-900 transition-colors">
              Home
            </a>
            <a href="#products" className="text-tea-700 hover:text-tea-900 transition-colors">
              Teas
            </a>
            <a href="#about" className="text-tea-700 hover:text-tea-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-tea-700 hover:text-tea-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-tea-700 hover:text-tea-900 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-tea-700 hover:text-tea-900 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-sage-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-tea-700 hover:text-tea-900 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-sage-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-tea-700 hover:text-tea-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-tea-100">
              <a
                href="#home"
                className="block px-3 py-2 text-tea-700 hover:text-tea-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-tea-700 hover:text-tea-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Teas
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-tea-700 hover:text-tea-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-tea-700 hover:text-tea-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 border-t border-tea-100">
                <button className="flex items-center text-tea-700 hover:text-tea-900 transition-colors">
                  <User className="w-5 h-5 mr-2" />
                  Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}