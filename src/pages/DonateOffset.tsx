import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Heart,
  MapPin,
  Leaf,
  ArrowRight,
  Gift } from
'lucide-react';
interface DonateOffsetProps {
  onBack: () => void;
}
export function DonateOffset({ onBack }: DonateOffsetProps) {
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 bg-white rounded-button shadow-soft">
          
          <ChevronLeft className="w-6 h-6 text-text-primary" />
        </button>
        <h1 className="text-xl font-bold text-text-primary">Donate & Offset</h1>
      </div>

      <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 space-y-6">
        {/* Points Balance */}
        <div className="bg-primary p-6 rounded-card shadow-lg shadow-primary/20 text-white flex items-center justify-between">
          <div>
            <p className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">
              Impact Balance
            </p>
            <h2 className="text-3xl font-bold">2,450 pts</h2>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Leaf className="w-8 h-8" />
          </div>
        </div>

        {/* Donation Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-text-primary flex items-center gap-2">
              <Heart className="w-5 h-5 text-alert" />
              Items to Donate
            </h3>
            <button className="text-xs font-bold text-primary">Add More</button>
          </div>

          <div className="space-y-3">
            {[
            {
              name: 'Canned Beans (4x)',
              weight: '1.2kg',
              expiry: '6 months',
              image: '🥫'
            },
            {
              name: 'Pasta Boxes (2x)',
              weight: '1kg',
              expiry: '1 year',
              image: '🍝'
            }].
            map((item, i) =>
            <div
              key={i}
              className="bg-white p-4 rounded-card shadow-soft flex items-center gap-4">
              
                <div className="w-12 h-12 bg-surface rounded-button flex items-center justify-center text-2xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-text-primary">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-text-muted">
                    Weight: {item.weight} • Best before: {item.expiry}
                  </p>
                </div>
                <button className="text-primary font-bold text-xs">Edit</button>
              </div>
            )}
          </div>
        </div>

        {/* Map Thumbnail */}
        <div className="bg-white p-4 rounded-card shadow-soft">
          <h3 className="font-bold text-text-primary mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Nearby Food Banks
          </h3>
          <div className="h-32 bg-gray-100 rounded-button mb-4 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                'radial-gradient(#9CA3AF 1px, transparent 1px)',
                backgroundSize: '15px 15px'
              }} />
            
            <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg" />
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-text-primary">
                City Food Rescue
              </p>
              <p className="text-[10px] text-text-muted">
                0.8 miles away • Open until 6PM
              </p>
            </div>
            <button className="bg-primary/10 p-2 rounded-button">
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Compost Offset */}
        <div className="bg-secondary/10 p-6 rounded-card border border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary/20 rounded-button flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-1">
                Compost Offset
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Turn your food scraps into garden gold. Each bin collected earns
                you 50 impact points.
              </p>
              <button className="bg-secondary text-white px-6 py-2 rounded-pill font-bold text-xs shadow-lg shadow-secondary/20">
                Schedule Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}