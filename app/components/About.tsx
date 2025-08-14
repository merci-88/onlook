import { Award, Truck, Shield, Heart } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected teas from the finest gardens worldwide, ensuring exceptional taste and aroma in every cup.'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free shipping on orders over $50. Your tea will arrive fresh and ready to brew within 2-3 business days.'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee. If you\'re not completely happy with your tea, we\'ll make it right.'
  },
  {
    icon: Heart,
    title: 'Sustainable Sourcing',
    description: 'We work directly with tea gardens to ensure fair trade practices and environmental sustainability.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-sage-50 to-tea-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-tea-900 mb-6">
              Crafting Perfect Tea Experiences Since 1920
            </h2>
            
            <p className="text-lg text-tea-700 mb-8 leading-relaxed">
              For over a century, we've been passionate about bringing you the world's finest teas. 
              Our journey began in a small tea shop in London, and today we source premium teas 
              from gardens across China, India, Sri Lanka, and beyond.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-sage-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-tea-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-tea-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-tea-200 to-tea-300 rounded-xl"></div>
                  <div className="h-24 bg-gradient-to-br from-sage-200 to-sage-300 rounded-xl"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-24 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-xl"></div>
                  <div className="h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-xl"></div>
                </div>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-700 mb-1">100+</div>
                  <div className="text-sm text-tea-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-tea-700 mb-1">50K+</div>
                <div className="text-xs text-tea-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}