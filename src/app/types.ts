export type Category = 'all' | 'سياسة' | 'اقتصاد' | 'رياضة' | 'ثقافة وفن' | 'علوم وتكنولوجيا' | 'صحة وبيئة';

export type Region = 'الشرق الأوسط' | 'أفريقيا' | 'آسيا' | 'أوروبا' | 'أمريكا';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  source: string;
  category: Category;
  region: Region;
  date: string;
  imageUrl: string;
  link: string;
}

export interface OpinionItem {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}

export interface PodcastItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
}


