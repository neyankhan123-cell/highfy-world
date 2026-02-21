import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/button';
import { Filter, X } from 'lucide-react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
    setIsFilterOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-serif font-bold">Shop</h1>
          <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter className="h-4 w-4 mr-2" /> Filters
          </Button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 md:block ${
            isFilterOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full md:shadow-none'
          }`}
        >
          <div className="p-6 md:p-0 h-full overflow-y-auto">
            <div className="flex justify-between items-center md:hidden mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-8">
              <h3 className="font-serif font-semibold mb-4 text-lg">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className={`w-full text-left px-2 py-1.5 rounded-md transition-colors ${
                      selectedCategory === null
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-2 py-1.5 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-serif font-semibold mb-4 text-lg">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-gray-600">Under $100</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-gray-600">$100 - $500</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-gray-600">$500 - $1000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-gray-600">Over $1000</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-6">
            <h1 className="text-3xl font-serif font-bold">
              {selectedCategory
                ? categories.find((c) => c.id === selectedCategory)?.name
                : 'All Products'}
            </h1>
            <span className="text-gray-500 text-sm">
              Showing {filteredProducts.length} results
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">No products found in this category.</p>
              <Button
                variant="link"
                onClick={() => handleCategoryChange(null)}
                className="mt-4 text-primary"
              >
                View all products
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
