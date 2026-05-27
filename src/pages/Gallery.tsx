import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/213014/pexels-photo-213014.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh croissants',
      category: 'Pastries',
    },
    {
      src: 'https://images.pexels.com/photos/1582388/pexels-photo-1582388.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Artisan bread',
      category: 'Breads',
    },
    {
      src: 'https://images.pexels.com/photos/1126965/pexels-photo-1126965.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Birthday cake',
      category: 'Cakes',
    },
    {
      src: 'https://images.pexels.com/photos/2396738/pexels-photo-2396738.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Assorted pastries',
      category: 'Pastries',
    },
    {
      src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant wedding cake',
      category: 'Cakes',
    },
    {
      src: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'French baguettes',
      category: 'Breads',
    },
    {
      src: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chocolate chip cookies',
      category: 'Cookies',
    },
    {
      src: 'https://images.pexels.com/photos/2393675/pexels-photo-2393675.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fruit danish',
      category: 'Pastries',
    },
    {
      src: 'https://images.pexels.com/photos/1629151/pexels-photo-1629151.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chocolate cake',
      category: 'Cakes',
    },
    {
      src: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colorful macarons',
      category: 'Cookies',
    },
    {
      src: 'https://images.pexels.com/photos/1775080/pexels-photo-1775080.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Whole wheat bread',
      category: 'Breads',
    },
    {
      src: 'https://images.pexels.com/photos/10708521/pexels-photo-10708521.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cinnamon rolls',
      category: 'Pastries',
    },
    {
      src: 'https://images.pexels.com/photos/1329322/pexels-photo-1329322.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Baker at work',
      category: 'Behind the Scenes',
    },
    {
      src: 'https://images.pexels.com/photos/1480709/pexels-photo-1480709.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Shortbread cookies',
      category: 'Cookies',
    },
    {
      src: 'https://images.pexels.com/photos/1629155/pexels-photo-1629155.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Carrot cake',
      category: 'Cakes',
    },
    {
      src: 'https://images.pexels.com/photos/2373167/pexels-photo-2373167.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bakery display',
      category: 'Behind the Scenes',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Breads', 'Pastries', 'Cakes', 'Cookies', 'Behind the Scenes'];

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-amber-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2373167/pexels-photo-2373167.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bakery display"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-amber-100">A visual feast of our delicious creations</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-amber-900 hover:bg-amber-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-amber-500 text-white text-sm px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.replace('w=800', 'w=1200')}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
