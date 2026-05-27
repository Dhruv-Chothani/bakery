import { Link } from 'react-router-dom';
import { Croissant, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Croissant className="h-8 w-8 text-amber-300" />
              <span className="text-xl font-bold">Sweet Delights</span>
            </div>
            <p className="text-amber-100">
              Crafting delicious memories with every bite since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-amber-100 hover:text-white transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-amber-300 flex-shrink-0" />
                <span className="text-amber-100">123 Bakery Street, Sweet Town, ST 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <span className="text-amber-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <span className="text-amber-100">hello@sweetdelights.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-amber-300 flex-shrink-0" />
                <div className="text-amber-100">
                  <p>Mon - Fri: 6am - 7pm</p>
                  <p>Saturday: 7am - 6pm</p>
                  <p>Sunday: 8am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; {new Date().getFullYear()} Sweet Delights Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
