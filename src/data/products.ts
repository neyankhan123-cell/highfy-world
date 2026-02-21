export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  features: string[];
}

export const categories = [
  { id: 'sofas', name: 'Sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800' },
  { id: 'beds', name: 'Beds', image: 'https://images.unsplash.com/photo-1505693416388-b0346efee535?auto=format&fit=crop&q=80&w=800' },
  { id: 'dining', name: 'Dining Tables', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800' },
  { id: 'office', name: 'Office Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { id: 'decor', name: 'Home Decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'The Cloud Sofa',
    category: 'sofas',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=800',
    description: 'Experience ultimate comfort with our Cloud Sofa, designed for modern living rooms.',
    rating: 4.8,
    reviews: 124,
    features: ['Premium Fabric', 'Modular Design', 'High-Density Foam'],
  },
  {
    id: '2',
    name: 'Minimalist Oak Bed',
    category: 'beds',
    price: 899,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
    description: 'A sturdy and elegant oak bed frame that brings warmth to your bedroom.',
    rating: 4.9,
    reviews: 89,
    features: ['Solid Oak Wood', 'Easy Assembly', 'Timeless Design'],
  },
  {
    id: '3',
    name: 'Marble Dining Table',
    category: 'dining',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
    description: 'Luxurious marble top dining table with gold-finished legs.',
    rating: 4.7,
    reviews: 56,
    features: ['Genuine Marble', 'Seating for 6', 'Stain Resistant'],
  },
  {
    id: '4',
    name: 'ErgoChair Pro',
    category: 'office',
    price: 499,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
    description: 'Ergonomic office chair designed for long hours of productivity.',
    rating: 4.6,
    reviews: 210,
    features: ['Lumbar Support', 'Breathable Mesh', 'Adjustable Height'],
  },
  {
    id: '5',
    name: 'Ceramic Vase Set',
    category: 'decor',
    price: 89,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800',
    description: 'Handcrafted ceramic vases to add a touch of elegance to any room.',
    rating: 4.9,
    reviews: 45,
    features: ['Handmade', 'Set of 3', 'Matte Finish'],
  },
  {
    id: '6',
    name: 'Velvet Armchair',
    category: 'sofas',
    price: 599,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    description: 'A statement piece for your living room in rich velvet fabric.',
    rating: 4.8,
    reviews: 78,
    features: ['Velvet Upholstery', 'Gold Legs', 'Deep Seating'],
  },
  {
    id: '7',
    name: 'Walnut Writing Desk',
    category: 'office',
    price: 749,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
    description: 'Sleek walnut desk with ample storage for a clutter-free workspace.',
    rating: 4.7,
    reviews: 34,
    features: ['Solid Walnut', 'Cable Management', '3 Drawers'],
  },
  {
    id: '8',
    name: 'Linen Bedding Set',
    category: 'beds',
    price: 199,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800',
    description: 'Breathable and soft linen bedding for a perfect night\'s sleep.',
    rating: 4.9,
    reviews: 156,
    features: ['100% French Linen', 'Stone Washed', 'Includes Pillowcases'],
  },
];
