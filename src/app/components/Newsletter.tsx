import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('شكرًا لاشتراكك في النشرة الإخبارية!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Mail className="mr-2" size={24} />
        النشرة الإخبارية
      </h2>
      <p className="text-gray-600 mb-4">اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والتحليلات.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          اشترك الآن
        </button>
      </form>
    </div>
  );
};

export default Newsletter;