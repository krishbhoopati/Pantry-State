import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Lightbulb,
  Thermometer,
  Droplets,
  Wind,
  Info } from
'lucide-react';
interface StorageTipsProps {
  onBack: () => void;
}
const HOTSPOTS = [
{
  id: 1,
  x: '25%',
  y: '20%',
  title: 'Upper Shelves',
  tip: 'Best for leftovers, drinks, and ready-to-eat foods (yogurt, cheese).'
},
{
  id: 2,
  x: '70%',
  y: '45%',
  title: 'Door Racks',
  tip: 'Warmest part. Use for condiments, juices, and water. Avoid eggs/milk here.'
},
{
  id: 3,
  x: '30%',
  y: '75%',
  title: 'Crisper Drawers',
  tip: 'High humidity for leafy greens. Low humidity for fruits and veggies that rot.'
},
{
  id: 4,
  x: '50%',
  y: '15%',
  title: 'Freezer Top',
  tip: 'Keep frozen veggies and fruits here for easy access and smoothies.'
}];

export function StorageTips({ onBack }: StorageTipsProps) {
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[0]);
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 bg-white rounded-button shadow-soft">
          
          <ChevronLeft className="w-6 h-6 text-text-primary" />
        </button>
        <h1 className="text-xl font-bold text-text-primary">
          Storage Optimizer
        </h1>
      </div>

      {/* 3D Fridge Diagram Area */}
      <div className="flex-1 relative px-6 py-4">
        <div className="w-full h-full bg-white rounded-[40px] shadow-soft relative overflow-hidden border-8 border-surface flex flex-col">
          {/* Fridge Interior Illustration */}
          <div className="flex-1 bg-gradient-to-b from-blue-50 to-white p-8 relative">
            {/* Shelves */}
            <div className="absolute top-1/4 left-4 right-4 h-1 bg-blue-100 rounded-full" />
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-blue-100 rounded-full" />
            <div className="absolute top-3/4 left-4 right-4 h-1 bg-blue-100 rounded-full" />

            {/* Hotspots */}
            {HOTSPOTS.map((spot) =>
            <motion.button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{
                left: spot.x,
                top: spot.y
              }}
              animate={{
                scale: activeHotspot.id === spot.id ? 1.2 : 1
              }}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transition-colors ${activeHotspot.id === spot.id ? 'bg-primary' : 'bg-secondary'}`}>
              
                {spot.id}
                {activeHotspot.id === spot.id &&
              <motion.div
                layoutId="pulse"
                className="absolute inset-0 rounded-full bg-primary/40"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }} />

              }
              </motion.button>
            )}

            {/* Fridge Door Outline */}
            <div className="absolute top-0 right-0 bottom-0 w-1/4 bg-white/40 border-l border-blue-50 backdrop-blur-[2px]" />
          </div>

          {/* Fridge Stats */}
          <div className="p-6 bg-surface flex justify-around border-t border-blue-50">
            <div className="flex flex-col items-center gap-1">
              <Thermometer className="w-5 h-5 text-blue-500" />
              <span className="text-[10px] font-bold text-text-muted uppercase">
                Temp
              </span>
              <span className="text-sm font-bold text-text-primary">3°C</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Droplets className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-bold text-text-muted uppercase">
                Humidity
              </span>
              <span className="text-sm font-bold text-text-primary">45%</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Wind className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-bold text-text-muted uppercase">
                Airflow
              </span>
              <span className="text-sm font-bold text-text-primary">
                Optimal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tip Card */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHotspot.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            className="bg-white p-6 rounded-card shadow-soft border-l-4 border-primary">
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-button flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-text-primary">
                {activeHotspot.title}
              </h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {activeHotspot.tip}
            </p>
            <button className="mt-4 text-xs font-bold text-primary flex items-center gap-1">
              <Info className="w-3 h-3" />
              Learn more about food placement
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>);

}