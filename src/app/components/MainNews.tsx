import React from 'react';
import { NewsItem } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface MainNewsProps {
  news: NewsItem;
}

const MainNews: React.FC<MainNewsProps> = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-8">
      <img src={news.imageUrl} alt={news.title} className="w-full h-96 object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-200">{news.title}</h2>
      <p className="text-gray-600 mb-4 text-lg">{news.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="flex items-center">
          <Calendar size={16} className="mr-1" />
          {new Date(news.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span className="flex items-center">
          <Clock size={16} className="mr-1" />
          {new Date(news.date).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
        </span>
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{news.source}</span>
      </div>
    </div>
  );
};

export default MainNews;