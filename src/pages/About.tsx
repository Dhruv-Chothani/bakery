const About = () => {
  const teamMembers = [
    {
      name: 'Marie Laurent',
      role: 'Head Baker & Founder',
      image: 'https://images.pexels.com/photos/3771831/pexels-photo-3771831.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 30 years of experience, Marie brings French culinary traditions to every creation.',
    },
    {
      name: 'James Chen',
      role: 'Pastry Chef',
      image: 'https://images.pexels.com/photos/3771812/pexels-photo-3771812.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A graduate of Le Cordon Bleu, James specializes in elegant pastries and desserts.',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Cake Designer',
      image: 'https://images.pexels.com/photos/3771832/pexels-photo-3771832.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sofia transforms imagination into edible art with her stunning custom cake designs.',
    },
    {
      name: 'David Wilson',
      role: 'Bread Specialist',
      image: 'https://images.pexels.com/photos/3771809/pexels-photo-3771809.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David crafts our artisan breads using traditional methods and natural fermentation.',
    },
  ];

  const milestones = [
    { year: '1985', event: 'Sweet Delights Bakery founded by Marie Laurent' },
    { year: '1992', event: 'Won first regional baking competition' },
    { year: '2001', event: 'Expanded to current location with larger kitchen' },
    { year: '2010', event: 'Featured in "Best Bakeries of America" magazine' },
    { year: '2018', event: 'Celebrated 10,000th custom cake order' },
    { year: '2023', event: 'Introduced organic and gluten-free product lines' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-amber-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2396738/pexels-photo-2396738.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bakery kitchen"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-amber-100">Four decades of passion, tradition, and delicious memories</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1329322/pexels-photo-1329322.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Baker kneading dough"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Where Tradition Meets Passion</h2>
              <p className="text-lg text-amber-700 mb-4">
                Sweet Delights Bakery began in 1985 when Marie Laurent, a classically trained French
                baker, brought her family's generations-old recipes to the United States. What started
                as a small corner bakery has blossomed into a beloved community institution.
              </p>
              <p className="text-lg text-amber-700 mb-4">
                Every morning before dawn, our bakers arrive to begin the alchemy of bread-making.
                We use time-honored techniques: slow fermentation, hand-shaping, and careful
                temperature control to create breads that nourish both body and soul.
              </p>
              <p className="text-lg text-amber-700">
                Our commitment to quality has never wavered. We source local, organic ingredients
                whenever possible, support sustainable farming practices, and give back to the
                community that has supported us for nearly four decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Quality Ingredients</h3>
              <p className="text-amber-700">
                We source the finest ingredients from local farms and trusted suppliers, ensuring
                every bite is pure perfection.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Artisan Craft</h3>
              <p className="text-amber-700">
                Each product is crafted by skilled hands using traditional methods passed down
                through generations of bakers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">Made with Love</h3>
              <p className="text-amber-700">
                We pour our hearts into every creation, believing that the best baked goods are made
                with genuine care and passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-600" />
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                >
                  <div className="bg-amber-50 p-6 rounded-lg shadow-lg">
                    <span className="text-2xl font-bold text-amber-600">{milestone.year}</span>
                    <p className="text-amber-800 mt-2">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-xl text-amber-700 text-center mb-12 max-w-2xl mx-auto">
            The talented artisans behind every delicious creation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold text-amber-900">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                <p className="text-amber-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
