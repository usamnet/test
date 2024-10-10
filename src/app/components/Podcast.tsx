import React from 'react';
import { PodcastItem } from '../types';
import { Headphones } from 'lucide-react';

const Podcast: React.FC = () => {
  const podcastItems: PodcastItem[] = [
    {
      id: 1,
      title: 'تحليل الأحداث الأسبوعية',
      description: 'نظرة عميقة على أهم الأحداث السياسية والاقتصادية في العالم العربي خلال الأسبوع الماضي.',
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      audioUrl: '#'
    },
    {
      id: 2,
      title: 'حوار مع شخصية مؤثرة',
      description: 'لقاء خاص مع إحدى الشخصيات البارزة في مجال الأعمال والابتكار في العالم العربي.',
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      audioUrl: '#'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Headphones className="mr-2" size={24} />
        بودكاست صحافة نت
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {podcastItems.map((item) => (
          <div key={item.id} className="bg-gray-100 rounded-lg p-4">
            <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <audio controls className="w-full">
              <source src={item.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;