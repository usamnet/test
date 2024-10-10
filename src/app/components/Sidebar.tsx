import React from 'react';
import { Category } from '../types';
import { Globe } from 'lucide-react';

interface SidebarProps {
  setSelectedCategory: (category: Category) => void;
  selectedCategory: Category;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedCategory, selectedCategory }) => {
  const categories: { id: Category; name: string }[] = [
    { id: 'all', name: 'كل الأقسام' },
    { id: 'سياسة', name: 'سياسة' },
    { id: 'اقتصاد', name: 'اقتصاد' },
    { id: 'رياضة', name: 'رياضة' },
    { id: 'ثقافة وفن', name: 'ثقافة وفن' },
    { id: 'علوم وتكنولوجيا', name: 'علوم وتكنولوجيا' },
    { id: 'صحة وبيئة', name: 'صحة وبيئة' },
  ];

  return (
    <aside className="w-64 bg-white p-4 space-y-4 shadow-lg rounded-lg mb-8 lg:mb-0">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Globe className="mr-2" size={24} />
        الأقسام
      </h2>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`block w-full text-right p-2 rounded transition-colors duration-200 ${
            selectedCategory === category.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;