import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Bell,
  AlertCircle,
  ShoppingBag,
  Heart,
  CheckCircle2 } from
'lucide-react';
interface AlertsProps {
  onBack: () => void;
}
const NOTIFICATIONS = [
{
  id: 1,
  type: 'expiry',
  title: 'Expiring Today',
  message:
  'Your Organic Spinach and Greek Yogurt will expire in less than 6 hours.',
  time: '2h ago',
  urgency: 'critical',
  icon: <AlertCircle className="w-5 h-5" />
},
{
  id: 2,
  type: 'shop',
  title: 'Price Drop Alert',
  message: 'Avocados are now $0.99 at Whole Foods. Added to your smart list.',
  time: '5h ago',
  urgency: 'info',
  icon: <ShoppingBag className="w-5 h-5" />
},
{
  id: 3,
  type: 'impact',
  title: 'Impact Milestone',
  message: "Congratulations! You've saved 50kg of food waste this year.",
  time: 'Yesterday',
  urgency: 'success',
  icon: <Heart className="w-5 h-5" />
}];

export function Alerts({ onBack }: AlertsProps) {
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
          <h1 className="text-xl font-bold text-text-primary">Notifications</h1>
        </div>
        <button className="text-xs font-bold text-primary">
          Mark all read
        </button>
      </div>

      <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-10 space-y-4">
        {NOTIFICATIONS.map((notif, idx) =>
        <motion.div
          key={notif.id}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: idx * 0.1
          }}
          className={`bg-white p-4 rounded-card shadow-soft border-l-4 flex gap-4 ${notif.urgency === 'critical' ? 'border-alert' : notif.urgency === 'success' ? 'border-primary' : 'border-secondary'}`}>
          
            <div
            className={`w-10 h-10 rounded-button flex items-center justify-center shrink-0 ${notif.urgency === 'critical' ? 'bg-alert/10 text-alert' : notif.urgency === 'success' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
            
              {notif.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-text-primary">
                  {notif.title}
                </h3>
                <span className="text-[10px] text-text-muted">
                  {notif.time}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {notif.message}
              </p>
            </div>
          </motion.div>
        )}

        <div className="pt-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-text-muted opacity-20" />
          </div>
          <p className="text-sm text-text-muted">You&apos;re all caught up!</p>
        </div>
      </div>
    </div>);

}