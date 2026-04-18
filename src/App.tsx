import React, { useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  Refrigerator,
  CalendarDays,
  ShoppingCart,
  BarChart3,
  Bell,
  User,
  Plus,
  Clock,
  Heart,
  ChevronRight,
  AlertTriangle,
  Leaf,
  Check,
  ArrowRight,
  Utensils,
  Apple,
  Carrot,
  Egg,
  Fish,
  Wheat,
  Calendar,
  X,
  Zap,
  CheckCircle2 } from
'lucide-react';
import { RecipeDetail } from './pages/RecipeDetail';
import { StoreRouteMap } from './pages/StoreRouteMap';
import { FreshnessLens } from './pages/FreshnessLens';
import { SmartBasket } from './pages/SmartBasket';
import { ReceiptScan } from './pages/ReceiptScan';
import { StorageTips } from './pages/StorageTips';
import { ExpiryTimeline } from './pages/ExpiryTimeline';
import { DonateOffset } from './pages/DonateOffset';
import { Insights } from './pages/Insights';
import { Alerts } from './pages/Alerts';
import { Profile } from './pages/Profile';
// --- Types ---
type Screen =
'splash' |
'onboarding_goals' |
'onboarding_household' |
'onboarding_dietary' |
'home' |
'kitchen' |
'kitchen_detail' |
'meal_plan' |
'ai_recipe' |
'journal' |
'learning' |
'recipe_detail' |
'shop' |
'shop_route' |
'freshness_lens' |
'smart_basket' |
'receipt_scan' |
'storage_tips' |
'expiry_timeline' |
'donate_offset' |
'insights' |
'alerts' |
'profile' |
'calendar_sync';
// --- Shared Components ---
function BottomNav({
  activeTab,
  onNavigate



}: {activeTab: string;onNavigate: (s: Screen) => void;}) {
  const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon className="w-5 h-5" />,
    screen: 'home' as Screen
  },
  {
    id: 'journal',
    label: 'Journal',
    icon: <CalendarDays className="w-5 h-5" />,
    screen: 'journal' as Screen
  },
  {
    id: 'plan',
    label: 'Plan',
    icon: <Utensils className="w-5 h-5" />,
    screen: 'meal_plan' as Screen
  },
  {
    id: 'learning',
    label: 'Learn',
    icon: <BarChart3 className="w-5 h-5" />,
    screen: 'learning' as Screen
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: <ShoppingCart className="w-5 h-5" />,
    screen: 'shop' as Screen
  }];

  return (
    <nav
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderTop: '1px solid #F3F4F6',
        backdropFilter: 'blur(10px)'
      }}
      className="px-4 py-2 flex justify-around items-center shrink-0">
      
      {tabs.map((tab) =>
      <button
        key={tab.id}
        onClick={() => onNavigate(tab.screen)}
        style={{
          color: activeTab === tab.id ? '#4CAF7D' : '#9CA3AF'
        }}
        className="flex flex-col items-center gap-1 py-2 px-3 rounded-[14px]">
        
          {tab.icon}
          <span className="text-[10px] font-bold">{tab.label}</span>
        </button>
      )}
    </nav>);

}
// --- Screen Components (Inline, Screens 1–10) ---
function SplashScreen() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-primary text-white">
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="flex flex-col items-center">
        
        <div className="w-24 h-24 bg-white/20 rounded-[28px] flex items-center justify-center mb-6">
          <Leaf className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Pantry State</h1>
        <p className="text-white/70 text-sm mt-2">Smart food, zero waste</p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5
        }}
        className="absolute bottom-16">
        
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </motion.div>
    </div>);

}
function OnboardingGoals({ onNext }: {onNext: () => void;}) {
  const [selected, setSelected] = useState<string[]>([]);
  const goals = [
  {
    id: 'waste',
    label: 'Reduce Food Waste',
    emoji: '♻️'
  },
  {
    id: 'save',
    label: 'Save Money',
    emoji: '💰'
  },
  {
    id: 'health',
    label: 'Eat Healthier',
    emoji: '🥗'
  },
  {
    id: 'plan',
    label: 'Meal Planning',
    emoji: '📅'
  },
  {
    id: 'eco',
    label: 'Lower Carbon Footprint',
    emoji: '🌍'
  }];

  const toggle = (id: string) =>
  setSelected((prev) =>
  prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
  );
  return (
    <div className="h-full flex flex-col bg-background p-8">
      <div className="flex-1">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}>

          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
            Step 1 of 3
          </p>
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            What are your goals?
          </h1>
          <p className="text-sm text-text-secondary mb-8">
            Select all that apply to personalize your experience.
          </p>
        </motion.div>
        <div className="space-y-3">
          {goals.map((goal, i) =>
          <motion.button
            key={goal.id}
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: i * 0.08
            }}
            onClick={() => toggle(goal.id)}
            className={`w-full p-4 rounded-card flex items-center gap-4 transition-all ${selected.includes(goal.id) ? 'bg-primary/10 border-2 border-primary shadow-soft' : 'bg-white border-2 border-transparent shadow-soft'}`}>
            
              <span className="text-2xl">{goal.emoji}</span>
              <span className="font-bold text-text-primary text-sm">
                {goal.label}
              </span>
              {selected.includes(goal.id) &&
            <Check className="w-5 h-5 text-primary ml-auto" />
            }
            </motion.button>
          )}
        </div>
      </div>
      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className={`w-full py-4 rounded-button font-bold text-white transition-all ${selected.length > 0 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-gray-200 text-gray-400'}`}>
        
        Continue
      </button>
    </div>);

}
function OnboardingHousehold({ onNext }: {onNext: () => void;}) {
  const [size, setSize] = useState(2);
  const sizes = [1, 2, 3, 4, 5];
  return (
    <div className="h-full flex flex-col bg-background p-8">
      <div className="flex-1">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}>

          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
            Step 2 of 3
          </p>
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Household size?
          </h1>
          <p className="text-sm text-text-secondary mb-10">
            This helps us estimate portions and reduce waste.
          </p>
        </motion.div>
        <div className="flex justify-center gap-4 mb-10">
          {sizes.map((s) =>
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`w-14 h-14 rounded-full font-bold text-lg transition-all ${size === s ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'bg-white text-text-secondary shadow-soft'}`}>
            
              {s}
            </button>
          )}
        </div>
        <div className="text-center">
          <p className="text-6xl mb-4">
            {size === 1 ? '🧑' : size === 2 ? '👫' : size <= 4 ? '👨‍👩‍👧' : '👨‍👩‍👧‍👦'}
          </p>
          <p className="text-sm text-text-secondary">
            {size === 1 ? 'Just me' : `${size} people`}
          </p>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full py-4 rounded-button font-bold text-white bg-primary shadow-lg shadow-primary/20">
        
        Continue
      </button>
    </div>);

}
function OnboardingDietary({ onNext }: {onNext: () => void;}) {
  const [selected, setSelected] = useState<string[]>([]);
  const diets = [
  {
    id: 'none',
    label: 'No Restrictions',
    emoji: '✅'
  },
  {
    id: 'vegetarian',
    label: 'Vegetarian',
    emoji: '🥬'
  },
  {
    id: 'vegan',
    label: 'Vegan',
    emoji: '🌱'
  },
  {
    id: 'gluten',
    label: 'Gluten-Free',
    emoji: '🌾'
  },
  {
    id: 'dairy',
    label: 'Dairy-Free',
    emoji: '🥛'
  },
  {
    id: 'keto',
    label: 'Keto',
    emoji: '🥑'
  }];

  const toggle = (id: string) =>
  setSelected((prev) =>
  prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
  );
  return (
    <div className="h-full flex flex-col bg-background p-8">
      <div className="flex-1">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}>

          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
            Step 3 of 3
          </p>
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Dietary preferences?
          </h1>
          <p className="text-sm text-text-secondary mb-8">
            We'll tailor recipes and shopping suggestions.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          {diets.map((diet, i) =>
          <motion.button
            key={diet.id}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: i * 0.06
            }}
            onClick={() => toggle(diet.id)}
            className={`p-4 rounded-card flex flex-col items-center gap-2 transition-all ${selected.includes(diet.id) ? 'bg-primary/10 border-2 border-primary' : 'bg-white border-2 border-transparent shadow-soft'}`}>
            
              <span className="text-2xl">{diet.emoji}</span>
              <span className="text-xs font-bold text-text-primary">
                {diet.label}
              </span>
            </motion.button>
          )}
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full py-4 rounded-button font-bold text-white bg-primary shadow-lg shadow-primary/20">
        
        Get Started
      </button>
    </div>);

}
function HomeDashboard({ onNavigate }: {onNavigate: (s: Screen) => void;}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-y-auto no-scrollbar">
      
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div>
          <p
            style={{
              color: '#6B7280'
            }}
            className="text-sm">

            Good morning 👋
          </p>
          <h1
            style={{
              color: '#1A1A2E'
            }}
            className="text-2xl font-bold">
            
            Jane
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('alerts')}
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
            }}
            className="w-10 h-10 rounded-[14px] flex items-center justify-center relative">
            
            <Bell className="w-5 h-5 text-[#9CA3AF]" />
            <div
              style={{
                backgroundColor: '#FF6B6B',
                border: '2px solid #FAFAF5'
              }}
              className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full" />
            
          </button>
          <button
            onClick={() => onNavigate('profile')}
            style={{
              backgroundColor: '#4CAF7D',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.07)',
              color: '#FFFFFF'
            }}
            className="w-10 h-10 rounded-[14px] flex items-center justify-center font-bold text-sm">
            
            JS
          </button>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className="px-6 mb-6">
        <button
          onClick={() => onNavigate('expiry_timeline')}
          style={{
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            border: '1px solid rgba(255, 107, 107, 0.2)'
          }}
          className="w-full p-4 rounded-[20px] flex items-center gap-4">
          
          <div
            style={{
              backgroundColor: 'rgba(255, 107, 107, 0.2)'
            }}
            className="w-10 h-10 rounded-[14px] flex items-center justify-center">
            
            <AlertTriangle className="w-5 h-5 text-[#FF6B6B]" />
          </div>
          <div className="flex-1 text-left">
            <p
              style={{
                color: '#1A1A2E'
              }}
              className="text-sm font-bold">
              
              2 items expiring today
            </p>
            <p
              style={{
                color: '#6B7280'
              }}
              className="text-[10px]">
              
              Spinach, Greek Yogurt
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-[#FF6B6B]" />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <h2
          style={{
            color: '#1A1A2E'
          }}
          className="font-bold mb-4">
          
          Quick Actions
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {[
          {
            icon: <Utensils className="w-5 h-5" />,
            label: 'Cook',
            screen: 'meal_plan' as Screen
          },
          {
            icon: <ShoppingCart className="w-5 h-5" />,
            label: 'Shop',
            screen: 'shop' as Screen
          },
          {
            icon: <Refrigerator className="w-5 h-5" />,
            label: 'Kitchen',
            screen: 'kitchen' as Screen
          },
          {
            icon: <Heart className="w-5 h-5" />,
            label: 'Donate',
            screen: 'donate_offset' as Screen
          }].
          map((action) =>
          <button
            key={action.label}
            onClick={() => onNavigate(action.screen)}
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
            }}
            className="p-3 rounded-[20px] flex flex-col items-center gap-2">
            
              <div
              style={{
                color: '#4CAF7D'
              }}>
              
                {action.icon}
              </div>
              <span
              style={{
                color: '#6B7280'
              }}
              className="text-[10px] font-bold">
              
                {action.label}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Kitchen Preview */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2
            style={{
              color: '#1A1A2E'
            }}
            className="font-bold">
            
            Your Kitchen
          </h2>
          <button
            onClick={() => onNavigate('kitchen')}
            style={{
              color: '#4CAF7D'
            }}
            className="text-xs font-bold">
            
            View All
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[
          {
            emoji: '🥬',
            name: 'Spinach',
            status: 'Expiring!',
            color: '#FF6B6B'
          },
          {
            emoji: '🥛',
            name: 'Oat Milk',
            status: '3 days left',
            color: '#FFB830'
          },
          {
            emoji: '🥚',
            name: 'Eggs (6)',
            status: 'Fresh',
            color: '#4CAF7D'
          }].
          map((item) =>
          <div
            key={item.name}
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
            }}
            className="p-4 rounded-[20px] flex flex-col items-center gap-2 min-w-[100px]">
            
              <span className="text-3xl">{item.emoji}</span>
              <span
              style={{
                color: '#1A1A2E'
              }}
              className="text-xs font-bold">
              
                {item.name}
              </span>
              <span
              className="text-[10px] font-bold"
              style={{
                color: item.color
              }}>
              
                {item.status}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Suggested Recipe */}
      <div className="px-6 mb-6">
        <h2
          style={{
            color: '#1A1A2E'
          }}
          className="font-bold mb-4">
          
          Cook This Tonight
        </h2>
        <button
          onClick={() => onNavigate('recipe_detail')}
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="w-full rounded-[20px] overflow-hidden text-left">
          
          <img
            src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800"
            className="w-full h-36 object-cover" />
          
          <div className="p-4">
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="font-bold mb-1">
              
              Spinach & Egg Frittata
            </h3>
            <p
              style={{
                color: '#9CA3AF'
              }}
              className="text-xs mb-3">
              
              Uses 3 items from your kitchen
            </p>
            <div className="flex items-center gap-2">
              <span
                style={{
                  backgroundColor: 'rgba(76, 175, 125, 0.1)',
                  color: '#4CAF7D'
                }}
                className="text-[10px] font-bold px-3 py-1 rounded-full">
                
                15 min
              </span>
              <span
                style={{
                  backgroundColor: 'rgba(76, 175, 125, 0.1)',
                  color: '#4CAF7D'
                }}
                className="text-[10px] font-bold px-3 py-1 rounded-full">
                
                Easy
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>);

}
function KitchenScreen({ onNavigate }: {onNavigate: (s: Screen) => void;}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-hidden flex flex-col">
      
      <div className="flex justify-between items-center px-6 pt-6 pb-2">
        <div>
          <h1
            style={{
              color: '#1A1A2E'
            }}
            className="text-2xl font-bold">
            
            My Kitchen
          </h1>
          <p
            style={{
              color: '#6B7280'
            }}
            className="text-sm">
            
            Smart Inventory
          </p>
        </div>
        <button
          onClick={() => onNavigate('receipt_scan')}
          style={{
            backgroundColor: '#4CAF7D',
            boxShadow: '0px 4px 20px rgba(76, 175, 125, 0.3)'
          }}
          className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white">
          
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Realistic Fridge - Zoomed and Moved Up */}
      <div
        className="flex-1 relative cursor-pointer -mt-16"
        onClick={() => onNavigate('storage_tips')}>
        
        {/* Real Fridge Photo - Slightly Zoomed and Positioned Up */}
        <img
          src="/pasted-image.png"
          alt="Open Fridge"
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            transform: 'scale(1.32)'
          }} />
        

        {/* Interactive Overlay Layer */}
        <div className="absolute inset-0">
          {/* Expiry Tag on Spinach/Greens (Top Left Door) */}
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
            className="absolute top-[28%] left-[12%] cursor-pointer z-10"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('kitchen_detail');
            }}>
            
            <div
              style={{
                backgroundColor: '#FF6B6B',
                boxShadow: '0px 4px 12px rgba(255, 107, 107, 0.6)'
              }}
              className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap animate-pulse">
              
              🥬 Expiring Today!
            </div>
          </motion.div>

          {/* Expiry Tag on Eggs (Middle Left Shelf) */}
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 0.5,
              type: 'spring'
            }}
            className="absolute top-[35%] left-[18%] z-10">
            
            <div
              style={{
                backgroundColor: '#FFB830',
                boxShadow: '0px 4px 12px rgba(255, 184, 48, 0.6)'
              }}
              className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap">
              
              🥚 3 days left
            </div>
          </motion.div>

          {/* Expiry Tag on Vegetables in Drawer (Bottom Center) */}
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 0.7,
              type: 'spring'
            }}
            className="absolute bottom-[28%] left-[35%] z-10">
            
            <div
              style={{
                backgroundColor: '#4CAF7D',
                boxShadow: '0px 4px 12px rgba(76, 175, 125, 0.6)'
              }}
              className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap">
              
              🥗 Fresh
            </div>
          </motion.div>

          {/* Expiry Tag on Milk/Juice (Right Door) */}
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
            className="absolute top-[45%] right-[8%] z-10">
            
            <div
              style={{
                backgroundColor: '#FFB830',
                boxShadow: '0px 4px 12px rgba(255, 184, 48, 0.6)'
              }}
              className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap">
              
              🥛 5 days left
            </div>
          </motion.div>

          {/* Fridge Status Overlay */}
          <div
            className="absolute bottom-6 left-6 right-6 p-4 rounded-[20px] flex items-center justify-between z-10"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
            }}>
            
            <div>
              <p
                style={{
                  color: '#9CA3AF'
                }}
                className="text-[10px] font-bold uppercase">
                
                Fridge Status
              </p>
              <p
                style={{
                  color: '#1A1A2E'
                }}
                className="text-sm font-bold">
                
                Optimal • 3°C
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['🥬', '🥚', '🥛'].map((emoji, i) =>
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #F3F4F6',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                  }}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm">
                  
                    {emoji}
                  </div>
                )}
              </div>
              <span
                style={{
                  color: '#FF6B6B'
                }}
                className="text-xs font-bold ml-1">
                
                2 expiring
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Compact */}
      <div className="px-6 pb-6 grid grid-cols-2 gap-3">
        <button
          onClick={() => onNavigate('expiry_timeline')}
          style={{
            backgroundColor: '#F3F4F6',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
          }}
          className="p-3 rounded-[16px] flex items-center gap-2">
          
          <div
            style={{
              backgroundColor: '#FF6B6B10'
            }}
            className="w-8 h-8 rounded-[12px] flex items-center justify-center">
            
            <Clock className="w-4 h-4 text-[#FF6B6B]" />
          </div>
          <span
            style={{
              color: '#1A1A2E'
            }}
            className="text-sm font-bold">
            
            Expiring
          </span>
        </button>
        <button
          onClick={() => onNavigate('donate_offset')}
          style={{
            backgroundColor: '#F3F4F6',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
          }}
          className="p-3 rounded-[16px] flex items-center gap-2">
          
          <div
            style={{
              backgroundColor: '#4CAF7D10'
            }}
            className="w-8 h-8 rounded-[12px] flex items-center justify-center">
            
            <Heart className="w-4 h-4 text-[#4CAF7D]" />
          </div>
          <span
            style={{
              color: '#1A1A2E'
            }}
            className="text-sm font-bold">
            
            Donate
          </span>
        </button>
      </div>
    </div>);

}
function KitchenDetail({ onBack }: {onBack: () => void;}) {
  return (
    <div className="h-full bg-background">
      <div className="p-6">
        <button
          onClick={onBack}
          className="p-2 bg-white rounded-button shadow-soft mb-6">
          
          <ChevronRight className="w-6 h-6 text-text-primary rotate-180" />
        </button>

        <div className="bg-white rounded-card shadow-soft p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-card flex items-center justify-center text-4xl">
              🥬
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">
                Baby Spinach
              </h1>
              <p className="text-sm text-text-secondary">Organic • 200g bag</p>
            </div>
          </div>

          <div className="bg-alert/10 p-4 rounded-button mb-6 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-alert" />
            <div>
              <p className="text-sm font-bold text-alert">Expiring Today</p>
              <p className="text-[10px] text-text-muted">
                Purchased 5 days ago
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Location</span>
              <span className="text-sm font-bold text-text-primary">
                Crisper Drawer
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Quantity</span>
              <span className="text-sm font-bold text-text-primary">
                ~150g remaining
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Best Before</span>
              <span className="text-sm font-bold text-alert">Today</span>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-text-primary mb-3">Suggested Actions</h3>
        <div className="space-y-3">
          <button className="w-full bg-primary text-white p-4 rounded-button font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            <Utensils className="w-5 h-5" />
            Cook Tonight — Frittata
          </button>
          <button className="w-full bg-white text-text-primary p-4 rounded-button font-bold shadow-soft flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Donate Before Expiry
          </button>
        </div>
      </div>
    </div>);

}
function AIRecipeGenerator({
  onNavigate


}: {onNavigate: (s: Screen) => void;}) {
  const [selectedIngredients, setSelectedIngredients] = useState([
  'Milk',
  'Egg',
  'Onion',
  'Potato']
  );
  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients((prev) => prev.filter((i) => i !== ingredient));
  };
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-y-auto no-scrollbar">
      
      {/* Header */}
      <div className="p-6 pb-4">
        <h1
          style={{
            color: '#1A1A2E'
          }}
          className="text-3xl font-bold">

          AI Recipe
        </h1>
      </div>

      {/* Recipe Generator Card */}
      <div className="px-6 mb-6">
        <div
          style={{
            background: 'linear-gradient(180deg, #E8D4F0 0%, #FFF4D6 100%)',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-6">
          
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-4">
            <div
              style={{
                backgroundColor: '#FFFFFF'
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center">
              
              <span className="text-2xl">✨</span>
            </div>
            <p
              style={{
                color: '#1A1A2E'
              }}
              className="text-sm font-medium">
              
              Crafting a recipe from your
              <br />
              kitchen treasures
            </p>
          </div>

          {/* Ingredient Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedIngredients.map((ingredient) =>
            <div
              key={ingredient}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
              }}
              className="px-4 py-2 rounded-full flex items-center gap-2">
              
                <span className="text-sm">🥔</span>
                <span
                style={{
                  color: '#1A1A2E'
                }}
                className="text-sm font-medium">
                
                  {ingredient}
                </span>
                <button onClick={() => removeIngredient(ingredient)}>
                  <span
                  style={{
                    color: '#6B7280'
                  }}
                  className="text-sm">
                  
                    ×
                  </span>
                </button>
              </div>
            )}
            <button
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)'
              }}
              className="px-4 py-2 rounded-full flex items-center gap-2">
              
              <Plus className="w-4 h-4 text-[#1A1A2E]" />
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="text-sm font-medium">
                
                Add ingredients
              </span>
            </button>
          </div>

          {/* Generate Button */}
          <button
            onClick={() => onNavigate('recipe_detail')}
            style={{
              backgroundColor: '#1A1A2E',
              color: '#FFFFFF'
            }}
            className="w-full py-4 rounded-full font-bold flex items-center justify-center gap-2">
            
            <span className="text-lg">✨</span>
            Generate Recipe
          </button>
        </div>
      </div>

      {/* Unlimited Recipes Card (No Fee) */}
      <div className="px-6 mb-6">
        <div
          style={{
            backgroundColor: '#FFD89C',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-5 flex items-center gap-4">
          
          <div className="flex-1">
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold mb-1">
              
              Generate Unlimited
              <br />
              Recipes!
            </h3>
            <p
              style={{
                color: '#6B7280'
              }}
              className="text-xs">
              
              Create as many recipes as you want
            </p>
          </div>
          <div className="text-5xl">🥘</div>
        </div>
      </div>

      {/* History Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2
            style={{
              color: '#1A1A2E'
            }}
            className="text-xl font-bold">
            
            History
          </h2>
          <button
            style={{
              color: '#6B7280'
            }}
            className="text-sm font-medium">
            
            See all
          </button>
        </div>

        {/* History Card */}
        <button
          onClick={() => onNavigate('recipe_detail')}
          style={{
            backgroundColor: '#FFE5D0',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="w-full rounded-[24px] p-4 text-left">
          
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200"
                alt="Pizza"
                className="w-full h-full object-cover" />
              
            </div>
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold flex-1">
              
              Pizza Cooking
            </h3>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <span>🔥</span>
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="font-medium">
                
                975 kcal
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#1A1A2E]" />
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="font-medium">
                
                20 min
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>🥘</span>
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="font-medium">
                
                5 ing
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>);

}
function CalendarSync({ onBack }: { onBack: () => void }) {
  const [googleConnected, setGoogleConnected] = useState(false);
  const [appleConnected, setAppleConnected] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);
  const [blockedSlots, setBlockedSlots] = useState([
    { day: 'Mon', time: '6:30 PM', meal: 'Gnocchi a la Sorrentina', duration: '20 min', color: '#D4F4DD' },
    { day: 'Wed', time: '7:00 PM', meal: 'Chicken Salad Wraps', duration: '30 min', color: '#C8F0E0' },
    { day: 'Fri', time: '6:00 PM', meal: 'Spinach & Egg Frittata', duration: '15 min', color: '#E8D4F0' },
  ]);

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const busySlots = [1, 3]; // Tuesday, Thursday busy

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSyncDone(true);
      setTimeout(() => setSyncDone(false), 2500);
    }, 1800);
  };

  return (
    <div style={{ backgroundColor: '#FAFAF5' }} className="flex-1 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="px-6 pt-4 pb-4 flex items-center gap-4">
        <button
          onClick={onBack}
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0,0,0,0.07)' }}
          className="w-10 h-10 rounded-[14px] flex items-center justify-center">
          <ChevronRight className="w-5 h-5 text-[#1A1A2E] rotate-180" />
        </button>
        <div className="flex-1">
          <h1 style={{ color: '#1A1A2E' }} className="text-xl font-bold">Cook Schedule</h1>
          <p style={{ color: '#9CA3AF' }} className="text-[11px]">Sync meals with your calendar</p>
        </div>
        <div
          style={{ backgroundColor: 'rgba(76, 175, 125, 0.12)' }}
          className="px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#4CAF7D] animate-pulse" />
          <span style={{ color: '#4CAF7D' }} className="text-[10px] font-bold">Live</span>
        </div>
      </div>

      {/* Connected Calendars */}
      <div className="px-6 mb-5">
        <p style={{ color: '#9CA3AF' }} className="text-[10px] font-bold uppercase tracking-widest mb-3">
          Connected Calendars
        </p>
        <div className="space-y-3">
          {/* Google Calendar */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}
            className="p-4 rounded-[20px] flex items-center gap-4">
            <div
              style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}
              className="w-11 h-11 rounded-[14px] flex items-center justify-center text-lg">
              📅
            </div>
            <div className="flex-1">
              <p style={{ color: '#1A1A2E' }} className="text-sm font-bold">Google Calendar</p>
              <p style={{ color: '#9CA3AF' }} className="text-[11px]">
                {googleConnected ? 'jane@gmail.com' : 'Not connected'}
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setGoogleConnected(!googleConnected)}
              style={{
                backgroundColor: googleConnected ? 'rgba(76,175,125,0.12)' : '#4CAF7D',
                color: googleConnected ? '#4CAF7D' : '#FFFFFF',
              }}
              className="px-4 py-2 rounded-full text-[11px] font-bold">
              {googleConnected ? 'Connected' : 'Connect'}
            </motion.button>
          </motion.div>

          {/* Apple Calendar */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}
            className="p-4 rounded-[20px] flex items-center gap-4">
            <div
              style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)' }}
              className="w-11 h-11 rounded-[14px] flex items-center justify-center text-lg">
              🍎
            </div>
            <div className="flex-1">
              <p style={{ color: '#1A1A2E' }} className="text-sm font-bold">Apple Calendar</p>
              <p style={{ color: '#9CA3AF' }} className="text-[11px]">
                {appleConnected ? 'iCloud synced' : 'Not connected'}
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setAppleConnected(!appleConnected)}
              style={{
                backgroundColor: appleConnected ? 'rgba(76,175,125,0.12)' : '#4CAF7D',
                color: appleConnected ? '#4CAF7D' : '#FFFFFF',
              }}
              className="px-4 py-2 rounded-full text-[11px] font-bold">
              {appleConnected ? 'Connected' : 'Connect'}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Weekly View */}
      <div className="px-6 mb-5">
        <p style={{ color: '#9CA3AF' }} className="text-[10px] font-bold uppercase tracking-widest mb-3">
          This Week
        </p>
        <div
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}
          className="p-5 rounded-[20px]">
          <div className="flex justify-between mb-4">
            {weekDays.map((d, i) => {
              const hasCook = blockedSlots.some((s) => ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]?.startsWith(s.day.slice(0,3)) || (i===0&&s.day==='Mon')||(i===2&&s.day==='Wed')||(i===4&&s.day==='Fri'));
              const isBusy = busySlots.includes(i);
              return (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <span style={{ color: '#9CA3AF' }} className="text-[10px] font-bold">{d}</span>
                  <div
                    style={{
                      backgroundColor: hasCook ? '#4CAF7D' : isBusy ? '#FF6B6B' : '#F3F4F6',
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                    }}
                    className="flex items-center justify-center">
                    {hasCook && <Utensils className="w-3.5 h-3.5 text-white" />}
                    {isBusy && !hasCook && <X className="w-3 h-3 text-white" />}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-[4px] bg-[#4CAF7D]" />
              <span style={{ color: '#6B7280' }} className="text-[10px]">Cooking blocked</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-[4px] bg-[#FF6B6B]" />
              <span style={{ color: '#6B7280' }} className="text-[10px]">Busy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blocked Cooking Slots */}
      <div className="px-6 mb-5">
        <div className="flex items-center justify-between mb-3">
          <p style={{ color: '#9CA3AF' }} className="text-[10px] font-bold uppercase tracking-widest">
            Cooking Blocks
          </p>
          <button style={{ color: '#4CAF7D' }} className="text-[11px] font-bold flex items-center gap-1">
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
        <div className="space-y-3">
          {blockedSlots.map((slot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{ backgroundColor: slot.color, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}
              className="p-4 rounded-[18px] flex items-center gap-4">
              <div
                style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                className="w-10 h-10 rounded-[12px] flex items-center justify-center">
                <Utensils className="w-4.5 h-4.5 text-[#1A1A2E]" style={{ width: 18, height: 18 }} />
              </div>
              <div className="flex-1">
                <p style={{ color: '#1A1A2E' }} className="text-sm font-bold">{slot.meal}</p>
                <p style={{ color: '#6B7280' }} className="text-[11px]">{slot.day} · {slot.time} · {slot.duration}</p>
              </div>
              <button
                onClick={() => setBlockedSlots((prev) => prev.filter((_, j) => j !== i))}
                style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                className="w-8 h-8 rounded-full flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[#6B7280]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sync Button */}
      <div className="px-6 pb-8">
        <AnimatePresence mode="wait">
          {syncDone ? (
            <motion.div
              key="done"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ backgroundColor: 'rgba(76,175,125,0.12)', border: '1.5px solid rgba(76,175,125,0.3)' }}
              className="w-full py-4 rounded-[16px] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4CAF7D]" />
              <span style={{ color: '#4CAF7D' }} className="font-bold text-sm">Synced to your calendar!</span>
            </motion.div>
          ) : (
            <motion.button
              key="sync"
              whileTap={{ scale: 0.97 }}
              onClick={handleSync}
              disabled={syncing}
              style={{
                background: syncing ? '#9CA3AF' : 'linear-gradient(135deg, #4CAF7D 0%, #3d9e6e 100%)',
                boxShadow: syncing ? 'none' : '0px 8px 24px rgba(76,175,125,0.35)',
                color: '#FFFFFF',
              }}
              className="w-full py-4 rounded-[16px] flex items-center justify-center gap-2 font-bold text-sm">
              {syncing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Syncing…
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Sync Meal Plan with Calendar
                </>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MealPlan({ onNavigate }: {onNavigate: (s: Screen) => void;}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-y-auto no-scrollbar">

      {/* Header */}
      <div className="p-6 pb-4 flex items-center justify-between">
        <h1
          style={{
            color: '#1A1A2E'
          }}
          className="text-3xl font-bold">

          Meal Plan 🔥
        </h1>
        <button
          onClick={() => onNavigate('calendar_sync')}
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)',
            border: '1px solid rgba(76, 175, 125, 0.2)'
          }}
          className="w-11 h-11 rounded-[14px] flex items-center justify-center relative">
          <Calendar className="w-5 h-5" style={{ color: '#4CAF7D' }} />
          <div
            style={{
              backgroundColor: '#4CAF7D',
              border: '2px solid #FFFFFF'
            }}
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center">
            <span className="text-white font-bold" style={{ fontSize: 7 }}>2</span>
          </div>
        </button>
      </div>

      {/* Personalization Banner - Now links to AI Recipe */}
      <div className="px-6 mb-6">
        <button
          onClick={() => onNavigate('ai_recipe')}
          style={{
            backgroundColor: '#FFF4D6',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="w-full rounded-[24px] p-6 relative overflow-hidden text-left">
          
          <div className="relative z-10 max-w-[60%]">
            <h2
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold mb-2">
              
              Generate AI Recipe 🥕🍅
            </h2>
            <p
              style={{
                color: '#6B7280'
              }}
              className="text-xs mb-4 leading-relaxed">
              
              Create recipes from your kitchen ingredients using AI
            </p>
            <div
              style={{
                backgroundColor: '#FFB830',
                color: '#1A1A2E',
                boxShadow: '0px 2px 8px rgba(255, 184, 48, 0.3)'
              }}
              className="inline-flex px-6 py-3 rounded-full font-bold text-sm">
              
              Try AI Recipe
            </div>
          </div>
          <div className="absolute -right-4 -bottom-2 w-32 h-32 opacity-30 text-6xl">
            ✨
          </div>
        </button>
      </div>

      {/* Section Header */}
      <div className="px-6 mb-4 flex items-center justify-between">
        <h2
          style={{
            color: '#1A1A2E'
          }}
          className="text-xl font-bold">
          
          Lunch or Dinner
        </h2>
        <button
          style={{
            color: '#6B7280'
          }}
          className="text-sm font-medium">
          
          See all
        </button>
      </div>

      {/* Recipe Cards */}
      <div className="px-6 space-y-4 pb-24">
        {/* Card 1 - Gnocchi */}
        <div
          style={{
            backgroundColor: '#D4F4DD',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-5 relative overflow-hidden min-h-[140px] flex items-center">
          
          {/* Heart Icon */}
          <button
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10">
            
            <Heart className="w-5 h-5 text-[#1A1A2E]" fill="#1A1A2E" />
          </button>

          {/* Plus Icon */}
          <button
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10">
            
            <Plus className="w-5 h-5 text-[#1A1A2E]" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-4">
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold mb-3 mt-8">
              
              Gnocchi a la
              <br />
              Sorrentina
            </h3>
            <div className="flex items-center gap-2">
              <div
                style={{
                  backgroundColor: '#1A1A2E'
                }}
                className="w-5 h-5 rounded-full flex items-center justify-center">
                
                <Clock className="w-3 h-3 text-white" />
              </div>
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="text-sm font-medium">
                
                20 min
              </span>
            </div>
          </div>

          {/* Food Image Circle */}
          <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=300"
              alt="Gnocchi"
              className="w-full h-full object-cover" />
            
          </div>
        </div>

        {/* Card 2 - Chicken Salad */}
        <div
          style={{
            backgroundColor: '#C8F0E0',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-5 relative overflow-hidden min-h-[140px] flex items-center">
          
          {/* Heart Icon */}
          <button
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10">
            
            <Heart className="w-5 h-5 text-[#1A1A2E]" />
          </button>

          {/* Plus Icon */}
          <button
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10">
            
            <Plus className="w-5 h-5 text-[#1A1A2E]" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-4">
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold mb-3 mt-8">
              
              Chicken Salad
              <br />
              Lettuce Wraps
            </h3>
            <div className="flex items-center gap-2">
              <div
                style={{
                  backgroundColor: '#1A1A2E'
                }}
                className="w-5 h-5 rounded-full flex items-center justify-center">
                
                <Clock className="w-3 h-3 text-white" />
              </div>
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="text-sm font-medium">
                
                30 min
              </span>
            </div>
          </div>

          {/* Food Image Circle */}
          <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300"
              alt="Salad"
              className="w-full h-full object-cover" />
            
          </div>
        </div>

        {/* Card 3 - Spinach Frittata */}
        <div
          style={{
            backgroundColor: '#E8D4F0',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-5 relative overflow-hidden min-h-[140px] flex items-center">
          
          {/* Heart Icon */}
          <button
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10">
            
            <Heart className="w-5 h-5 text-[#1A1A2E]" />
          </button>

          {/* Plus Icon */}
          <button
            style={{
              backgroundColor: '#FFFFFF'
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10">
            
            <Plus className="w-5 h-5 text-[#1A1A2E]" />
          </button>

          {/* Content */}
          <div className="flex-1 pr-4">
            <h3
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold mb-3 mt-8">
              
              Spinach & Egg
              <br />
              Frittata
            </h3>
            <div className="flex items-center gap-2">
              <div
                style={{
                  backgroundColor: '#1A1A2E'
                }}
                className="w-5 h-5 rounded-full flex items-center justify-center">
                
                <Clock className="w-3 h-3 text-white" />
              </div>
              <span
                style={{
                  color: '#1A1A2E'
                }}
                className="text-sm font-medium">
                
                15 min
              </span>
            </div>
          </div>

          {/* Food Image Circle */}
          <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=300"
              alt="Frittata"
              className="w-full h-full object-cover" />
            
          </div>
        </div>
      </div>
    </div>);

}
function SmartShopList({ onNavigate }: {onNavigate: (s: Screen) => void;}) {
  const items = [
  {
    name: 'Feta Cheese',
    store: 'Whole Foods',
    price: '$4.99',
    emoji: '🧀',
    needed: true
  },
  {
    name: 'Bananas',
    store: "Trader Joe's",
    price: '$0.89',
    emoji: '🍌',
    needed: true
  },
  {
    name: 'Oat Milk',
    store: 'Whole Foods',
    price: '$3.99',
    emoji: '🧃',
    needed: true
  },
  {
    name: 'Sourdough Bread',
    store: 'Bakery',
    price: '$5.99',
    emoji: '🍞',
    needed: false
  }];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-y-auto no-scrollbar p-6">

      <h1 className="text-2xl font-bold text-text-primary mb-2">
        Smart Shop List
      </h1>
      <p className="text-sm text-text-secondary mb-6">
        Optimized for 2 stores nearby
      </p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => onNavigate('shop_route')}
          className="flex-1 bg-primary text-white py-3 rounded-button font-bold text-sm shadow-lg shadow-primary/20">
          
          Start Route
        </button>
        <button
          onClick={() => onNavigate('smart_basket')}
          className="flex-1 bg-white text-text-primary py-3 rounded-button font-bold text-sm shadow-soft">
          
          Browse Aisle
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item) =>
        <motion.div
          key={item.name}
          whileTap={{
            scale: 0.98
          }}
          onClick={() =>
          item.name === 'Bananas' ? onNavigate('freshness_lens') : null
          }
          className="bg-white p-4 rounded-card shadow-soft flex items-center gap-4 cursor-pointer">
          
            <div className="w-12 h-12 bg-surface rounded-button flex items-center justify-center text-2xl">
              {item.emoji}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-text-primary">
                {item.name}
              </h3>
              <p className="text-[10px] text-text-muted">{item.store}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-text-primary">
                {item.price}
              </span>
              {item.needed &&
            <p className="text-[10px] text-primary font-bold">Needed</p>
            }
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-6 bg-secondary/10 p-4 rounded-card border border-secondary/20 flex items-center gap-3">
        <span className="text-2xl">💡</span>
        <p className="text-xs text-text-secondary">
          <span className="font-bold text-text-primary">Price Alert:</span>{' '}
          Bananas are 20% cheaper at Trader Joe's today.
        </p>
      </div>
    </div>);

}
function Journal({ onNavigate }: {onNavigate: (s: Screen) => void;}) {
  const meals = [
  {
    name: 'Breakfast',
    calories: 631,
    color: '#E8D4F0',
    image:
    'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Lunch',
    calories: 486,
    color: '#FFF4D6',
    image:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Dinner',
    calories: 359,
    color: '#C8F0E0',
    image:
    'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Snack',
    calories: 193,
    color: '#FFD89C',
    image:
    'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=200'
  }];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-y-auto no-scrollbar">
      
      {/* Header */}
      <div className="p-6 pb-4">
        <h1
          style={{
            color: '#1A1A2E'
          }}
          className="text-3xl font-bold">

          Journal
        </h1>
      </div>

      {/* Calories Card */}
      <div className="px-6 mb-6">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-6">
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <div>
                <h3
                  style={{
                    color: '#1A1A2E'
                  }}
                  className="font-bold">
                  
                  Calories
                </h3>
                <p
                  style={{
                    color: '#6B7280'
                  }}
                  className="text-xs">
                  
                  Week Days
                </p>
              </div>
            </div>
            <button
              style={{
                backgroundColor: '#F3F4F6'
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center">
              
              <CalendarDays className="w-5 h-5 text-[#1A1A2E]" />
            </button>
          </div>

          {/* Calorie Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div
              style={{
                backgroundColor: '#F3F4F6'
              }}
              className="p-3 rounded-xl">
              
              <p
                style={{
                  color: '#6B7280'
                }}
                className="text-xs mb-1">
                
                Consumed
              </p>
              <p
                style={{
                  color: '#1A1A2E'
                }}
                className="text-lg font-bold">
                
                00 cal
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#F3F4F6'
              }}
              className="p-3 rounded-xl">
              
              <p
                style={{
                  color: '#6B7280'
                }}
                className="text-xs mb-1">
                
                Remaining
              </p>
              <p
                style={{
                  color: '#1A1A2E'
                }}
                className="text-lg font-bold">
                
                00 cal
              </p>
            </div>
          </div>

          {/* Macro Circles */}
          <div className="flex justify-around">
            {[
            {
              label: 'Power Carbs',
              value: 0,
              max: 150,
              color: '#FFB830'
            },
            {
              label: 'Protein Power',
              value: 0,
              max: 113,
              color: '#FFB830'
            },
            {
              label: 'Healthy Fat',
              value: 0,
              max: 50,
              color: '#FFB830'
            }].
            map((macro) =>
            <div key={macro.label} className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-2">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#F3F4F6"
                    strokeWidth="6" />
                  
                    <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke={macro.color}
                    strokeWidth="6"
                    strokeDasharray="176"
                    strokeDashoffset="176" />
                  
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                    style={{
                      color: '#1A1A2E'
                    }}
                    className="text-xs font-bold">
                    
                      {macro.value}/{macro.max}
                    </span>
                  </div>
                </div>
                <p
                style={{
                  color: '#6B7280'
                }}
                className="text-[10px] text-center leading-tight">
                
                  {macro.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Meal Cards */}
      <div className="px-6 grid grid-cols-2 gap-4 pb-24">
        {meals.map((meal) =>
        <button
          key={meal.name}
          onClick={() => onNavigate('recipe_detail')}
          style={{
            backgroundColor: meal.color,
            boxShadow: '0px 4px 20px rgba(0,0,0,0.07)'
          }}
          className="rounded-[24px] p-4 text-left relative aspect-square flex flex-col">
          
            <div className="w-12 h-12 rounded-full overflow-hidden mb-auto">
              <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-full object-cover" />
            
            </div>
            <div className="mb-2">
              <p
              style={{
                color: '#1A1A2E'
              }}
              className="text-sm font-bold">
              
                {meal.calories} kcal
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
              style={{
                color: '#1A1A2E'
              }}
              className="text-lg font-bold">
              
                {meal.name}
              </p>
              <button
              style={{
                backgroundColor: '#FFFFFF'
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
              
                <Plus className="w-4 h-4 text-[#1A1A2E]" />
              </button>
            </div>
          </button>
        )}
      </div>
    </div>);

}
function Learning() {
  const [activeTab, setActiveTab] = useState('Smart Cooking');
  const tabs = ['Smart Cooking', 'Zero Waste', 'Fresh Tips'];
  const articles = [
  {
    title: 'Turn Wilting Greens Into Flavor Bombs',
    author: 'Chef Maya Rodriguez',
    category: 'Quick Wins',
    readTime: '3 min',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🥬',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
  },
  {
    title: 'The 5-Ingredient Fridge Cleanout Method',
    author: 'Zero Waste Kitchen',
    category: 'Trending',
    readTime: '5 min',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '♻️',
    logo: 'ZW'
  },
  {
    title: 'Freeze Like a Pro: What Actually Works',
    author: 'Food Science Daily',
    category: 'Essential',
    readTime: '4 min',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '❄️',
    logo: 'FS'
  },
  {
    title: 'Spice Shelf Secrets: Boost Any Dish',
    author: 'Flavor Lab',
    category: 'Pro Tips',
    readTime: '6 min',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '🌶️',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  }];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
      className="flex-1 overflow-y-auto no-scrollbar">
      
      {/* Header with Emoji */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="text-3xl">
            
            🧠
          </motion.div>
          <h1
            style={{
              color: '#1A1A2E'
            }}
            className="text-3xl font-bold">
            
            Food IQ
          </h1>
        </div>
        <p
          style={{
            color: '#6B7280'
          }}
          className="text-sm">
          
          Level up your kitchen game
        </p>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="px-6 mb-6">
        <div className="flex gap-2 bg-[#F3F4F6] p-1 rounded-full">
          {tabs.map((tab) =>
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileTap={{
              scale: 0.95
            }}
            style={{
              backgroundColor: activeTab === tab ? '#1A1A2E' : 'transparent',
              color: activeTab === tab ? '#FFFFFF' : '#6B7280'
            }}
            className="flex-1 px-4 py-2.5 rounded-full text-xs font-bold transition-all">
            
              {tab}
            </motion.button>
          )}
        </div>
      </div>

      {/* Enhanced Article Cards */}
      <div className="px-6 space-y-4 pb-24">
        {articles.map((article, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: index * 0.1
          }}
          whileHover={{
            scale: 1.02
          }}
          whileTap={{
            scale: 0.98
          }}
          style={{
            background: article.gradient,
            boxShadow: '0px 8px 24px rgba(0,0,0,0.12)'
          }}
          className="rounded-[24px] p-6 relative overflow-hidden cursor-pointer">
          
            {/* Decorative Icon */}
            <div className="absolute -right-4 -top-4 text-7xl opacity-20">
              {article.icon}
            </div>

            {/* Category Badge */}
            <div className="mb-3">
              <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              className="inline-block px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wide">
              
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 pr-16 text-white leading-tight">
              {article.title}
            </h3>

            {/* Author & Read Time */}
            <div className="flex items-center gap-3 mb-4">
              {article.avatar ?
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/50">
                  <img
                src={article.avatar}
                alt={article.author}
                className="w-full h-full object-cover" />
              
                </div> :

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white/50">
              
                  <span className="text-white text-[10px] font-bold">
                    {article.logo}
                  </span>
                </div>
            }
              <div className="flex-1">
                <p className="text-white/90 text-xs font-medium">
                  {article.author}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-white/80" />
                <span className="text-white/90 text-xs font-medium">
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Read Button */}
            <motion.button
            whileHover={{
              x: 5
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)'
            }}
            className="px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2 border border-white/30">
            
              Read Now
              <ArrowRight className="w-3 h-3" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>);

}
// --- Demo Hint Arrows ---
type HintItem = { label: string; side: 'left' | 'right'; top: number };

const SCREEN_HINTS: Partial<Record<Screen, HintItem[]>> = {
  // Onboarding — all buttons functional
  onboarding_goals:     [{ label: 'Select goals', side: 'right', top: 370 }, { label: 'Continue', side: 'right', top: 810 }],
  onboarding_household: [{ label: 'Pick a size',  side: 'right', top: 370 }, { label: 'Continue', side: 'right', top: 810 }],
  onboarding_dietary:   [{ label: 'Pick a diet',  side: 'right', top: 370 }, { label: 'Get started', side: 'right', top: 810 }],

  // Home — bell, expiry banner, quick actions, recipe card all navigate
  home: [
    { label: 'Notifications',  side: 'right', top: 105 },
    { label: 'Expiring items', side: 'left',  top: 205 },
    { label: 'Quick actions',  side: 'left',  top: 330 },
    { label: 'Cook tonight',   side: 'right', top: 575 },
  ],

  // Kitchen — removed "Add item" (receipt_scan is non-functional per user)
  // spinach tag → kitchen_detail, fridge tap → storage_tips, bottom two buttons work
  kitchen: [
    { label: 'Spinach tag',    side: 'left',  top: 278 },
    { label: 'Tap the fridge', side: 'right', top: 420 },
    { label: 'Expiry list',    side: 'left',  top: 820 },
    { label: 'Donate',         side: 'right', top: 820 },
  ],

  // Kitchen detail — only back has onClick; Cook & Donate buttons have no handler
  kitchen_detail: [{ label: 'Go back', side: 'left', top: 100 }],

  // Meal plan — calendar icon and AI banner work; recipe card + buttons have no onClick
  meal_plan: [
    { label: 'Sync calendar', side: 'right', top: 82  },
    { label: 'Try AI recipe', side: 'left',  top: 270 },
  ],

  // AI recipe — Generate and history card navigate; "Add ingredients" has no onClick
  ai_recipe: [
    { label: 'Generate recipe', side: 'right', top: 445 },
    { label: 'Past recipe',     side: 'left',  top: 670 },
  ],

  // Journal — all 4 meal cards navigate to recipe_detail
  journal: [{ label: 'Tap a meal', side: 'right', top: 550 }],

  // Learning — only the 3 tabs work; Read Now buttons have no onClick
  learning: [{ label: 'Switch tabs', side: 'right', top: 192 }],

  // Shop — Start Route & Browse Aisles work; only Bananas navigates (others return null)
  shop: [
    { label: 'Start route',   side: 'left',  top: 220 },
    { label: 'Browse aisles', side: 'right', top: 220 },
    { label: 'Tap Bananas',   side: 'right', top: 395 },
  ],

  // Calendar sync — connect toggles, remove block, sync button all work
  calendar_sync: [
    { label: 'Connect',      side: 'right', top: 215 },
    { label: 'Remove block', side: 'left',  top: 645 },
    { label: 'Sync now',     side: 'right', top: 815 },
  ],

  // Sub-screens — only back button has onClick
  recipe_detail:   [{ label: 'Go back', side: 'left', top: 100 }],
  expiry_timeline: [{ label: 'Go back', side: 'left', top: 100 }],
  donate_offset:   [{ label: 'Go back', side: 'left', top: 100 }],
  shop_route:      [{ label: 'Go back', side: 'left', top: 100 }],
  freshness_lens:  [{ label: 'Go back', side: 'left', top: 100 }],
  smart_basket:    [{ label: 'Go back', side: 'left', top: 100 }],
  storage_tips:    [{ label: 'Go back', side: 'left', top: 100 }],
  alerts:          [{ label: 'Go back', side: 'left', top: 100 }],
  profile:         [{ label: 'Go back', side: 'left', top: 100 }],
};

function ScreenHints({ screen, shellW }: { screen: Screen; shellW: number }) {
  const hints = SCREEN_HINTS[screen] ?? [];
  if (!hints.length) return null;
  return (
    <AnimatePresence mode="wait">
      <motion.div key={screen} className="contents">
        {hints.map((hint, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: hint.side === 'left' ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: hint.side === 'left' ? -10 : 10 }}
            transition={{ delay: 0.45 + i * 0.12, duration: 0.28, ease: 'easeOut' }}
            className="absolute flex items-center gap-1.5 pointer-events-none"
            style={{
              top: hint.top,
              transform: 'translateY(-50%)',
              ...(hint.side === 'left' ? { right: shellW + 18 } : { left: shellW + 18 }),
            }}
          >
            {hint.side === 'left' ? (
              <>
                <div
                  style={{
                    backgroundColor: 'rgba(10,10,10,0.62)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
                  }}
                  className="px-3 py-1.5 rounded-full">
                  <span className="text-white text-[12px] font-bold whitespace-nowrap" style={{ letterSpacing: '0.01em' }}>
                    {hint.label}
                  </span>
                </div>
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <ChevronRight className="w-4 h-4 text-white" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.7))' }} />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <ChevronRight className="w-4 h-4 text-white rotate-180" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.7))' }} />
                </motion.div>
                <div
                  style={{
                    backgroundColor: 'rgba(10,10,10,0.62)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
                  }}
                  className="px-3 py-1.5 rounded-full">
                  <span className="text-white text-[12px] font-bold whitespace-nowrap" style={{ letterSpacing: '0.01em' }}>
                    {hint.label}
                  </span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

// --- Main App ---
export function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('onboarding_goals'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'onboarding_goals':
        return (
          <OnboardingGoals
            onNext={() => setCurrentScreen('onboarding_household')} />);


      case 'onboarding_household':
        return (
          <OnboardingHousehold
            onNext={() => setCurrentScreen('onboarding_dietary')} />);


      case 'onboarding_dietary':
        return <OnboardingDietary onNext={() => setCurrentScreen('home')} />;
      case 'home':
        return (
          <div className="h-full flex flex-col">
            <HomeDashboard onNavigate={setCurrentScreen} />
            <BottomNav activeTab="home" onNavigate={setCurrentScreen} />
          </div>);

      case 'kitchen':
        return (
          <div className="h-full flex flex-col">
            <KitchenScreen onNavigate={setCurrentScreen} />
            <BottomNav activeTab="kitchen" onNavigate={setCurrentScreen} />
          </div>);

      case 'kitchen_detail':
        return <KitchenDetail onBack={() => setCurrentScreen('kitchen')} />;
      case 'meal_plan':
        return (
          <div className="h-full flex flex-col">
            <MealPlan onNavigate={setCurrentScreen} />
            <BottomNav activeTab="plan" onNavigate={setCurrentScreen} />
          </div>);

      case 'ai_recipe':
        return (
          <div className="h-full flex flex-col">
            <AIRecipeGenerator onNavigate={setCurrentScreen} />
            <BottomNav activeTab="plan" onNavigate={setCurrentScreen} />
          </div>);

      case 'journal':
        return (
          <div className="h-full flex flex-col">
            <Journal onNavigate={setCurrentScreen} />
            <BottomNav activeTab="journal" onNavigate={setCurrentScreen} />
          </div>);

      case 'learning':
        return (
          <div className="h-full flex flex-col">
            <Learning />
            <BottomNav activeTab="learning" onNavigate={setCurrentScreen} />
          </div>);

      case 'recipe_detail':
        return <RecipeDetail onBack={() => setCurrentScreen('meal_plan')} />;
      case 'shop':
        return (
          <div className="h-full flex flex-col">
            <SmartShopList onNavigate={setCurrentScreen} />
            <BottomNav activeTab="shop" onNavigate={setCurrentScreen} />
          </div>);

      case 'shop_route':
        return <StoreRouteMap onBack={() => setCurrentScreen('shop')} />;
      case 'freshness_lens':
        return <FreshnessLens onBack={() => setCurrentScreen('shop')} />;
      case 'smart_basket':
        return <SmartBasket onBack={() => setCurrentScreen('shop')} />;
      case 'receipt_scan':
        return <ReceiptScan onBack={() => setCurrentScreen('kitchen')} />;
      case 'storage_tips':
        return <StorageTips onBack={() => setCurrentScreen('kitchen')} />;
      case 'expiry_timeline':
        return (
          <div className="h-full flex flex-col">
            <ExpiryTimeline onBack={() => setCurrentScreen('kitchen')} />
            <BottomNav activeTab="kitchen" onNavigate={setCurrentScreen} />
          </div>);

      case 'donate_offset':
        return <DonateOffset onBack={() => setCurrentScreen('kitchen')} />;
      case 'insights':
        return (
          <div className="h-full flex flex-col">
            <Insights />
            <BottomNav activeTab="insights" onNavigate={setCurrentScreen} />
          </div>);

      case 'alerts':
        return <Alerts onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return <Profile onBack={() => setCurrentScreen('home')} />;
      case 'calendar_sync':
        return (
          <div className="h-full flex flex-col">
            <CalendarSync onBack={() => setCurrentScreen('meal_plan')} />
          </div>);
      default:
        return (
          <div className="p-10 text-center text-text-muted">
            Screen not found
          </div>);

    }
  };
  // iPhone 16 — Black colorway
  // Physical shell: 147.6 × 71.6 mm → scaled to ~430 × 876px for display
  // Screen inset: 10px each side
  const SHELL_W = 430;
  const SHELL_H = 876;
  const BEZEL = 10;
  // Aluminium frame gradient — iPhone 16 uses polished aluminium
  const frameGrad = 'linear-gradient(160deg, #6e6e73 0%, #3a3a3c 30%, #1c1c1e 60%, #3a3a3c 80%, #6e6e73 100%)';
  const btnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    background: 'linear-gradient(90deg, #4a4a4c, #2c2c2e, #4a4a4c)',
    borderRadius: side === 'left' ? '3px 0 0 3px' : '0 3px 3px 0',
    boxShadow: side === 'left'
      ? 'inset 1px 0 1px rgba(255,255,255,0.15), -2px 0 4px rgba(0,0,0,0.6)'
      : 'inset -1px 0 1px rgba(255,255,255,0.15), 2px 0 4px rgba(0,0,0,0.6)',
  });

  return (
    <div
      className="font-inter min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* iPhone 16 shell */}
      <div className="relative" style={{ width: SHELL_W, height: SHELL_H }}>

        <ScreenHints screen={currentScreen} shellW={SHELL_W} />

        {/* ── Outer aluminium body ── */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 54,
            background: frameGrad,
            boxShadow: [
              'inset 0 0 0 1.5px rgba(255,255,255,0.18)',   // inner highlight
              'inset 0 0 0 3px rgba(0,0,0,0.35)',           // inner shadow ring
              '0 2px 0 1px rgba(255,255,255,0.4)',          // top edge catch-light
              '0 40px 100px rgba(0,0,0,0.55)',              // drop shadow
              '0 8px 24px rgba(0,0,0,0.3)',
            ].join(','),
          }}
        />

        {/* ── Left side: Action Button (pill, iPhone 16 specific) ── */}
        <div style={{ ...btnStyle('left'), left: -4, top: 148, width: 5, height: 38, borderRadius: '3px 0 0 3px' }} />

        {/* ── Left side: Volume Up ── */}
        <div style={{ ...btnStyle('left'), left: -4, top: 210, width: 5, height: 68, borderRadius: '3px 0 0 3px' }} />

        {/* ── Left side: Volume Down ── */}
        <div style={{ ...btnStyle('left'), left: -4, top: 294, width: 5, height: 68, borderRadius: '3px 0 0 3px' }} />

        {/* ── Right side: Sleep/Wake button ── */}
        <div style={{ ...btnStyle('right'), right: -4, top: 210, width: 5, height: 90, borderRadius: '0 3px 3px 0' }} />

        {/* ── Right side: Camera Control button (iPhone 16 exclusive — elongated capsule) ── */}
        <div style={{ ...btnStyle('right'), right: -4, top: 560, width: 5, height: 56, borderRadius: '0 3px 3px 0' }} />

        {/* ── Screen glass — sits inside the aluminium frame ── */}
        <div
          className="absolute overflow-hidden"
          style={{
            inset: BEZEL,
            borderRadius: 46,
            background: '#000',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
          }}
        >
          {/* App content */}
          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 44 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full"
                style={{
                  paddingTop: 52,
                  backgroundColor: ({
                    splash: '#4CAF7D',
                    onboarding_goals: '#FAFAF5',
                    onboarding_household: '#FAFAF5',
                    onboarding_dietary: '#FAFAF5',
                    home: '#FFFFFF',
                    kitchen: '#FFFFFF',
                    kitchen_detail: '#FAFAF5',
                    meal_plan: '#FFFFFF',
                    ai_recipe: '#FFFFFF',
                    journal: '#FFFFFF',
                    learning: '#FFFFFF',
                    recipe_detail: '#FFFFFF',
                    shop: '#FFFFFF',
                    shop_route: '#FAFAF5',
                    freshness_lens: '#000000',
                    smart_basket: '#FAFAF5',
                    receipt_scan: '#FAFAF5',
                    storage_tips: '#FAFAF5',
                    expiry_timeline: '#FAFAF5',
                    donate_offset: '#FAFAF5',
                    insights: '#FAFAF5',
                    alerts: '#FAFAF5',
                    profile: '#FAFAF5',
                    calendar_sync: '#FAFAF5',
                  } as Record<string, string>)[currentScreen] ?? '#FFFFFF',
                }}
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Island */}
          <div
            className="absolute z-30"
            style={{
              top: 13,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 126,
              height: 36,
              background: '#000',
              borderRadius: 20,
              boxShadow: '0 0 0 1.5px rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: 12,
            }}
          >
            {/* Front camera */}
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#0d0d0f', border: '1.5px solid #2a2a2e', boxShadow: 'inset 0 0 3px rgba(100,180,255,0.2)' }} />
          </div>

          {/* Glass reflection */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              borderRadius: 44,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)',
            }}
          />

          {/* Home indicator */}
          <div
            className="absolute z-30"
            style={{
              bottom: 9,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 134,
              height: 5,
              background: 'rgba(0,0,0,0.25)',
              borderRadius: 3,
            }}
          />
        </div>

        {/* ── Bottom chin — subtle chamfer reflection ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: 0, left: 20, right: 20, height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
            borderRadius: '0 0 54px 54px',
          }}
        />
      </div>
    </div>);

}