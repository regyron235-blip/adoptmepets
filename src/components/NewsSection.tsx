import { newsItems } from '../data/news';
import { NewsCard } from './NewsCard';

export default function NewsSection() {
  return (
    <section id="news" className="py-16 bg-adopt-blue/5 border-y-4 border-adopt-blue/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-adopt-blue mb-4">
            Adopt Me! News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Stay up to date with the latest patches, events, and new pet releases from the official Adopt Me team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.playadopt.me/news" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Visit Official News Archive
          </a>
        </div>
      </div>
    </section>
  );
}
