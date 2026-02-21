import { motion } from 'motion/react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          At Highfy World, we believe that furniture is more than just functional objects; it's an expression of your lifestyle and a foundation for your memories.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000"
            alt="Craftsmanship"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold mb-6">Craftsmanship & Quality</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded in 2010, Highfy World started with a simple mission: to bring high-quality, beautifully designed furniture to modern homes without the premium markup. We work directly with artisans and manufacturers to ensure every piece meets our rigorous standards.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our collections are curated to blend timeless elegance with contemporary functionality. Whether you're furnishing a cozy apartment or a spacious estate, our pieces are designed to elevate your living experience.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#F5F2ED] rounded-2xl p-12 text-center mb-24">
        <h2 className="text-3xl font-serif font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-gray-600">We are committed to responsible sourcing and eco-friendly practices in our production.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Design</h3>
            <p className="text-gray-600">We prioritize aesthetics without compromising on comfort or durability.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer First</h3>
            <p className="text-gray-600">Your satisfaction is our top priority, from browsing to delivery and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
