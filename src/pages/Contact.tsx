import { Button } from '../components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question about our products or need help with an order? We're here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
              <p className="text-gray-600">123 Furniture Lane<br />Design District, NY 10012</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email Us</h3>
              <p className="text-gray-600">support@highfyworld.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="your@email.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="How can we help?" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={5} className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="Your message..." />
            </div>

            <Button size="lg" className="w-full md:w-auto">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
