import { legendaryPets } from '../data/pets';
import { PetCard } from './PetCard';

export default function PetSection() {
  return (
    <section id="pets" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-adopt-pink mb-4">
            Legendary Pets
          </h2>
          <p className="text-gray-600 max-w-xl font-medium">
            Explore all the rarest and most legendary pets in Adopt Me! From ancient dragons to the most sought-after holiday exclusives.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="bg-white px-4 py-2 rounded-full border-2 border-adopt-yellow font-bold text-adopt-yellow">
            Total: {legendaryPets.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {legendaryPets.map((pet, index) => (
          <PetCard key={pet.id} pet={pet} index={index} />
        ))}
      </div>
    </section>
  );
}
