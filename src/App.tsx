/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import PetSection from './components/PetSection';
import NewsSection from './components/NewsSection';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { getImageUrl } from './data/utils';

function Hero() {
  const { t } = useLanguage();
  return (
    <header className="relative py-20 px-6 md:px-12 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-adopt-blue/10 skew-x-[-20deg] origin-top-right -z-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-adopt-yellow/20 text-adopt-yellow font-bold px-4 py-2 rounded-full mb-6"
          >
            <Star size={16} fill="currentColor" />
            Most Popular Pet Game
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Discover All <br />
            <span className="text-adopt-pink">Legendary Pets</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-medium mb-10 max-w-xl"
          >
            The ultimate guide to every legendary pet in Adopt Me! From official news to rare trading values, we've got you covered.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a href="#pets" className="btn-primary">
              {t('pets')}
            </a>
            <a 
              href="https://regyron235-blip.github.io/adoptme-elite-shops/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-4 border-adopt-blue text-adopt-blue font-display font-bold hover:bg-adopt-blue hover:text-white transition-all"
            >
              {t('officialStore')}
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-3 scale-110">
            <img 
              src={getImageUrl('pets/shadow_dragon.png')} 
              alt="Adopt Me Pets"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://www.playadopt.me/_next/image?url=%2Fstatic%2Fimages%2Fpets%2Fshadow-dragon.png&w=1200&q=75';
              }}
            />
          </div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-adopt-pink rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-adopt-blue rounded-full blur-3xl opacity-50" />
        </motion.div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <NewsSection />
          <PetSection />
        </main>
        
        <footer className="bg-gray-900 py-12 px-6 text-white text-center">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-adopt-pink p-2 rounded-xl">
                <Star size={24} fill="white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                ADOPT ME! WIKI
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              This is a fan-made project and is not affiliated with Uplift Games or Roblox. 
              All game assets are property of their respective owners.
            </p>
            <div className="flex justify-center gap-6 text-sm font-semibold text-gray-500">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-600 text-xs">
              &copy; 2026 Adopt Me! Legendary Wiki. Building your dream pet collection.
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

