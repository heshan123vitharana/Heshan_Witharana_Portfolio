import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Designs: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const designs = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity including logo, color palette, and brand guidelines'
    },
    {
      title: 'Mobile App UI/UX',
      category: 'UI/UX',
      imageUrl: 'https://i.postimg.cc/pL4qw3ZN/image.png',
      description: 'Modern mobile application interface design with intuitive user experience'
    },
    {
      title: 'Website Redesign',
      category: 'Web Design',
      imageUrl: 'https://i.postimg.cc/L8bzqfYj/project-1.png',
      description: 'Complete website redesign focusing on user engagement and conversion'
    },
    {
      title: 'Logo Collection',
      category: 'Logo Design',
      imageUrl: 'https://i.postimg.cc/C5CK0yDc/LOGO-22-IT0550.jpg',
      description: 'Collection of minimalist and modern logo designs for various industries'
    },
    {
      title: 'Print Design',
      category: 'Print',
      imageUrl: 'https://i.postimg.cc/tTYP9gC2/Whats-App-Image-2025-06-15-at-00-55-18-1513234b.jpg',
      description: 'Brochures, flyers, and print materials with striking visual impact'
    },
    {
      title: 'Social Media Graphics',
      category: 'Social Media',
      imageUrl: 'https://i.postimg.cc/g2zxY0g8/BOYB-2.png',
      description: 'Eye-catching social media graphics and promotional materials'
    },
    {
      title: 'Packaging Design',
      category: 'Packaging',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Creative packaging design that stands out on the shelf'
    },
    {
      title: 'Illustration Set',
      category: 'Illustration',
      imageUrl: 'https://i.postimg.cc/CKWMfMsv/3.jpg',
      description: 'Custom illustrations and icon sets for digital applications'
    },
    {
      title: 'Dashboard Interface',
      category: 'UI/UX',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean and functional dashboard interface with data visualization'
    }
  ];

  const categories = ['All', ...Array.from(new Set(designs.map(design => design.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDesigns = selectedCategory === 'All'
    ? designs
    : designs.filter(design => design.category === selectedCategory);

  return (
    <section id="designs" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">GRAPHIC DESIGNS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative visual solutions that communicate effectively and leave lasting impressions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-cyan-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/60 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={design.imageUrl}
                    alt={design.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => setSelectedImage(design.imageUrl)}
                      className="bg-cyan-500 text-black p-3 rounded-full hover:bg-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Maximize2 size={20} />
                    </motion.button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {design.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                    {design.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {design.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Design preview"
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Designs;