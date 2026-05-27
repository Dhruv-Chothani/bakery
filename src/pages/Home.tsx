import { Link } from 'react-router-dom';
import { ChevronRight, Star, Award, Heart } from 'lucide-react';

const Home = () => {
  const featuredItems = [
    {
      name: 'Artisan Croissants',
      description: 'Flaky, buttery layers of perfection',
      image: 'https://www.zinqueindia.com/cdn/shop/files/WhatsAppImage2025-06-21at9.37.22PM.jpg?v=1751621495&width=713',
    },
    {
      name: 'Fresh Bread',
      description: 'Handcrafted daily with love',
      image: 'https://images.pexels.com/photos/1582388/pexels-photo-1582388.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Custom Cakes',
      description: 'Made for your special moments',
      image: 'https://images.pexels.com/photos/1126965/pexels-photo-1126965.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const testimonials = [
    {
      text: "The best croissants I've ever had! So flaky and buttery, just like the ones in Paris.",
      author: 'Sarah M.',
      rating: 5,
    },
    {
      text: "Our wedding cake was absolutely stunning and delicious. They exceeded all expectations!",
      author: 'Michael & Jessica',
      rating: 5,
    },
    {
      text: "This is our family's go-to bakery for Sunday morning treats. Always fresh and delicious.",
      author: 'The Johnson Family',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-amber-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2396738/pexels-photo-2396738.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fresh baked goods"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sweet Delights Bakery</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-amber-100">
            Handcrafted pastries, artisan breads, and custom cakes made with love since 1985
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Award Winning</h3>
              <p className="text-amber-700">
                Recognized for excellence in baking with multiple local and national awards.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-amber-700">
                Every item is crafted by hand using traditional recipes passed through generations.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Premium Ingredients</h3>
              <p className="text-amber-700">
                We source only the finest local and organic ingredients for our baked goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Specialties</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover our most loved creations, baked fresh every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-amber-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg"
            >
              View Full Menu
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-amber-800 italic mb-4">"{testimonial.text}"</p>
                <p className="text-amber-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Taste Happiness?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Visit us today or place a custom order for your next special occasion.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-amber-900 px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
