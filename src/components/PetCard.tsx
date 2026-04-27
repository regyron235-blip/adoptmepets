import React from 'react';
import { Pet } from '../data/pets';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

interface PetCardProps {
  key?: string | number;
  pet: Pet;
  index: number;
  onShowStats: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({ pet, index, onShowStats }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="card-adopt flex flex-col items-center gap-4 group"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://www.playadopt.me/_next/image?url=%2Fstatic%2Fimages%2Fpets%2Fmissing.png&w=1200&q=75';
          }}
        />
        <div className="absolute top-2 right-2 bg-adopt-yellow text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {t('legendary')}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-display text-xl font-bold text-gray-800">{pet.name}</h3>
        {pet.origin && (
          <p className="text-sm text-gray-500 font-medium">{pet.origin}</p>
        )}
      </div>
      
      <button 
        onClick={onShowStats}
        className="mt-auto w-full py-2 bg-adopt-blue/10 text-adopt-blue rounded-xl font-bold text-sm hover:bg-adopt-blue hover:text-white transition-colors"
      >
        {t('viewStats')}
      </button>
    </motion.div>
  );
}
