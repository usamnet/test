import React from 'react';
import { Search, Facebook, Twitter, Instagram, Youtube, Tv, Smartphone } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-white text-gray-800 shadow-md">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center">
              <Tv size={16} className="mr-1" />
              البث المباشر
            </a>
            <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center">
              <Smartphone size={16} className="mr-1" />
              تطبيق الهاتف
            </a>
            <a href="#" className="hover:text-red-400 transition-colors duration-200">
              English
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-red-400 transition-colors duration-200"><Facebook size={16} /></a>
            <a href="#" className="hover:text-red-400 transition-colors duration-200"><Twitter size={16} /></a>
            <a href="#" className="hover:text-red-400 transition-colors duration-200"><Instagram size={16} /></a>
            <a href="#" className="hover:text-red-400 transition-colors duration-200"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-grow max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن الأخبار..."
                className="w-full bg-gray-100 text-gray-800 rounded-full px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
            </div>
          </div>
          
          <div className="flex items-center mr-8">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">صحافة</span>
              <span className="text-red-600">نت</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between py-3">
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">الرئيسية</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">سياسة</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">اقتصاد</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">رياضة</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">ثقافة وفن</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">علوم وتكنولوجيا</a></li>
            <li><a href="#" className="text-gray-800 hover:text-red-600 transition-colors duration-200">صحة وبيئة</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;