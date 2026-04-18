import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Settings,
  User,
  Shield,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star } from
'lucide-react';
interface ProfileProps {
  onBack: () => void;
}
export function Profile({ onBack }: ProfileProps) {
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 bg-white rounded-button shadow-soft">
          
          <ChevronLeft className="w-6 h-6 text-text-primary" />
        </button>
        <h1 className="text-xl font-bold text-text-primary">Profile</h1>
        <button className="p-2 bg-white rounded-button shadow-soft">
          <Settings className="w-5 h-5 text-text-muted" />
        </button>
      </div>

      <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-24">
        {/* User Info */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-primary/20">
              JS
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-secondary rounded-full border-4 border-background flex items-center justify-center">
              <Star className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-text-primary">Jane Smith</h2>
          <p className="text-sm text-text-muted">Eco-Warrior Level 12</p>

          <div className="flex gap-3 mt-6">
            <div className="bg-white px-4 py-2 rounded-pill shadow-soft flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold text-text-primary">
                2.4k Points
              </span>
            </div>
            <div className="bg-white px-4 py-2 rounded-pill shadow-soft flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-xs font-bold text-text-primary">
                12 Badges
              </span>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          <div>
            <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 ml-2">
              Account Settings
            </h3>
            <div className="bg-white rounded-card shadow-soft overflow-hidden">
              {[
              {
                icon: <User className="w-5 h-5" />,
                label: 'Personal Information'
              },
              {
                icon: <Shield className="w-5 h-5" />,
                label: 'Privacy & Security'
              },
              {
                icon: <Bell className="w-5 h-5" />,
                label: 'Notification Preferences'
              }].
              map((item, i) =>
              <button
                key={i}
                className="w-full p-4 flex items-center justify-between hover:bg-surface transition-colors border-b border-gray-50 last:border-0">
                
                  <div className="flex items-center gap-4 text-text-primary">
                    <div className="text-text-muted">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </button>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 ml-2">
              Preferences
            </h3>
            <div className="bg-white rounded-card shadow-soft overflow-hidden">
              {[
              {
                icon: <Star className="w-5 h-5" />,
                label: 'Dietary Restrictions'
              },
              {
                icon: <HelpCircle className="w-5 h-5" />,
                label: 'Help & Support'
              }].
              map((item, i) =>
              <button
                key={i}
                className="w-full p-4 flex items-center justify-between hover:bg-surface transition-colors border-b border-gray-50 last:border-0">
                
                  <div className="flex items-center gap-4 text-text-primary">
                    <div className="text-text-muted">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </button>
              )}
            </div>
          </div>

          <button className="w-full p-4 flex items-center gap-4 text-alert font-bold bg-white rounded-card shadow-soft">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </div>
    </div>);

}