import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#F5F2ED] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-primary">
              Highfy World
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crafting premium furniture for modern living spaces. Quality, comfort, and style in every piece.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/shop?category=sofas" className="hover:text-primary">Sofas</Link></li>
              <li><Link to="/shop?category=beds" className="hover:text-primary">Beds</Link></li>
              <li><Link to="/shop?category=dining" className="hover:text-primary">Dining</Link></li>
              <li><Link to="/shop?category=office" className="hover:text-primary">Office</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for exclusive offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Highfy World. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
