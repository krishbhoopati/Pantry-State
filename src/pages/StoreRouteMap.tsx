import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Navigation, Store } from 'lucide-react';
interface StoreRouteMapProps {
  onBack: () => void;
}
export function StoreRouteMap({ onBack }: StoreRouteMapProps) {
  return (
    <div className="flex flex-col h-full bg-[#FAFAF5] font-inter">
      {/* Header */}
      <div className="p-6 flex items-center gap-4 bg-white">
        <button
          onClick={onBack}
          style={{
            backgroundColor: '#F3F4F6',
            boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
          }}
          className="p-2 rounded-[14px]">
          
          <ChevronLeft className="w-6 h-6 text-[#1A1A2E]" />
        </button>
        <h1
          style={{
            color: '#1A1A2E'
          }}
          className="text-xl font-bold">
          
          Store Route
        </h1>
      </div>

      {/* Map Area with Real Street Layout */}
      <div
        className="flex-1 relative overflow-hidden mx-6 my-4 rounded-[20px]"
        style={{
          backgroundColor: '#F2EFE9'
        }}>
        
        {/* Base Map Layer - Beige/tan like real maps */}
        <div className="absolute inset-0">
          {/* Parks/Green Spaces */}
          <div className="absolute top-[10%] right-[10%] w-24 h-20 bg-[#C8E6C9] opacity-60 rounded-sm" />
          <div className="absolute bottom-[15%] left-[15%] w-20 h-16 bg-[#C8E6C9] opacity-60 rounded-sm" />

          {/* Water/River */}
          <div className="absolute top-[40%] left-0 right-0 h-8 bg-[#B3E5FC] opacity-40 transform -rotate-12" />

          {/* Major Roads - Thicker yellow/orange lines */}
          <div className="absolute top-0 bottom-0 left-[30%] w-1 bg-[#FFD54F] opacity-70" />
          <div className="absolute top-0 bottom-0 right-[35%] w-1 bg-[#FFD54F] opacity-70" />
          <div className="absolute left-0 right-0 top-[25%] h-1 bg-[#FFD54F] opacity-70" />
          <div className="absolute left-0 right-0 bottom-[30%] h-1 bg-[#FFD54F] opacity-70" />

          {/* Minor Streets - Thin white lines */}
          <div className="absolute top-0 bottom-0 left-[45%] w-px bg-white opacity-50" />
          <div className="absolute top-0 bottom-0 left-[60%] w-px bg-white opacity-50" />
          <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white opacity-50" />
          <div className="absolute left-0 right-0 top-[15%] h-px bg-white opacity-50" />
          <div className="absolute left-0 right-0 top-[50%] h-px bg-white opacity-50" />
          <div className="absolute left-0 right-0 top-[65%] h-px bg-white opacity-50" />
          <div className="absolute left-0 right-0 bottom-[15%] h-px bg-white opacity-50" />

          {/* Neighborhood Blocks */}
          <div className="absolute top-[18%] left-[32%] w-16 h-12 bg-[#E0E0E0] opacity-40 rounded-sm" />
          <div className="absolute top-[28%] right-[38%] w-20 h-16 bg-[#E0E0E0] opacity-40 rounded-sm" />
          <div className="absolute bottom-[32%] left-[17%] w-18 h-14 bg-[#E0E0E0] opacity-40 rounded-sm" />
          <div className="absolute bottom-[18%] right-[20%] w-16 h-12 bg-[#E0E0E0] opacity-40 rounded-sm" />

          {/* Street Labels */}
          <div className="absolute top-[23%] left-[2%] text-[9px] text-gray-500 font-medium">
            Oak St
          </div>
          <div className="absolute bottom-[28%] left-[2%] text-[9px] text-gray-500 font-medium">
            Main Ave
          </div>
          <div className="absolute top-[2%] left-[28%] text-[9px] text-gray-500 font-medium transform rotate-90 origin-left">
            1st St
          </div>
          <div className="absolute top-[2%] right-[33%] text-[9px] text-gray-500 font-medium transform rotate-90 origin-left">
            Market St
          </div>
        </div>

        {/* Route Path - No Arrows */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            zIndex: 10
          }}>
          
          <motion.path
            d="M 100 80 L 100 140 L 180 140 L 180 240 L 220 240 L 220 300"
            fill="none"
            stroke="#4CAF7D"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut'
            }} />
          
        </svg>

        {/* Location Pins */}
        {/* Home Pin */}
        <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            delay: 0.3,
            type: 'spring'
          }}
          className="absolute top-[10%] left-[25%] -translate-x-1/2 z-20">
          
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundColor: '#4CAF7D'
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              
              <span className="text-white text-xl">🏠</span>
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.15)'
              }}
              className="mt-2 px-3 py-1 rounded-full text-[10px] font-bold text-[#1A1A2E]">
              
              Home
            </div>
          </div>
        </motion.div>

        {/* Store 1 Pin - Whole Foods */}
        <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            delay: 0.6,
            type: 'spring'
          }}
          className="absolute top-[35%] left-[50%] -translate-x-1/2 z-20">
          
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundColor: '#4CAF7D'
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              
              <Store className="w-5 h-5 text-white" />
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.15)'
              }}
              className="mt-2 px-3 py-1 rounded-full text-[10px] font-bold text-[#1A1A2E]">
              
              Whole Foods
            </div>
          </div>
        </motion.div>

        {/* Store 2 Pin - Trader Joe's */}
        <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            delay: 0.9,
            type: 'spring'
          }}
          className="absolute bottom-[20%] right-[30%] -translate-x-1/2 z-20">
          
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundColor: '#FFB830'
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              
              <Store className="w-5 h-5 text-white" />
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.15)'
              }}
              className="mt-2 px-3 py-1 rounded-full text-[10px] font-bold text-[#1A1A2E]">
              
              Trader Joe's
            </div>
          </div>
        </motion.div>
      </div>

      {/* Route Info Cards */}
      <div className="px-6 pb-8 space-y-4">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)',
            borderLeft: '4px solid #4CAF7D'
          }}
          className="p-4 rounded-[20px] flex items-center gap-4">
          
          <div
            style={{
              backgroundColor: '#4CAF7D10'
            }}
            className="w-12 h-12 rounded-[14px] flex items-center justify-center">
            
            <Navigation className="w-6 h-6 text-[#4CAF7D]" />
          </div>
          <div className="flex-1">
            <p
              style={{
                color: '#9CA3AF'
              }}
              className="text-xs font-medium uppercase">
              
              Next Stop
            </p>
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="font-bold">
              
              Whole Foods Market
            </h3>
            <p
              style={{
                color: '#6B7280'
              }}
              className="text-sm">
              
              Aisle 4: Organic Spinach
            </p>
          </div>
          <div className="text-right">
            <span
              style={{
                color: '#4CAF7D'
              }}
              className="font-bold">
              
              3 min
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="p-4 rounded-[20px] flex items-center gap-4 opacity-60">
          
          <div
            style={{
              backgroundColor: '#F3F4F6'
            }}
            className="w-12 h-12 rounded-[14px] flex items-center justify-center">
            
            <Store className="w-6 h-6 text-[#9CA3AF]" />
          </div>
          <div className="flex-1">
            <p
              style={{
                color: '#9CA3AF'
              }}
              className="text-xs font-medium uppercase">
              
              Following
            </p>
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="font-bold">
              
              Trader Joe's
            </h3>
            <p
              style={{
                color: '#6B7280'
              }}
              className="text-sm">
              
              Aisle 2: Oat Milk
            </p>
          </div>
          <div className="text-right">
            <span
              style={{
                color: '#6B7280'
              }}
              className="font-bold">
              
              12 min
            </span>
          </div>
        </div>
      </div>
    </div>);

}