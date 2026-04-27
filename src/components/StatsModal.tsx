import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wind, Music, Sparkles, Trophy, Star } from 'lucide-react';
import { Pet } from '../data/pets';
import { useLanguage } from './LanguageContext';

interface StatsModalProps {
  pet: Pet | null;
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ pet, onClose }) => {
  const { t } = useLanguage();

  if (!pet) return null;

  // Default stats if none provided
  const stats = pet.stats || {
    fly: true,
    ride: true,
    neon: true,
    mega: true,
    value: Math.floor(Math.random() * 40) + 60,
  };

  return (
    <AnimatePresence>
      {pet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-adopt-blue"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-gray-600" />
            </button>

            <div className="p-8">
              <div className="flex flex-col items-center mb-8">
                <div className="w-48 h-48 rounded-3xl overflow-hidden bg-adopt-blue/5 mb-4 border-4 border-white shadow-lg">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://www.playadopt.me/_next/image?url=%2Fstatic%2Fimages%2Fpets%2Fmissing.png&w=1200&q=75';
                    }}
                  />
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-800">{pet.name}</h2>
                <div className="mt-2 bg-adopt-yellow text-white px-4 py-1 rounded-full text-sm font-bold">
                  {pet.rarity}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard 
                  icon={<Wind className="text-adopt-blue" />} 
                  label={t('fly')} 
                  value={stats.fly ? 'Yes' : 'No'} 
                />
                <StatCard 
                  icon={<Music className="text-adopt-pink" />} 
                  label={t('ride')} 
                  value={stats.ride ? 'Yes' : 'No'} 
                />
                <StatCard 
                  icon={<Sparkles className="text-adopt-purple" />} 
                  label={t('neon')} 
                  value={stats.neon ? 'Yes' : 'No'} 
                />
                <StatCard 
                  icon={<Star className="text-adopt-yellow" />} 
                  label={t('mega')} 
                  value={stats.mega ? 'Yes' : 'No'} 
                />
              </div>

              <div className="mt-8 bg-adopt-blue/5 p-6 rounded-3xl border-2 border-adopt-blue/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="text-adopt-yellow" size={24} />
                    <span className="font-display font-bold text-gray-700">{t('tradingValue')}</span>
                  </div>
                  <span className="font-display text-2xl font-black text-adopt-blue">{stats.value}/100</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.value}%` }}
                    className="h-full bg-gradient-to-r from-adopt-blue to-adopt-purple"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-6 bg-adopt-blue text-white font-display font-bold text-xl hover:bg-adopt-blue/90 transition-colors"
            >
              {t('close')}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border-2 border-gray-100">
    <div className="p-2 bg-white rounded-lg shadow-sm">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
      <p className="font-bold text-gray-800">{value}</p>
    </div>
  </div>
);
