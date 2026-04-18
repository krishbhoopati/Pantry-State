import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Calendar,
  AlertCircle,
  Clock,
  CheckCircle2 } from
'lucide-react';
interface ExpiryTimelineProps {
  onBack: () => void;
}
const TIMELINE_DATA = [
{
  day: 'Today',
  date: 'Apr 18',
  items: [
  {
    name: 'Fresh Spinach',
    type: 'Produce',
    status: 'critical',
    time: 'Expiring in 4h'
  },
  {
    name: 'Greek Yogurt',
    type: 'Dairy',
    status: 'critical',
    time: 'Expiring in 8h'
  }]

},
{
  day: 'Tomorrow',
  date: 'Apr 19',
  items: [
  {
    name: 'Chicken Breast',
    type: 'Meat',
    status: 'warning',
    time: 'Expiring tomorrow'
  },
  {
    name: 'Blueberries',
    type: 'Produce',
    status: 'warning',
    time: 'Expiring tomorrow'
  }]

},
{
  day: 'Monday',
  date: 'Apr 20',
  items: [
  {
    name: 'Oat Milk',
    type: 'Dairy',
    status: 'safe',
    time: 'Expiring in 2 days'
  }]

}];

export function ExpiryTimeline({ onBack }: ExpiryTimelineProps) {
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 bg-white rounded-button shadow-soft">
            
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>
          <h1 className="text-xl font-bold text-text-primary">
            Expiry Timeline
          </h1>
        </div>
        <div className="bg-white p-2 rounded-button shadow-soft">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Summary Bar */}
      <div className="px-6 mb-8">
        <div className="bg-white p-4 rounded-card shadow-soft flex items-center justify-around">
          <div className="text-center">
            <p className="text-[10px] font-bold text-text-muted uppercase mb-1">
              Critical
            </p>
            <span className="text-lg font-bold text-alert">2</span>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div className="text-center">
            <p className="text-[10px] font-bold text-text-muted uppercase mb-1">
              Warning
            </p>
            <span className="text-lg font-bold text-secondary">5</span>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div className="text-center">
            <p className="text-[10px] font-bold text-text-muted uppercase mb-1">
              Safe
            </p>
            <span className="text-lg font-bold text-primary">14</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-10">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100" />

          <div className="space-y-10">
            {TIMELINE_DATA.map((group, gIdx) =>
            <div key={group.day} className="relative pl-12">
                {/* Date Bubble */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-text-primary">{group.day}</h3>
                  <p className="text-xs text-text-muted">{group.date}</p>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, iIdx) =>
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: gIdx * 0.2 + iIdx * 0.1
                  }}
                  className={`p-4 rounded-card shadow-soft flex items-center justify-between border-l-4 ${item.status === 'critical' ? 'border-alert bg-alert/5' : item.status === 'warning' ? 'border-secondary bg-secondary/5' : 'border-primary bg-primary/5'}`}>
                  
                      <div>
                        <h4 className="text-sm font-bold text-text-primary">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          {item.status === 'critical' ?
                      <AlertCircle className="w-3 h-3 text-alert" /> :

                      <Clock className="w-3 h-3 text-text-muted" />
                      }
                          <span className="text-[10px] font-medium text-text-secondary">
                            {item.time}
                          </span>
                        </div>
                      </div>
                      <button
                    className={`p-2 rounded-button ${item.status === 'critical' ? 'bg-alert text-white' : 'bg-white text-text-muted'}`}>
                    
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}