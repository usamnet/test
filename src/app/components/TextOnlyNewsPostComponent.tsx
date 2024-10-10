import React from 'react';

const TextOnlyNewsPostComponent = () => {
  const newsData = [
    {
      title: "ماريوت توافق على دفع 52 مليون دولار لتعزيز أمن البيانات",
      imageUrl: "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80",
      sections: [
        {
          items: [
            { text: "هوندا تستدعي 1.7 مليون مركبة بسبب مشكلة في التوجيه", link: "#" },
            { text: "كيف يمكن للتضخم أن يؤثر على الانتخابات", link: "#" },
            { text: "ماكدونالدز تقاضي شركات اللحوم الكبرى بتهمة التواطؤ لرفع أسعار اللحوم", link: "#" }
          ]
        },
        {
          items: [
            { text: "هيونداي تبدأ إنتاج سيارات الدفع الرباعي الكهربائية", link: "#" },
            { text: "ترامب وهاريس يقدمان خطط تصنيع متنافسة", link: "#" },
            { text: "تعليق إضراب عمال الموانئ بحسب النقابة", link: "#" }
          ]
        }
      ]
    },
    {
      title: "وكالة الأمم المتحدة تحذر من انهيار محتمل لعمل الإغاثة في غزة",
      imageUrl: "https://www.aljazeera.net/wp-content/uploads/2024/09/%D8%A8%D8%A7%D8%B3%D9%85-%D9%86%D8%B9%D9%8A%D9%85-2-1727523115.jpg?resize=730%2C410&quality=80",
      sections: [
        {
          items: [
            { text: "عام من الحرب في غزة: دفتر ملاحظات الصحفيين", link: "#" },
            { text: "الولايات المتحدة تفرض حظر التأشيرات على قادة سابقين من الإكوادور", link: "#" },
            { text: "السعودية لن تكون ضمن مجلس حقوق الإنسان التابع للأمم المتحدة", link: "#" }
          ]
        },
        {
          items: [
            { text: "ارتفاع حصيلة القتلى في هجوم العصابات على بلدة في هايتي إلى 115", link: "#" },
            { text: "باكستان تسجل زيادة في حالات الإصابة بشلل الأطفال", link: "#" },
            { text: "منشق كوري شمالي يسرق حافلة لإعادة الدخول: الشرطة", link: "#" }
          ]
        }
      ]
    }
  ];

  return (
    <div dir="rtl" className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">الأعمال <span className="text-xl">&#x279C;</span></h2>
        <h2 className="text-2xl font-bold">الدولية <span className="text-xl">&#x279C;</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsData.map((newsSection, index) => (
          <div key={index} className="">
            <h2 className="text-lg font-bold text-black mb-2">{newsSection.title}</h2>
            <img src={newsSection.imageUrl} alt={newsSection.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <div className="flex flex-col md:flex-row gap-4">
              {newsSection.sections.map((section, sectionIndex) => (
                <ul key={sectionIndex} className="flex-1 text-gray-800">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-1 border-b pb-1">
                      <a href={item.link} className="font-bold text-black">{item.text}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextOnlyNewsPostComponent;