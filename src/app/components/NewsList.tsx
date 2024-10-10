import React from 'react';
import { NewsItem } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface NewsListProps {
  news: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="space-y-6">
      {news.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col md:flex-row">
            <img src={item.imageUrl} alt={item.title} className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:ml-6" />
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-200">{item.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(item.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {new Date(item.date).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{item.source}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;