import React from 'react';
import { ArrowLeft, Heart, Clock, Users, Zap, CheckCircle2 } from 'lucide-react';
export const RecipeDetail = ({ onBack }: {onBack: () => void;}) => {
  const ingredients = [
  {
    name: 'Baby Spinach',
    have: true
  },
  {
    name: 'Large Eggs',
    have: true
  },
  {
    name: 'Feta Cheese',
    have: false
  },
  {
    name: 'Cherry Tomatoes',
    have: true
  },
  {
    name: 'Olive Oil',
    have: true
  }];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="relative h-72">
        <img
          src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800"
          className="w-full h-full object-cover"
          alt="Frittata" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-12 left-6 p-2 bg-white/20 backdrop-blur rounded-full text-white">

          <ArrowLeft size={24} />
        </button>
        <button className="absolute top-12 right-6 p-2 bg-white/20 backdrop-blur rounded-full text-white">
          <Heart size={24} />
        </button>
      </div>

      <div className="px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-[32px] p-8 shadow-soft border border-gray-50">
          <h2 className="text-2xl font-bold mb-4">Spinach & Egg Frittata</h2>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2 text-text-secondary">
              <Clock size={16} />
              <span className="text-xs font-medium">15 min</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Users size={16} />
              <span className="text-xs font-medium">2 servings</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Zap size={16} className="text-primary" />
              <span className="text-xs font-medium text-primary">Easy</span>
            </div>
          </div>

          <section className="mb-8">
            <h3 className="font-bold text-lg mb-4">Ingredients</h3>
            <div className="space-y-3">
              {ingredients.map((ing, i) =>
              <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {ing.have ?
                  <CheckCircle2 size={18} className="text-primary" /> :

                  <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-200" />
                  }
                    <span
                    className={`text-sm ${ing.have ? 'text-text-primary' : 'text-text-muted'}`}>
                    
                      {ing.name}
                    </span>
                  </div>
                  {!ing.have &&
                <button className="text-primary text-[10px] font-bold uppercase">
                      Add to list
                    </button>
                }
                </div>
              )}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-bold text-lg mb-4">Steps</h3>
            <div className="space-y-6">
              {[
              'Whisk eggs in a bowl with salt and pepper.',
              'Sauté spinach in a pan until wilted.',
              'Pour eggs over spinach and cook until set.'].
              map((step, i) =>
              <div key={i} className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step}
                  </p>
                </div>
              )}
            </div>
          </section>

          <button className="w-full bg-primary text-white py-4 rounded-button font-bold shadow-lg">
            Start Cooking
          </button>
        </div>
      </div>
    </div>);

};