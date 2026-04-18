import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Search, Plus, ShoppingCart, Filter } from 'lucide-react';
interface SmartBasketProps {
  onBack: () => void;
}
const CATEGORIES = ['All', 'Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen'];
const AISLES = ['Produce', 'Dairy', 'Bakery', 'Pantry', 'Household'];
const PRODUCTS = [
{
  id: 1,
  name: 'Organic Bananas',
  price: 0.89,
  weight: '1 lb',
  image: '🍌',
  discount: '15% OFF',
  aisle: 'Produce'
},
{
  id: 2,
  name: 'Greek Yogurt',
  price: 4.5,
  weight: '32 oz',
  image: '🥛',
  discount: null,
  aisle: 'Dairy'
},
{
  id: 3,
  name: 'Sourdough Bread',
  price: 5.99,
  weight: '1 loaf',
  image: '🍞',
  discount: 'Freshly Baked',
  aisle: 'Bakery'
},
{
  id: 4,
  name: 'Avocado',
  price: 1.25,
  weight: 'Each',
  image: '🥑',
  discount: 'Best Price',
  aisle: 'Produce'
},
{
  id: 5,
  name: 'Oat Milk',
  price: 3.99,
  weight: '64 oz',
  image: '🧃',
  discount: null,
  aisle: 'Dairy'
},
{
  id: 6,
  name: 'Red Apples',
  price: 2.49,
  weight: '2 lb',
  image: '🍎',
  discount: '10% OFF',
  aisle: 'Produce'
}];

export function SmartBasket({ onBack }: SmartBasketProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 bg-surface rounded-button">
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>
          <h1 className="text-xl font-bold text-text-primary">Smart Basket</h1>
          <button className="p-2 bg-surface rounded-button relative">
            <ShoppingCart className="w-6 h-6 text-text-primary" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              3
            </span>
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder="Search items in store..."
            className="w-full bg-surface py-3 pl-12 pr-4 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-pill text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-surface text-text-secondary'}`}>
            
              {cat}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Vertical Aisle Sidebar */}
        <div className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-8">
          {AISLES.map((aisle) =>
          <div
            key={aisle}
            className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-primary cursor-pointer transition-colors">
            
              {aisle}
            </div>
          )}
          <div className="mt-auto">
            <Filter className="w-5 h-5 text-text-muted" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.map((product, idx) =>
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: idx * 0.05
              }}
              className="bg-white p-4 rounded-card shadow-soft relative group">
              
                {product.discount &&
              <span className="absolute top-2 left-2 bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded-pill">
                    {product.discount}
                  </span>
              }
                <div className="text-4xl mb-4 mt-2 flex justify-center">
                  {product.image}
                </div>
                <h3 className="text-sm font-bold text-text-primary line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-[10px] text-text-muted mb-2">
                  {product.weight}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="w-8 h-8 bg-primary rounded-button flex items-center justify-center text-white shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Cart Summary */}
      <div className="p-6 bg-white border-t border-gray-100">
        <div className="bg-primary p-4 rounded-button flex items-center justify-between text-white shadow-lg shadow-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-button flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-medium opacity-80 uppercase tracking-wider">
                3 Items in Basket
              </p>
              <p className="font-bold">$12.45</p>
            </div>
          </div>
          <button className="bg-white text-primary px-6 py-2 rounded-pill font-bold text-sm">
            Checkout
          </button>
        </div>
      </div>
    </div>);

}