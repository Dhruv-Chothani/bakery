import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-amber-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2396738/pexels-photo-2396738.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bakery interior"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-amber-100">We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 text-green-700 p-6 rounded-lg">
                    <p className="text-xl font-semibold">Thank you!</p>
                    <p className="mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="custom-order">Custom Order</option>
                        <option value="wedding-cake">Wedding Cake Inquiry</option>
                        <option value="corporate">Corporate Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-amber-900 font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-amber-700 mb-8">
                  Whether you have a question about our products, want to place a custom order, or
                  just want to say hello, we're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">Visit Us</h3>
                    <p className="text-amber-700">123 Bakery Street</p>
                    <p className="text-amber-700">Sweet Town, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">Call Us</h3>
                    <p className="text-amber-700">(555) 123-4567</p>
                    <p className="text-sm text-amber-600">Mon-Sat: 6am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">Email Us</h3>
                    <p className="text-amber-700">hello@sweetdelights.com</p>
                    <p className="text-sm text-amber-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">Opening Hours</h3>
                    <div className="text-amber-700 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 7:00 PM</p>
                      <p>Saturday: 7:00 AM - 6:00 PM</p>
                      <p>Sunday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="bg-amber-200 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                  <div className="text-center text-amber-800">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">123 Bakery Street, Sweet Town</p>
                    <p className="text-sm mt-2">Interactive map coming soon!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do you accept custom orders?',
                a: 'Yes! We specialize in custom cakes, cupcakes, and pastries for all occasions. Please contact us at least 2 weeks in advance for custom orders.',
              },
              {
                q: 'Do you offer gluten-free options?',
                a: 'Yes, we have a selection of gluten-free breads, pastries, and cookies. Please note that our kitchen processes wheat products.',
              },
              {
                q: 'Can I place a bulk order for an event?',
                a: 'Absolutely! We offer corporate catering and bulk orders. Please contact us for special pricing and availability.',
              },
              {
                q: 'Do you deliver?',
                a: 'We offer delivery within a 10-mile radius for orders over $50. Delivery fees may apply based on distance.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-900 mb-2">{faq.q}</h3>
                <p className="text-amber-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
