import { useState } from 'react';
import { PawPrint, ShoppingBag, Newspaper, Home } from 'lucide-react';
import RocketEasterEgg from './RocketEasterEgg';

export default function Navbar() {
  const [showRocket, setShowRocket] = useState(false);

  const triggerRocket = () => {
    setShowRocket(true);
  };

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

        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors">
            <Home size={20} />
            <span className="md:inline hidden">Home</span>
          </a>
          <a href="#pets" className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors">
            <PawPrint size={20} />
            <span className="md:inline hidden">Pets</span>
          </a>
          <a href="#news" className="flex items-center gap-2 font-display font-semibold hover:text-adopt-blue transition-colors">
            <Newspaper size={20} />
            <span className="md:inline hidden">News</span>
          </a>
          <button 
            onClick={triggerRocket}
            className="flex items-center gap-2 bg-adopt-purple text-white px-4 py-2 rounded-full font-display font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            <ShoppingBag size={20} />
            Elite Store
          </button>
        </div>
      </nav>
      
      <RocketEasterEgg 
        isVisible={showRocket} 
        onComplete={() => setShowRocket(false)} 
      />
    </>
  );
}
