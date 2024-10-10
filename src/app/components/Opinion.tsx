import React from 'react';
import { OpinionItem } from '../types';

const Opinion: React.FC = () => {
  const opinionItems: OpinionItem[] = [
    {
      id: 1,
      title: 'مستقبل العلاقات العربية الأمريكية في ظل التحولات الجيوسياسية',
      author: 'د. محمد الأحمد',
      excerpt: 'تحليل عميق للتغيرات في السياسة الخارجية الأمريكية تجاه المنطقة العربية وتأثيرها على المصالح المشتركة.',
      imageUrl: 'https://source.unsplash.com/random/100x100?portrait'
    },
    {
      id: 2,
      title: 'التحديات الاقتصادية في العالم العربي: رؤية مستقبلية',
      author: 'أ. فاطمة المنصوري',
      excerpt: 'نظرة تحليلية للتحديات الاقتصادية التي تواجه الدول العربية وسبل مواجهتها في ظل المتغيرات العالمية.',
      imageUrl: 'https://source.unsplash.com/random/100x100?portrait'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">مقالات الرأي</h2>
      <div className="space-y-6">
        {opinionItems.map((item) => (
          <div key={item.id} className="flex items-start">
            <img src={item.imageUrl} alt={item.author} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors duration-200">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.excerpt}</p>
              <span className="text-sm text-blue-600">{item.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opinion;