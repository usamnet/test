import React from 'react';
import { NewsItem } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface MainNewsSectionProps {
  mainNews: NewsItem;
  sideNews: NewsItem[];
}

const MainNewsSection: React.FC<MainNewsSectionProps> = ({ mainNews, sideNews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Main news item */}


      <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
        <img src={mainNews.imageUrl} alt={mainNews.title} className="w-full h-64 object-cover" />

        <div className="p-4">

          <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors duration-200">{mainNews.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{mainNews.content}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar size={16} className="ml-1" />
              {new Date(mainNews.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="ml-1" />
              {new Date(mainNews.date).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
            </span>
            <div className="main-news-info">
            <span className="category">{mainNews.category}</span>
            <h1 className="title">{mainNews.title}</h1>
          </div>
          </div>
        </div>

      </div>

      {/* Side news items */}
      <div className="space-y-4">
        {sideNews.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex">
              <img src={news.imageUrl} alt={news.title} className="w-1/3 h-24 object-cover" />
              <div className="p-2 w-2/3">
                <h3 className="text-sm font-semibold mb-1 hover:text-blue-600 transition-colors duration-200 line-clamp-2">{news.title}</h3>
                <span className="text-xs text-gray-500">{news.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`


        .main-news-info {
          position: absolute;
    bottom: 62px;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px;
          border-radius: 4px;
        }
        .category {
          font-size: 14px;
          font-weight: bold;
        }
        .title {
          font-size: 20px;
          margin: 5px 0 0;
        }
       


    

.main-news-info-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}




@media (max-width: 768px) {
        .main-news-info {
                  position: absolute;
bottom: 3px;
      }
}

      `}</style>
    </div>
  );
};

export default MainNewsSection;