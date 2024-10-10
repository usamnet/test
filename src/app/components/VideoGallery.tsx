import React from 'react';
import Image from 'next/image';
import styles from './VideoGallery.module.css';

const VideoGallery = () => {
  const videos = [
    {
      title: 'بعد تفجيرات لبنان.. هل البيدجر والووكي توكي مصدر للخطر؟',
      duration: '00:51',
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      category: 'الأخبار',
      categoryLink: '#',
    },
    {
      title: 'القبّيبة.. قرية غنية بالآثار سلخها الاحتلال عن القدس',
      duration: '04:23',
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      category: 'التاريخ',
      categoryLink: '#',
    },
    {
      title: 'كيف تناولت "الشبكة" الذكرى الأولى لـ "طوفان الأقصى"؟',
      duration: '01:58',
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      category: 'السياسة',
      categoryLink: '#',
    },
    {
      title: 'كيف تناولت "الشبكة" الذكرى الأولى لـ "طوفان الأقصى"؟',
      duration: '01:58',
      imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
      category: 'السياسة',
      categoryLink: '#',
    },
  ];

  return (
    <div className={styles.videoGallery} dir="rtl">
      <h2 className={styles.sponsoredTitle}>محتوى برعاية تابولا</h2>
      <div className={styles.videoGrid}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoItem}>
            <img className="w-full md:w-1/2 h-30 object-cover rounded-lg mb-4 md:mb-0 md:ml-6"
              src={video.imageUrl}
              alt={video.title}
              style={{ width: '70%' }} // تم تصحيح تنسيق الكود
            />
            <div className={styles.videoInfo}>
              <a href="#" className={styles.title}>{video.title}</a>
              <span className={styles.duration}>{video.duration}</span>
              <a href={video.categoryLink} className={styles.category}>{video.category}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
