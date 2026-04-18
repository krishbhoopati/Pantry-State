import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Camera,
  Upload,
  Keyboard,
  History,
  CheckCircle2 } from
'lucide-react';
interface ReceiptScanProps {
  onBack: () => void;
}
export function ReceiptScan({ onBack }: ReceiptScanProps) {
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 bg-white rounded-button shadow-soft">
          
          <ChevronLeft className="w-6 h-6 text-text-primary" />
        </button>
        <h1 className="text-xl font-bold text-text-primary">Add Inventory</h1>
      </div>

      <div className="flex-1 px-6 py-4 space-y-6">
        {/* Main Scan Option */}
        <motion.div
          whileHover={{
            scale: 1.02
          }}
          whileTap={{
            scale: 0.98
          }}
          className="bg-primary p-8 rounded-card shadow-lg shadow-primary/20 text-white flex flex-col items-center text-center relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <Camera className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Scan Receipt</h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-[200px]">
            Instantly import items from your grocery receipt using AI
          </p>
        </motion.div>

        {/* Secondary Options */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{
              y: -4
            }}
            className="bg-white p-6 rounded-card shadow-soft flex flex-col items-center text-center gap-3">
            
            <div className="w-12 h-12 bg-secondary/10 rounded-button flex items-center justify-center">
              <Upload className="w-6 h-6 text-secondary" />
            </div>
            <span className="text-sm font-bold text-text-primary">
              Upload Photo
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              y: -4
            }}
            className="bg-white p-6 rounded-card shadow-soft flex flex-col items-center text-center gap-3">
            
            <div className="w-12 h-12 bg-blue-50 rounded-button flex items-center justify-center">
              <Keyboard className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm font-bold text-text-primary">
              Manual Entry
            </span>
          </motion.button>
        </div>

        {/* Recently Added Section */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-text-primary flex items-center gap-2">
              <History className="w-4 h-4 text-text-muted" />
              Recently Added
            </h3>
            <button className="text-xs font-bold text-primary">
              View History
            </button>
          </div>

          <div className="space-y-3">
            {[
            {
              name: 'Whole Foods Market',
              date: 'Today, 10:45 AM',
              items: 12,
              total: '$45.20'
            },
            {
              name: "Trader Joe's",
              date: 'Yesterday',
              items: 5,
              total: '$18.90'
            }].
            map((receipt, i) =>
            <div
              key={i}
              className="bg-white p-4 rounded-card shadow-soft flex items-center justify-between border-l-4 border-primary/20">
              
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface rounded-button flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">
                      {receipt.name}
                    </h4>
                    <p className="text-[10px] text-text-muted">
                      {receipt.date} • {receipt.items} items
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold text-text-primary">
                  {receipt.total}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="p-6">
        <div className="bg-secondary/5 p-4 rounded-card border border-secondary/10 flex gap-4">
          <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
            <span className="text-secondary font-bold text-xs">!</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Scanning receipts helps us track{' '}
            <span className="text-text-primary font-bold">freshness dates</span>{' '}
            automatically based on typical shelf life.
          </p>
        </div>
      </div>
    </div>);

}