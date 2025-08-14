'use client'

import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-[80vh]">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm">Trusted by 10,000+ professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Write Your
              <span className="gradient-text block">Success Story</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Premium writing instruments crafted for professionals who demand excellence. Every stroke matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Premium Pens
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                View Collection
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-amber-500/30 rounded-full blur-3xl scale-150"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&h=600&fit=crop"
                  alt="Premium Pen"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}