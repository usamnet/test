import styles from './SimpleNewsWidget.module.css';

const newsItems = [
  {
    title: 'بطل الجراند سلام 22 مرة رافائيل نادال سيعتزل الشهر القادم',
    time: 'منذ 6 دقائق',
    imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
  },
  {
    title: 'بطل الجراند سلام 22 مرة رافائيل نادال سيعتزل الشهر القادم',
    time: 'منذ 6 دقائق',
    imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
  },
  {
    title: 'بطل الجراند سلام 22 مرة رافائيل نادال سيعتزل الشهر القادم',
    time: 'منذ 6 دقائق',
    imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
  },
  {
    title: 'بطل الجراند سلام 22 مرة رافائيل نادال سيعتزل الشهر القادم',
    time: 'منذ 6 دقائق',
    imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
  },
  {
    title: 'بطل الجراند سلام 22 مرة رافائيل نادال سيعتزل الشهر القادم',
    time: 'منذ 6 دقائق',
    imageUrl: 'https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80',
  }
];

export default function SimpleNewsWidget() {
  return (
    <div className={styles.newsList} dir="rtl">
        <br></br>
        <div className="text-lg leading-relaxed">
        <h1 className="text-4xl font-bold mb-4">في مخيم البريج الأطفال يتوارثون الألم</h1>
لم يسلم مخيم البريج من انتهاكات الاحتلال الإسرائيلي التي استهدفت قطاع غزة بالكامل منذ بدء عملية التصعيد. الأسر الفلسطينية تعاني من فقدان الأحباء والدمار الواسع الذي لحق بالمنازل والبنية التحتية.
      </div>
      {newsItems.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.time}>{item.time}</p>
          </div>
          <img
            src={item.imageUrl}
            alt={item.title}
            width={100}
            height={100}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}

