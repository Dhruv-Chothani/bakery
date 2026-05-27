import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'breads', name: 'Breads' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'cookies', name: 'Cookies' },
  ];

  const menuItems = [
    {
      name: 'Sourdough Loaf',
      category: 'breads',
      price: '$6.50',
      description: 'Traditional tangy sourdough with a crispy crust',
      image: 'https://images.pexels.com/photos/1582388/pexels-photo-1582388.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'French Baguette',
      category: 'breads',
      price: '$4.00',
      description: 'Classic Parisian-style baguette, golden and crusty',
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Whole Wheat Bread',
      category: 'breads',
      price: '$5.50',
      description: 'Nutritious whole grain bread, perfect for toast',
      image: 'https://images.pexels.com/photos/1775080/pexels-photo-1775080.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Butter Croissant',
      category: 'pastries',
      price: '$3.75',
      description: 'Flaky, buttery layers of French perfection',
      image: 'https://images.pexels.com/photos/213014/pexels-photo-213014.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Chocolate Croissant',
      category: 'pastries',
      price: '$4.25',
      description: 'Croissant filled with rich dark chocolate',
      image: 'https://images.pexels.com/photos/2396738/pexels-photo-2396738.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Fruit Danish',
      category: 'pastries',
      price: '$4.50',
      description: 'Flaky pastry topped with fresh seasonal fruits',
      image: 'https://images.pexels.com/photos/2393675/pexels-photo-2393675.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Cinnamon Roll',
      category: 'pastries',
      price: '$4.00',
      description: 'Soft, sweet roll with cinnamon and cream cheese frosting',
      image: 'https://images.pexels.com/photos/10708521/pexels-photo-10708521.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Birthday Cake',
      category: 'cakes',
      price: 'from $45',
      description: 'Custom birthday cakes, made to order with your choice of flavors',
      image: 'https://images.pexels.com/photos/1126965/pexels-photo-1126965.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Wedding Cake',
      category: 'cakes',
      price: 'Custom Quote',
      description: 'Elegant multi-tiered wedding cakes for your special day',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Chocolate Cake',
      category: 'cakes',
      price: '$32',
      description: 'Rich, decadent triple chocolate layer cake',
      image: 'https://images.pexels.com/photos/1629151/pexels-photo-1629151.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Carrot Cake',
      category: 'cakes',
      price: '$35',
      description: 'Moist carrot cake with cream cheese frosting',
      image: 'https://images.pexels.com/photos/1629155/pexels-photo-1629155.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Chocolate Chip Cookies',
      category: 'cookies',
      price: '$2.50 each',
      description: 'Classic cookies loaded with chocolate chips',
      image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Macarons',
      category: 'cookies',
      price: '$3.00 each',
      description: 'French macarons in assorted flavors and colors',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Shortbread Cookies',
      category: 'cookies',
      price: '$2.00 each',
      description: 'Buttery, melt-in-your-mouth Scottish shortbread',
      image: 'https://images.pexels.com/photos/1480709/pexels-photo-1480709.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-amber-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2396738/pexels-photo-2396738.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bakery display"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-amber-100">Fresh baked daily with love and premium ingredients</p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-amber-900 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-semibold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Section */}
      <section className="bg-amber-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Custom Orders Welcome!</h3>
          <p className="text-amber-100 mb-6">
            Looking for something special? We create custom cakes, cupcakes, and pastries for all
            occasions. Contact us to discuss your perfect creation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Request Custom Order
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
