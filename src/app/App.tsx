// Updated App Component with TopicNewsSection integration
'use client'; // تأكد من إضافة هذا السطر في أعلى الملف

import React, { useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import TrendingNews from './components/TrendingNews';
import BreakingNews from './components/BreakingNews';
import Footer from './components/Footer';
import MainNewsSection from './components/MainNewsSection';
import Opinion from './components/Opinion';
import Podcast from './components/Podcast';
import Newsletter from './components/Newsletter';
import { NewsItem, Category } from './types';
import './App.css';
import VideoGallery from './components/VideoGallery';
import TextOnlyNewsPostComponent from './components/TextOnlyNewsPostComponent';
import SimpleNewsWidget from './components/SimpleNewsWidget';


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dummy data for demonstration
  const newsItems: NewsItem[] = [
    { id: 1, title: 'الحرب على غزة.. القسام تقصف تل أبيب وحزب الله يستهدف مستوطنة الجليل', content: 'تصاعدت الأحداث في غزة مع استمرار القصف المتبادل بين المقاومة الفلسطينية والجيش الإسرائيلي...', source: 'مراسل صحافة نت', category: 'سياسة', region: 'الشرق الأوسط', date: new Date().toISOString(), imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',link:''  },
    { id: 2, title: 'قيادي بحماس يقيم الحرب بعد عام: أوقفنا مشاريع إسرائيل في الاندماج', content: 'في مقابلة خاصة، صرح قيادي بارز في حركة حماس بأن المقاومة نجحت في إيقاف مخططات إسرائيل...', source: 'وكالة الأنباء الفلسطينية', category: 'سياسة', region: 'الشرق الأوسط', date: new Date().toISOString(), imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',link:''  },
    { id: 3, title: 'حزب الله يتحدث عن إسناده لغزة والآثار الإستراتيجية لطوفان الأقصى', content: 'أكد مسؤول في حزب الله اللبناني أن الحزب مستمر في دعم المقاومة الفلسطينية في غزة...', source: 'وكالة الأنباء اللبنانية', category: 'سياسة', region: 'الشرق الأوسط', date: new Date().toISOString(), imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',link:''  },
    { id: 4, title: 'غزة بعد عام على حرب: بورصة فلسطين تهوي 22.4%', content: 'تأثرت الأسواق المالية الفلسطينية بشكل كبير نتيجة للحرب المستمرة، مع انخفاض مؤشر بورصة فلسطين...', source: 'صحيفة الاقتصادية', category: 'اقتصاد', region: 'الشرق الأوسط', date: new Date().toISOString(), imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',link:''  },
    { id: 5, title: 'اختبارات المحررين في جبل الزيتون في القدس: "مصعد" المسيح إلى السماء', content: 'في تقرير خاص، يستكشف محررونا الموقع التاريخي في جبل الزيتون بالقدس...', source: 'مجلة التراث والآثار', category: 'ثقافة وفن', region: 'الشرق الأوسط', date: new Date().toISOString(), imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',link:'' },
  ];

  const newsList: NewsItem[] = [
    {
      id: 1,
      title: 'تطورات جديدة في عالم الرياضة',
      content: 'شهدت الساحة الرياضية اليوم العديد من التطورات المثيرة...',
      source: 'مجلة التراث والآثار', category: 'ثقافة وفن', region: 'الشرق الأوسط', date: new Date().toISOString(), 
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      link:''
    },
    {
      id: 2,
      title: 'أحدث الابتكارات في مجال التكنولوجيا',
      content: 'كشفت شركة تقنية عن جهاز مبتكر يمكنه تغيير طريقة تواصل الناس...',
      source: 'مجلة التراث والآثار', category: 'ثقافة وفن', region: 'الشرق الأوسط', date: new Date().toISOString(),
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      link:''
    },
    {
      id: 3,
      title: 'فوز كبير في مباراة كرة القدم',
      content: 'حقق فريق محلي فوزًا كبيرًا في مباراة كرة القدم التي أُقيمت اليوم...',
      source: 'مجلة التراث والآثار', category: 'ثقافة وفن', region: 'الشرق الأوسط', date: new Date().toISOString(),
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      link:''
    },
  ];


  const examplePostGalleryImages = {
    title: "في مخيم البريج الأطفال يتوارثون الألم",
    content: "لم يسلم مخيم البريج من انتهاكات الاحتلال الإسرائيلي التي استهدفت قطاع غزة بالكامل منذ بدء عملية التصعيد. الأسر الفلسطينية تعاني من فقدان الأحباء والدمار الواسع الذي لحق بالمنازل والبنية التحتية.",
    author: "مراسل الجزيرة",
    date: "9 أكتوبر 2024",
    mainImageUrl: "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80",
    galleryImages: [
      "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80",
      "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80",
      "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80",
      "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80"
    ]
  };

  const filteredNews = newsItems.filter(item =>
    item.title.includes(searchQuery) || item.content.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <BreakingNews news={newsItems.slice(0, 3)} />
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col lg:flex-row">
        <main className="flex-grow">
       
          <MainNewsSection mainNews={newsItems[0]} sideNews={newsItems.slice(1, 5)} />
          <NewsList news={filteredNews.slice(5)} />
          <TextOnlyNewsPostComponent />
          <SimpleNewsWidget />
          <VideoGallery />
          <SimpleNewsWidget />
          <TextOnlyNewsPostComponent />
          <SimpleNewsWidget />
          <SimpleNewsWidget />


          <Opinion />
          <Podcast />
        </main>

        <aside className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:mr-8 block">
          <TrendingNews news={newsItems.slice(0, 5)} />
          <Newsletter />
        </aside>
      </div>
      <Footer />


    </div>
  );
};


// Example usage with dummy data


// To use this component in a Next.js page:
// <NewsComponent mainNews={mainNews} otherNews={otherNews} />
export default App;