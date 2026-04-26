import { Pet } from '../data/pets';
import { motion } from 'motion/react';

interface PetCardProps {
  pet: Pet;
  index: number;
}

export default function PetCard({ pet, index }: PetCardProps) {
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
        />
        <div className="absolute top-2 right-2 bg-adopt-yellow text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {pet.rarity}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-display text-xl font-bold text-gray-800">{pet.name}</h3>
        {pet.origin && (
          <p className="text-sm text-gray-500 font-medium">{pet.origin}</p>
        )}
      </div>
      
      <button className="mt-auto w-full py-2 bg-adopt-blue/10 text-adopt-blue rounded-xl font-bold text-sm hover:bg-adopt-blue hover:text-white transition-colors">
        View Stats
      </button>
    </motion.div>
  );
}
