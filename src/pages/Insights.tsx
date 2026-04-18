import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import {
  TrendingDown,
  DollarSign,
  Leaf,
  Trophy,
  ChevronRight } from
'lucide-react';
const DATA = [
{
  name: 'Mon',
  waste: 400
},
{
  name: 'Tue',
  waste: 300
},
{
  name: 'Wed',
  waste: 500
},
{
  name: 'Thu',
  waste: 200
},
{
  name: 'Fri',
  waste: 250
},
{
  name: 'Sat',
  waste: 150
},
{
  name: 'Sun',
  waste: 100
}];

export function Insights() {
  return (
    <div className="flex flex-col h-full bg-background font-inter">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-text-primary">Your Insights</h1>
        <p className="text-sm text-text-secondary">
          You&apos;re doing great this week!
        </p>
      </div>

      <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-24 space-y-6">
        {/* Stat Cards Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-card shadow-soft">
            <div className="w-10 h-10 bg-primary/10 rounded-button flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[10px] font-bold text-text-muted uppercase">
              Saved
            </p>
            <h3 className="text-xl font-bold text-text-primary">$124.50</h3>
          </div>
          <div className="bg-white p-4 rounded-card shadow-soft">
            <div className="w-10 h-10 bg-secondary/10 rounded-button flex items-center justify-center mb-3">
              <Leaf className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-[10px] font-bold text-text-muted uppercase">
              CO2 Offset
            </p>
            <h3 className="text-xl font-bold text-text-primary">12.4 kg</h3>
          </div>
        </div>

        {/* Waste Trend Chart */}
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-text-primary">Waste Trend</h3>
              <p className="text-[10px] text-text-muted">
                Weekly food waste in grams
              </p>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <TrendingDown className="w-4 h-4" />
              <span className="text-xs font-bold">-12%</span>
            </div>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DATA}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="var(--text-muted)"
                  strokeOpacity={0.1} />
                
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 10,
                    fill: 'var(--text-muted)'
                  }}
                  dy={10} />
                
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    borderRadius: 'var(--radius-button)',
                    border: 'none',
                    boxShadow: 'var(--shadow-soft)',
                    backgroundColor: 'var(--surface)'
                  }}
                  labelStyle={{
                    fontWeight: 'bold',
                    color: 'var(--text-primary)'
                  }} />
                
                <Line
                  type="monotone"
                  dataKey="waste"
                  stroke="var(--primary)"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: 'var(--primary)',
                    strokeWidth: 2,
                    stroke: 'var(--surface)'
                  }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 0
                  }} />
                
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-primary p-6 rounded-card shadow-lg shadow-primary/20 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Active Streak
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">12 Days Zero Waste</h3>
            <p className="text-white/80 text-xs">
              Keep it up! You&apos;re in the top 5% of users.
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
        </div>

        {/* Biggest Win */}
        <div className="bg-white p-4 rounded-card shadow-soft flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-button flex items-center justify-center text-2xl">
              🥬
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary">
                Biggest Win: Spinach
              </h4>
              <p className="text-[10px] text-text-muted">
                You used 100% of your spinach this month!
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
        </div>
      </div>
    </div>);

}