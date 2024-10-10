import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">صحافة نت</h3>
            <p className="text-gray-600">موقع إخباري شامل يغطي أحدث الأخبار العربية والعالمية على مدار الساعة</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">الأقسام الرئيسية</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">سياسة</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">اقتصاد</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">رياضة</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">ثقافة وفن</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">علوم وتكنولوجيا</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">صحة وبيئة</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">خدمات إضافية</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">البث المباشر</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">بودكاست</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">النشرة الإخبارية</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">تطبيق الهاتف</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">خريطة الموقع</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">تابعنا على</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-200"><Twitter size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-200"><Facebook size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-200"><Instagram size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-200"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-200"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">شروط الاستخدام</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">عن صحافة نت</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">سياسة الخصوصية</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">سياسة الكوكيز</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">مساعدة الوصول</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">اتصل بنا</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">الإعلان معنا</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">عدم مشاركة أو بيع معلوماتي</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">الدعم الفني</a>
          </div>
          <p className="text-gray-600 mt-4">&copy; 2024 صحافة نت. جميع الحقوق محفوظة. صحافة نت غير مسؤولة عن محتوى المواقع الخارجية.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;