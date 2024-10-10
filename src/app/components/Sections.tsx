import React from 'react';
import { Region } from '../types';

const Sections: React.FC = () => {
  const regions: Region[] = ['الشرق الأوسط', 'أفريقيا', 'آسيا', 'أوروبا', 'أمريكا'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">الأخبار حسب المناطق</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region) => (
          <a
            key={region}
            href="#"
            className="bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-600 rounded-lg p-4 text-center transition-colors duration-200"
          >
            {region}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sections;