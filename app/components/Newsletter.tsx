import { Mail, Send } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-sage-700 to-tea-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Stay Steeped in Updates
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our tea community and be the first to know about new arrivals, 
            brewing tips, and exclusive offers.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-sage-700 px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center justify-center group whitespace-nowrap"
              >
                Subscribe
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <p className="text-sm text-white/70 mt-4">
            No spam, just tea. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}