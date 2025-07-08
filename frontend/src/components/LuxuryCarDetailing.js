import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Droplets, 
  Sparkles, 
  Shield, 
  Clock, 
  Users, 
  Truck,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const LuxuryCarDetailing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-luxury border-b border-luxury-gold/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="font-serif text-2xl font-bold text-luxury-gold"
              whileHover={{ scale: 1.05 }}
            >
              On The Move Detailing
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-luxury-gold transition-colors">Services</a>
              <a href="#about" className="hover:text-luxury-gold transition-colors">About</a>
              <a href="#testimonials" className="hover:text-luxury-gold transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a>
              <motion.button 
                className="bg-luxury-gold text-luxury-black px-6 py-2 rounded-full font-semibold hover:bg-luxury-gold-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/50 to-transparent z-10" />
          <img 
            src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
            alt="Luxury car detailing with water droplets"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            className="font-serif text-hero md:text-hero-lg font-bold mb-6 text-luxury-white tracking-luxury"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Premium Mobile Car Detailing
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-luxury-cream mb-8 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Experience luxury car care that comes to you. Professional detailing services for every vehicle, every location.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button 
              className="bg-luxury-gold text-luxury-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-luxury-gold-light transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Service
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              className="border border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-luxury-gold hover:text-luxury-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-display md:text-display-lg font-bold mb-4 text-luxury-gold">
              Our Premium Services
            </h2>
            <p className="text-xl text-luxury-cream max-w-3xl mx-auto">
              From basic washes to complete transformations, we deliver exceptional results with every service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Exterior Detail",
                description: "Complete exterior cleaning, polishing, and protection",
                image: "https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg",
                icon: <Droplets className="w-8 h-8" />,
                features: ["Hand wash & dry", "Paint correction", "Ceramic coating", "Wheel detailing"]
              },
              {
                title: "Interior Detail",
                description: "Deep cleaning and restoration of your vehicle's interior",
                image: "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg",
                icon: <Sparkles className="w-8 h-8" />,
                features: ["Leather conditioning", "Fabric protection", "Steam cleaning", "Odor elimination"]
              },
              {
                title: "Full Detail",
                description: "Complete inside and outside luxury treatment",
                image: "https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg",
                icon: <Shield className="w-8 h-8" />,
                features: ["Exterior + Interior", "Engine bay cleaning", "Headlight restoration", "Paint protection"]
              },
              {
                title: "Add-ons",
                description: "Premium extras to enhance your service",
                image: "https://images.pexels.com/photos/6873101/pexels-photo-6873101.jpeg",
                icon: <Star className="w-8 h-8" />,
                features: ["Ceramic coating", "Paint correction", "Headlight restoration", "Engine detailing"]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="group relative bg-luxury-gray-light rounded-2xl p-6 hover:bg-luxury-gold/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-luxury-gold">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-3 text-luxury-gold">{service.title}</h3>
                <p className="text-luxury-cream mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-luxury-cream">
                      <CheckCircle className="w-4 h-4 text-luxury-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-display md:text-display-lg font-bold mb-6 text-luxury-gold">
                About On The Move Detailing
              </h2>
              <p className="text-xl text-luxury-cream mb-6">
                With over 10 years of experience in automotive detailing, we bring professional-grade services directly to your location. Our team of certified professionals uses only the finest products and techniques to ensure your vehicle looks and feels its absolute best.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2">500+</div>
                  <div className="text-luxury-cream">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2">10+</div>
                  <div className="text-luxury-cream">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
                  <div className="text-luxury-cream">Satisfaction Rate</div>
                </div>
              </div>
              <motion.button 
                className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/14908955/pexels-photo-14908955.jpeg"
                  alt="Professional detailing team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Services Section */}
      <section className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8783587/pexels-photo-8783587.jpeg"
                  alt="Fleet of commercial vehicles"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/30 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-display md:text-display-lg font-bold mb-6 text-luxury-gold">
                Fleet Services
              </h2>
              <p className="text-xl text-luxury-cream mb-6">
                Professional vehicle maintenance for businesses of all sizes. We offer customized fleet detailing packages to keep your company vehicles looking their best and maintaining their value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-luxury-gold" />
                  <span className="text-luxury-cream">Commercial Vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-luxury-gold" />
                  <span className="text-luxury-cream">Scheduled Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-luxury-gold" />
                  <span className="text-luxury-cream">Volume Discounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-luxury-gold" />
                  <span className="text-luxury-cream">Insured & Bonded</span>
                </div>
              </div>
              <motion.button 
                className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Fleet Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-display md:text-display-lg font-bold mb-4 text-luxury-gold">
              What Our Customers Say
            </h2>
            <p className="text-xl text-luxury-cream max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers who trust us with their vehicles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                image: "https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg",
                text: "Absolutely incredible service! They made my car look better than when I first bought it. The convenience of mobile service is unmatched.",
                rating: 5
              },
              {
                name: "Michael Chen",
                image: "https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg",
                text: "Professional, punctual, and thorough. The team went above and beyond to ensure every detail was perfect. Highly recommend!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                image: "https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg",
                text: "The best car detailing service I've ever used. They transformed my vehicle inside and out. Worth every penny!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-luxury-gray-light rounded-2xl p-6 hover:bg-luxury-gold/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-luxury-gold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-luxury-cream italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-display md:text-display-lg font-bold mb-4 text-luxury-gold">
              Get In Touch
            </h2>
            <p className="text-xl text-luxury-cream max-w-3xl mx-auto">
              Ready to experience premium mobile car detailing? Contact us today to schedule your service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-gold">Phone</h4>
                    <p className="text-luxury-cream">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-gold">Email</h4>
                    <p className="text-luxury-cream">info@onthemovedetailing.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-gold">Service Area</h4>
                    <p className="text-luxury-cream">Greater Metropolitan Area</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="bg-luxury-gray-light border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-cream/70 focus:outline-none focus:border-luxury-gold"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="bg-luxury-gray-light border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-cream/70 focus:outline-none focus:border-luxury-gold"
                  />
                </div>
                <input 
                  type="tel" 
                  placeholder="Your Phone"
                  className="w-full bg-luxury-gray-light border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-cream/70 focus:outline-none focus:border-luxury-gold"
                />
                <textarea 
                  placeholder="Tell us about your vehicle and service needs"
                  rows="4"
                  className="w-full bg-luxury-gray-light border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-cream/70 focus:outline-none focus:border-luxury-gold"
                ></textarea>
                <motion.button 
                  type="submit"
                  className="w-full bg-luxury-gold text-luxury-black px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold-light transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Service
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black border-t border-luxury-gold/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-luxury-gold mb-4">On The Move Detailing</h3>
              <p className="text-luxury-cream">Premium mobile car detailing services that come to you.</p>
            </div>
            <div>
              <h4 className="font-semibold text-luxury-gold mb-4">Services</h4>
              <ul className="space-y-2 text-luxury-cream">
                <li>Exterior Detail</li>
                <li>Interior Detail</li>
                <li>Full Detail</li>
                <li>Fleet Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-luxury-gold mb-4">Company</h4>
              <ul className="space-y-2 text-luxury-cream">
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-luxury-gold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-luxury-black font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-luxury-black font-bold">i</span>
                </div>
                <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                  <span className="text-luxury-black font-bold">t</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-luxury-gold/20 mt-8 pt-8 text-center text-luxury-cream">
            <p>&copy; 2025 On The Move Detailing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryCarDetailing;