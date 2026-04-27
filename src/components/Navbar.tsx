import { useState } from 'react';
import { PawPrint, ShoppingBag, Newspaper, Home, Globe } from 'lucide-react';
import RocketEasterEgg from './RocketEasterEgg';
import { useLanguage } from './LanguageContext';
import { languages } from '../data/translations';

export default function Navbar() {
  const [showRocket, setShowRocket] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-4 border-adopt-blue py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-adopt-pink p-2 rounded-xl text-white">
            <PawPrint size={32} />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-adopt-pink md:block hidden">
            ADOPT ME! WIKI
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a href="#" className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors">
            <Home size={20} />
            <span className="md:inline hidden">{t('home')}</span>
          </a>
          <a href="#pets" className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors">
            <PawPrint size={20} />
            <span className="md:inline hidden">{t('pets')}</span>
          </a>
          <a href="#news" className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors">
            <Newspaper size={20} />
            <span className="md:inline hidden">{t('news')}</span>
          </a>
          
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <Globe size={20} />
              <span className="md:inline hidden">{languages.find(l => l.code === language)?.flag}</span>
            </button>
            
            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden py-2 max-h-96 overflow-y-auto z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setShowLangMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-adopt-blue/10 transition-colors ${language === lang.code ? 'bg-adopt-blue/5 text-adopt-blue font-bold' : 'text-gray-700'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="https://regyron235-blip.github.io/adoptme-elite-shops/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-adopt-purple text-white px-4 py-2 rounded-full font-display font-bold hover:scale-105 active:scale-95 transition-transform text-sm md:text-base"
          >
            <ShoppingBag size={20} className="md:block hidden" />
            {t('officialStore')}
          </a>
        </div>
      </nav>
      
      <RocketEasterEgg 
        isVisible={showRocket} 
        onComplete={() => setShowRocket(false)} 
      />
    </>
  );
}
