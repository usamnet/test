import React from 'react';
import { NewsItem } from '../types';
import { AlertTriangle } from 'lucide-react';

interface BreakingNewsProps {
  news: NewsItem[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto flex items-center">
        <div className="flex-shrink-0 flex items-center mr-4">
          <AlertTriangle size={24} className="mr-2" />
          <span className="font-bold text-lg">عاجل</span>
        </div>
        <div className="overflow-hidden relative w-full">
          <div className="animate-marquee whitespace-nowrap">
            {news.map((item, index) => (
              <span key={item.id} className="mx-4 text-lg">
                {item.title}
                {index < news.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;