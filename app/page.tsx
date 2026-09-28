'use client';

import React from 'react';

const products = [
  {
    id: 1,
    title: "دليل التسويق الرقمي الشامل 2026",
    category: "كتاب إلكتروني (PDF)",
    price: "$29",
    description: "استراتيجيات خطوة بخطوة لمضاعفة المبيعات وأتمتة الحملات الإعلانية.",
    features: ["شرح خطط الأتمتة", "قوالب إعلانات جاهزة", "تحديثات مجانية لمدة سنة"],
    badge: "الأكثر مبيعاً",
    buyUrl: "https://fadimohammed2.gumroad.com/l/mvcxzz"
  },
  {
    id: 2,
    title: "حزمة قوالب خطط الأعمال وإدارة المشاريع",
    category: "ملفات Notion & Excel",
    price: "$49",
    description: "مجموعة قوالب احترافية قابلة للتعديل لإدارة الأهداف والميزانيات والجداول الزمنية.",
    features: ["أكثر من 15 قالب جاهز", "سهل التخصيص بالكامل", "مناسب للشركات الناشئة"],
    badge: "جديد",
    buyUrl: "https://fadimohammed2.gumroad.com/l/mvcxzz"
  },
  {
    id: 3,
    title: "دورة أتمتة الأعمال وبناء المنصات بدون كود",
    category: "دورة فيديو + ملفات عمل",
    price: "$99",
    description: "تعلم كيف تبني أنظمة تعمل وتبيع 24/7 دون حاجة للتواجد الشخصي.",
    features: ["ساعتان من الشرح التطبيقي", "روابط الأدوات والأكواد", "دعم عبر مجتمع خاص"],
    badge: "موصى به",
    buyUrl: "https://fadimohammed2.gumroad.com/l/mvcxzz"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl text-indigo-600">
            <span>⚡ متجر الرقميات</span>
          </div>
          <a
            href="#products"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-indigo-200"
          >
            تصفح المنتجات
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 border-b border-slate-100 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            🛡️ التسليم آلي وفوري 100%
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            منصتك الذكية للحصول على أفضل <span className="text-indigo-600">المنتجات الرقمية</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            حمل الأدوات، الأدلة، والقوالب الجاهزة التي تساعدك على تسريع نمو أعمالك ومشاريعك فوراً وبأعلى جودة.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <span>✅ تحميل مباشر بعد الشراء</span>
            <span>✅ دفع آمن ومشفر</span>
            <span>✅ دعم متواصل</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main id="products" className="max-w-6xl mx-auto px-6 py-16 flex-grow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">المنتجات المتاحة للتحميل الفوري</h2>
          <p className="text-slate-600">اختر المنتج المناسب لك وابدأ الاستفادة منه الآن</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                  {product.badge}
                </span>
              )}
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-2">{product.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">السعر</span>
                  <span className="text-2xl font-black text-slate-900">{product.price}</span>
                </div>
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors text-center inline-block"
                >
                  📥 شراء الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <p>© 2026 جميع الحقوق محفوظة - منصة المنتجات الرقمية.</p>
      </footer>
    </div>
  );
}
