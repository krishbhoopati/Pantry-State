import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Camera,
  RefreshCw,
  Info,
  CheckCircle2,
  AlertCircle } from
'lucide-react';
interface FreshnessLensProps {
  onBack: () => void;
}
export function FreshnessLens({ onBack }: FreshnessLensProps) {
  const [isScanning, setIsScanning] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative h-full bg-black font-inter overflow-hidden">
      {/* Camera View Simulation */}
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "url('/bananas.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* AR Overlay */}
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center justify-between z-10">
          <button
            onClick={onBack}
            className="p-2 bg-white/20 backdrop-blur-md rounded-button text-white">
            
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-pill text-white text-sm font-medium flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Freshness Lens AI
          </div>
          <div className="w-10" />
        </div>

        {/* Scanning Reticle */}
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence>
            {isScanning &&
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              className="w-64 h-64 border-2 border-primary rounded-card relative">
              
                <motion.div
                animate={{
                  top: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_15px_rgba(76,175,125,0.8)]" />
              
              </motion.div>
            }
          </AnimatePresence>

          {/* Best Pick bounding box (Appear after scan) */}
          {!isScanning &&
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="absolute left-4 top-[10%] w-[42%] h-[70%] pointer-events-none">
            {/* Animated dashed border */}
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-xl border-2 border-primary"
              style={{ boxShadow: '0 0 12px rgba(76,175,125,0.6), inset 0 0 12px rgba(76,175,125,0.08)' }}
            />
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-primary rounded-tl-lg" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-primary rounded-tr-lg" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-primary rounded-bl-lg" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-primary rounded-br-lg" />
            {/* Top badge */}
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap shadow-lg flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Best Pick — Lasts Longest
            </motion.div>
          </motion.div>
          }

          {/* Floating Labels (Appear after scan) */}
          {!isScanning &&
          <>
              {/* Not Ripe — left */}
              <motion.div
              initial={{
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              className="absolute top-1/3 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-card shadow-lg border-l-4 border-secondary">

                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                    Not Ripe
                  </span>
                </div>
                <p className="text-sm font-bold">Green Bananas</p>
                <p className="text-[10px] text-text-secondary">
                  Ready in: 3–5 days
                </p>
              </motion.div>

              {/* Very Ripe — right */}
              <motion.div
              initial={{
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                delay: 0.2
              }}
              className="absolute bottom-1/3 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-card shadow-lg border-l-4 border-alert">

                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-alert" />
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                    Very Ripe
                  </span>
                </div>
                <p className="text-sm font-bold">Spotted Bananas</p>
                <p className="text-[10px] text-text-secondary">
                  Best for: Baking/Smoothies
                </p>
              </motion.div>
            </>
          }
        </div>

        {/* Bottom Sheet */}
        <motion.div
          initial={{
            y: 100
          }}
          animate={{
            y: 0
          }}
          className="bg-white rounded-t-[32px] p-8 pb-10 shadow-2xl z-10">
          
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-1">
                Smart Detection
              </h2>
              <p className="text-text-secondary">
                Point at any produce to see shelf life
              </p>
            </div>
            <div className="bg-primary/10 p-3 rounded-button">
              <RefreshCw
                className={`w-6 h-6 text-primary ${isScanning ? 'animate-spin' : ''}`}
                onClick={() => setIsScanning(true)} />
              
            </div>
          </div>

          <div className="bg-surface p-4 rounded-card flex items-center gap-4">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Info className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-bold text-text-primary">Pro Tip:</span>{' '}
              Bananas release ethylene gas. Store them away from other fruits to
              prevent premature ripening.
            </p>
          </div>
        </motion.div>
      </div>
    </div>);

}