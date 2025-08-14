import { Zap, Shield, Award, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Precision Engineering",
    description: "Each pen is crafted with Swiss precision, ensuring smooth writing every time."
  },
  {
    icon: Shield,
    title: "Lifetime Guarantee",
    description: "We stand behind our quality with a comprehensive lifetime warranty."
  },
  {
    icon: Award,
    title: "Award Winning Design",
    description: "Recognized by design experts worldwide for excellence and innovation."
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Only the finest materials including titanium, gold, and rare woods."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Pens?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every detail matters when it comes to the perfect writing experience. 
            Here's what sets us apart from the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}