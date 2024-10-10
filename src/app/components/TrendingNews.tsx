import React from 'react';
import { NewsItem } from '../types';
import { TrendingUp } from 'lucide-react';

interface TrendingNewsProps {
  news: NewsItem[];
}

const TrendingNews: React.FC<TrendingNewsProps> = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2" size={24} />
        الأكثر قراءة
      </h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={item.id} className="flex items-start border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <span className="text-3xl font-bold text-blue-600 ml-4">{index + 1}</span>
            <div>
              <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors duration-200">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.source}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingNews;