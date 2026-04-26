import React from 'react';
import { NewsItem } from '../data/news';
import { ExternalLink } from 'lucide-react';

interface NewsCardProps {
  key?: string | number;
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="news-card group flex flex-col md:flex-row h-full md:items-center">
      <div className="w-full md:w-1/3 aspect-video md:aspect-auto md:h-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-adopt-blue font-bold text-sm tracking-wide uppercase">Official Update</span>
          <span className="text-gray-400 text-sm">{item.date}</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-gray-800 group-hover:text-adopt-blue transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 line-clamp-2 md:line-clamp-3">
          {item.excerpt}
        </p>
        <a 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-adopt-pink font-bold hover:underline"
        >
          Read Full Notes
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
