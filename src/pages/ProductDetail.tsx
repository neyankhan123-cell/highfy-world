import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/button';
import { Star, Truck, ShieldCheck, ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <img
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="text-3xl font-medium text-primary mb-6">${product.price}</div>

          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-900">Quantity</span>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto px-12" onClick={handleAddToCart}>
              <ShoppingBag className="h-5 w-5 mr-2" /> Add to Cart
            </Button>
          </div>

          <div className="border-t pt-8 space-y-4">
            <div className="flex items-start gap-4">
              <Truck className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Free Delivery</h4>
                <p className="text-sm text-gray-500">Enter your postal code for delivery availability</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Return Delivery</h4>
                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif font-semibold mb-4">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
