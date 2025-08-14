import { Star, ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Earl Grey Supreme',
    description: 'A classic blend with bergamot oil and cornflower petals',
    price: 24.99,
    rating: 4.9,
    image: 'bg-gradient-to-br from-tea-300 to-tea-400',
    category: 'Black Tea'
  },
  {
    id: 2,
    name: 'Dragon Well Green',
    description: 'Delicate Chinese green tea with a subtle, sweet flavor',
    price: 32.99,
    rating: 4.8,
    image: 'bg-gradient-to-br from-sage-300 to-sage-400',
    category: 'Green Tea'
  },
  {
    id: 3,
    name: 'Himalayan White',
    description: 'Rare white tea from high-altitude gardens',
    price: 45.99,
    rating: 5.0,
    image: 'bg-gradient-to-br from-tea-200 to-sage-200',
    category: 'White Tea'
  },
  {
    id: 4,
    name: 'Chamomile Dreams',
    description: 'Soothing herbal blend perfect for evening relaxation',
    price: 19.99,
    rating: 4.7,
    image: 'bg-gradient-to-br from-yellow-200 to-yellow-300',
    category: 'Herbal Tea'
  }
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-tea-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-tea-700 max-w-2xl mx-auto">
            Discover our most popular teas, carefully selected for their exceptional quality and unique flavors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-tea-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Product Image */}
              <div className={`h-48 sm:h-56 ${product.image} relative`}>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-tea-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-tea-600">({product.rating})</span>
                </div>

                <h3 className="text-xl font-serif font-semibold text-tea-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-tea-700 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sage-700">
                    ${product.price}
                  </span>
                  <button className="bg-sage-700 text-white p-3 rounded-lg hover:bg-sage-800 transition-colors group">
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-tea-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-tea-800 transition-colors">
            View All Teas
          </button>
        </div>
      </div>
    </section>
  )
}