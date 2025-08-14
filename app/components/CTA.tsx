import { ArrowRight, Gift } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-amber-500 text-amber-900 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            Limited Time Offer
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get 25% Off Your First Order
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our exclusive community and receive premium pens at unbeatable prices. 
            Plus, get free worldwide shipping on orders over $150.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              Shop Now & Save 25%
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="text-white/60 text-sm">
              No code needed • Automatically applied
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Free worldwide shipping
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              30-day money back guarantee
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Lifetime warranty included
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}