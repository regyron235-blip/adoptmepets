export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'sean-sale',
    title: "Sean's Sale & Item Releaser Notes!",
    date: "April 25, 2026",
    excerpt: "Sean is hosting a massive sale on items! Check out the new item releaser changes and grab your favorites before they're gone.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=450&fit=crop",
    url: "https://www.playadopt.me/news"
  },
  {
    id: 'birthday-magic',
    title: "Birthday Magic Notes!",
    date: "April 20, 2026",
    excerpt: "It's time to celebrate with Birthday Magic! Join the party and discover new surprises waiting for you in the game.",
    image: "https://images.unsplash.com/photo-1530103862676-fa8c9d34b3b7?w=800&h=450&fit=crop",
    url: "https://www.playadopt.me/news"
  },
  {
    id: 'candy-eggs',
    title: "1.2x Candy Eggs Weekend Notes!",
    date: "April 18, 2026",
    excerpt: "Boost your hatching with 1.2x Candy Eggs this weekend! A sweet deal for all pet collectors.",
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef182?w=800&h=450&fit=crop",
    url: "https://www.playadopt.me/news"
  },
  {
    id: 'sugarfest-choccybunny',
    title: "Sugarfest: Choccybunny Box Notes!",
    date: "April 15, 2026",
    excerpt: "The Sugarfest continues with the new Choccybunny Box! What sweet pets will you find inside?",
    image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?w=800&h=450&fit=crop",
    url: "https://www.playadopt.me/news"
  }
];
