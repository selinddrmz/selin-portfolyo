"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'tr' | 'en' | 'ja'>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    tr: {
      title: "Selin Durmaz",
      hello: "Merhaba! 👋",
      about: "Manisa Celal Bayar Üniversitesi'nde Büyük Veri Analistliği, İstanbul Üniversitesi'nde Bilgisayar Programcılığı öğrencisiyim. Veri analizi, makine öğrenmesi ve siber güvenliğe ilgi duyan, üretmeye hevesli bir adayım.",
      connect: "İletişime Geç",
      eduTitle: "Eğitim",
      edu1: "Manisa Celal Bayar Üniversitesi",
      edu1Sub: "Büyük Veri Analistliği (Ön Lisans)",
      edu2: "İstanbul Üniversitesi (AUZEF)",
      edu2Sub: "Bilgisayar Programcılığı",
      toolsTitle: "Araçlar",
      skillsTitle: "Neler Yapıyorum?",
      skills: ["Veri Analizi", "Makine Öğrenmesi", "Python", "SQL", "Linux", "Siber Güvenlik"],
      certTitle: "Sertifikalarım",
      certs: [
        "Cisco - Linux Girişi",
        "Cisco - Siber Güvenliğe Giriş",
        "Cisco - Python Temelleri",
        "Turkcell - Veri Okuryazarlığı",
        "BTK Akademi - Siber Güvenlik"
      ],
      projectsTitle: "Öne Çıkan Projelerim 🚀",
      project1Name: "Makine Öğrenmesi ile Dinamik Sefer Optimizasyonu",
      project1Desc: "Manisa 21 numaralı otobüs hattı veri seti kullanılarak geliştirdiğim bu projede, statik sefer saatlerini veriye dayalı olarak optimize etmeyi ve yolcuların durak bekleme sürelerini en aza indirmeyi hedefledim.",
      project1Tech: ["Python", "Pandas", "Scikit-Learn", "Veri Analizi"],
      footerText: "© 2026 Selin Durmaz. Tasarım ve Geliştirme: Selin Durmaz"
    },
    en: {
      title: "Selin Durmaz",
      hello: "Hello! 👋",
      about: "I'm studying Big Data Analytics at Manisa Celal Bayar University and Computer Programming at Istanbul University. I am a candidate passionate about data analysis, machine learning, and cybersecurity.",
      connect: "Let's Connect",
      eduTitle: "Education",
      edu1: "Manisa Celal Bayar University",
      edu1Sub: "Big Data Analytics (Associate Degree)",
      edu2: "Istanbul University (AUZEF)",
      edu2Sub: "Computer Programming",
      toolsTitle: "Tools",
      skillsTitle: "What I Do",
      skills: ["Data Analysis", "Machine Learning", "Python", "SQL", "Linux", "Cybersecurity"],
      certTitle: "Certifications",
      certs: [
        "Cisco - Intro to Linux",
        "Cisco - Intro to Cybersecurity",
        "Cisco - Python Essentials",
        "Turkcell - Data Literacy",
        "BTK Academy - Cybersecurity"
      ],
      projectsTitle: "Featured Projects 🚀",
      project1Name: "Dynamic Transit Optimization with Machine Learning",
      project1Desc: "In this project, developed using the Manisa bus line 21 dataset, I aimed to optimize static schedule times based on data and minimize passenger waiting times at stops.",
      project1Tech: ["Python", "Pandas", "Scikit-Learn", "Data Analysis"],
      footerText: "© 2026 Selin Durmaz. Designed and Developed by Selin Durmaz"
    },
    ja: {
      title: "セリン・ドゥルマズ",
      hello: "こんにちは！ 👋",
      about: "マニサ・ジェラル・バヤル大学でビッグデータ分析を、イスタンブール大学でコンピュータプログラミングを学んでいます。データ分析、機械学習、サイバーセキュリティに情熱を注ぐ候補者です。",
      connect: "お問い合わせ",
      eduTitle: "学歴",
      edu1: "マニサ・ジェラル・バヤル大学",
      edu1Sub: "ビッグデータ分析（準学士）",
      edu2: "イスタンブール大学 (AUZEF)",
      edu2Sub: "コンピュータプログラミング",
      toolsTitle: "ツール",
      skillsTitle: "スキル",
      skills: ["データ分析", "機械学習", "Python", "SQL", "Linux", "サイバーセキュリティ"],
      certTitle: "資格・認定",
      certs: [
        "Cisco - Linux入門",
        "Cisco - サイバーセキュリティ入門",
        "Cisco - Pythonエッセンシャル",
        "Turkcell - データリテラシー",
        "BTK Akademi - サイバーセキュリティ"
      ],
      projectsTitle: "注目のプロジェクト 🚀",
      project1Name: "機械学習による動的交通最適化",
      project1Desc: "マニサの21番バス路線のデータセットを使用して開発したこのプロジェクトでは、データに基づいて静的なスケジュールを最適化し、乗客の待ち時間を最小限に抑えることを目指しました。",
      project1Tech: ["Python", "Pandas", "Scikit-Learn", "データ分析"],
      footerText: "© 2026 Selin Durmaz. 設計および開発: Selin Durmaz"
    }
  };

  const t = content[lang];

  if (!mounted) return null;

  const toggleLang = () => {
    if (lang === 'tr') setLang('en');
    else if (lang === 'en') setLang('ja');
    else setLang('tr');
  };

  const getLangLabel = () => {
    if (lang === 'tr') return 'TÜRKÇE 🇹🇷';
    if (lang === 'en') return 'ENGLISH 🇬🇧';
    return '日本語 🇯🇵';
  };

  return (
    <main className="min-h-screen bg-[#090514] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#240b36] text-white font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-black pb-10 relative">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes swimRight {
          0% { transform: translateX(-20vw) translateY(0) scaleX(-1) rotate(0deg); }
          25% { transform: translateX(25vw) translateY(-40px) scaleX(-1) rotate(-15deg); }
          50% { transform: translateX(60vw) translateY(30px) scaleX(-1) rotate(10deg); }
          75% { transform: translateX(95vw) translateY(-20px) scaleX(-1) rotate(-10deg); }
          100% { transform: translateX(120vw) translateY(0) scaleX(-1) rotate(0deg); }
        }
        @keyframes swimLeft {
          0% { transform: translateX(120vw) translateY(0) rotate(0deg); }
          25% { transform: translateX(80vw) translateY(50px) rotate(15deg); }
          50% { transform: translateX(40vw) translateY(-30px) rotate(-10deg); }
          75% { transform: translateX(10vw) translateY(40px) rotate(10deg); }
          100% { transform: translateX(-20vw) translateY(0) rotate(0deg); }
        }
        
        @keyframes neonPulseCyan {
          0%, 100% { filter: drop-shadow(0 0 10px #00f3ff) drop-shadow(0 0 25px #00f3ff) brightness(1.2); }
          50% { filter: drop-shadow(0 0 20px #00f3ff) drop-shadow(0 0 45px #00f3ff) brightness(1.6); }
        }
        @keyframes neonPulsePink {
          0%, 100% { filter: drop-shadow(0 0 10px #ff00ea) drop-shadow(0 0 25px #ff00ea) brightness(1.2); }
          50% { filter: drop-shadow(0 0 20px #ff00ea) drop-shadow(0 0 45px #ff00ea) brightness(1.6); }
        }
        @keyframes neonPulseYellow {
          0%, 100% { filter: drop-shadow(0 0 10px #eaff00) drop-shadow(0 0 25px #eaff00) brightness(1.2); }
          50% { filter: drop-shadow(0 0 20px #eaff00) drop-shadow(0 0 45px #eaff00) brightness(1.6); }
        }
        @keyframes neonPulseGreen {
          0%, 100% { filter: drop-shadow(0 0 10px #00ff2a) drop-shadow(0 0 25px #00ff2a) brightness(1.2); }
          50% { filter: drop-shadow(0 0 20px #00ff2a) drop-shadow(0 0 45px #00ff2a) brightness(1.6); }
        }

        @keyframes floatBubble {
          0% { transform: translateY(100vh) scale(0.5); opacity: 0; filter: drop-shadow(0 0 5px #00f3ff); }
          50% { opacity: 0.8; filter: drop-shadow(0 0 15px #00f3ff); }
          100% { transform: translateY(-10vh) scale(1.5); opacity: 0; filter: drop-shadow(0 0 5px #00f3ff); }
        }
        
        .fish-container-1 { animation: swimRight 16s ease-in-out infinite; position: absolute; top: 15%; z-index: 0; }
        .fish-container-2 { animation: swimLeft 20s ease-in-out infinite; animation-delay: 2s; position: absolute; top: 35%; z-index: 0; }
        .fish-container-3 { animation: swimRight 24s ease-in-out infinite; animation-delay: 5s; position: absolute; top: 65%; z-index: 0; }
        .fish-container-4 { animation: swimLeft 28s ease-in-out infinite; animation-delay: 1s; position: absolute; top: 80%; z-index: 0; }
        
        .neon-cyan { animation: neonPulseCyan 2s infinite alternate; display: inline-block; }
        .neon-pink { animation: neonPulsePink 2.5s infinite alternate; display: inline-block; }
        .neon-yellow { animation: neonPulseYellow 3s infinite alternate; display: inline-block; }
        .neon-green { animation: neonPulseGreen 2.2s infinite alternate; display: inline-block; }
        
        .bubble { animation: floatBubble 8s ease-in infinite; border-radius: 50%; background: rgba(0, 243, 255, 0.3); border: 1px solid rgba(0, 243, 255, 0.8); }
        
        .neon-glass-card {
          background: rgba(15, 12, 41, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 243, 255, 0.2);
          box-shadow: 0 0 30px 0 rgba(0, 243, 255, 0.05), inset 0 0 20px 0 rgba(255, 0, 234, 0.05);
        }
        .neon-glass-card:hover {
          border: 1px solid rgba(0, 243, 255, 0.5);
          box-shadow: 0 0 40px 0 rgba(0, 243, 255, 0.15), inset 0 0 30px 0 rgba(255, 0, 234, 0.15);
        }
      `}} />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="fish-container-1 text-6xl md:text-8xl"><span className="neon-cyan">🐠</span></div>
        <div className="fish-container-2 text-5xl md:text-7xl"><span className="neon-pink">🐡</span></div>
        <div className="fish-container-3 text-6xl md:text-8xl"><span className="neon-yellow">🐟</span></div>
        <div className="fish-container-4 text-7xl md:text-9xl"><span className="neon-green">🦑</span></div>
        
        <div className="absolute left-[15%] w-6 h-6 bubble" style={{animationDelay: '0s'}}></div>
        <div className="absolute left-[35%] w-4 h-4 bubble" style={{animationDelay: '3s'}}></div>
        <div className="absolute left-[65%] w-8 h-8 bubble" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-[85%] w-5 h-5 bubble" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#150a21]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.4)] border border-cyan-400 text-sm font-bold hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,234,0.6)] hover:border-pink-500 transition-all text-cyan-300"
        >
          <span className="text-lg">🌐</span> {getLangLabel()}
        </button>
      </div>

      <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center z-10 pt-10">
        <div className="absolute top-[30%] left-[10%] md:left-[20%] w-16 h-16 bg-[#1a1a2e] rounded-2xl shadow-[0_0_25px_rgba(234,255,0,0.6)] border-2 border-yellow-300 flex items-center justify-center text-yellow-300 font-black text-xl hover:scale-125 transition-transform rotate-12">
          Py
        </div>
        <div className="absolute bottom-[20%] right-[10%] md:right-[20%] w-14 h-14 bg-[#1a1a2e] rounded-full shadow-[0_0_25px_rgba(0,243,255,0.6)] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 font-black text-lg hover:scale-125 transition-transform -rotate-12">
          DB
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 drop-shadow-[0_0_25px_rgba(255,0,234,0.4)] px-4">
          {t.title}
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20 pb-16">
        
        <div className="neon-glass-card rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-4xl font-black mb-4 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">{t.hello}</h2>
          <p className="text-gray-200 leading-relaxed font-medium text-lg">
            {t.about}
          </p>
        </div>

        <div className="neon-glass-card rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center">
          <h2 className="text-4xl font-black mb-6 text-pink-400 drop-shadow-[0_0_10px_rgba(255,0,234,0.5)]">{t.connect}</h2>
          <div className="space-y-5">
            <a href="mailto:selink9900@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 transition-colors font-bold text-lg group">
              <span className="w-12 h-12 rounded-2xl bg-[#150a21] border border-cyan-500/50 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] transition-all">✉️</span>
              selink9900@gmail.com
            </a>
            <a href="https://github.com/selinddrmz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 transition-colors font-bold text-lg group">
              <span className="w-12 h-12 rounded-2xl bg-[#150a21] border border-cyan-500/50 flex items-center justify-center text-xl group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] transition-all">💻</span>
              github.com/selinddrmz
            </a>
            <a href="https://www.linkedin.com/in/selin-d-37852b374" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 transition-colors font-bold text-lg group">
              <span className="w-12 h-12 rounded-2xl bg-[#150a21] border border-cyan-500/50 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] transition-all">🔗</span>
              linkedin.com/in/selin-d-37852b374
            </a>
          </div>
        </div>

        <div className="md:col-span-2 neon-glass-card rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-black mb-6 text-yellow-300 drop-shadow-[0_0_10px_rgba(234,255,0,0.5)]">{t.projectsTitle}</h2>
          <div className="bg-[#090514]/50 border border-yellow-300/30 p-8 rounded-3xl hover:border-yellow-300/80 hover:shadow-[0_0_30px_rgba(234,255,0,0.2)] transition-all">
            <h3 className="font-black text-2xl text-white mb-3">{t.project1Name}</h3>
            <p className="text-gray-300 font-medium text-lg leading-relaxed mb-6">{t.project1Desc}</p>
            <div className="flex flex-wrap gap-3">
              {t.project1Tech.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-[#1a0b2e] border border-cyan-500/50 text-cyan-300 rounded-xl text-sm font-bold shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="neon-glass-card rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-black mb-6 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">{t.eduTitle}</h2>
          <div className="space-y-6">
            <div className="group bg-[#090514]/50 border border-white/5 p-5 rounded-2xl hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all">
              <h3 className="font-black text-xl text-white">{t.edu1}</h3>
              <p className="text-cyan-200 mt-1 font-medium">{t.edu1Sub}</p>
            </div>
            <div className="group bg-[#090514]/50 border border-white/5 p-5 rounded-2xl hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(255,0,234,0.2)] transition-all">
              <h3 className="font-black text-xl text-white">{t.edu2}</h3>
              <p className="text-pink-200 mt-1 font-medium">{t.edu2Sub}</p>
            </div>
          </div>
        </div>

        <div className="neon-glass-card rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-black mb-6 text-pink-400 drop-shadow-[0_0_10px_rgba(255,0,234,0.5)]">{t.skillsTitle}</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {t.skills.map((skill, i) => (
              <span key={i} className="px-5 py-2.5 bg-[#1a0b2e] border border-pink-500/50 text-white rounded-2xl text-sm font-black shadow-[0_0_15px_rgba(255,0,234,0.3)] hover:scale-110 hover:-rotate-2 hover:shadow-[0_0_25px_rgba(255,0,234,0.8)] transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
          
          <h2 className="text-xl font-black mb-4 text-cyan-300">{t.toolsTitle}</h2>
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#090514] shadow-[0_0_20px_rgba(234,255,0,0.4)] flex items-center justify-center text-yellow-300 font-black text-xl hover:scale-110 hover:shadow-[0_0_30px_rgba(234,255,0,0.8)] transition-all cursor-pointer border border-yellow-400/50">Py</div>
            <div className="w-16 h-16 rounded-2xl bg-[#090514] shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center text-cyan-300 font-black text-sm hover:scale-110 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all cursor-pointer border border-cyan-400/50">SQL</div>
            <div className="w-16 h-16 rounded-2xl bg-[#090514] shadow-[0_0_20px_rgba(255,0,234,0.4)] flex items-center justify-center text-pink-400 font-black text-lg hover:scale-110 hover:shadow-[0_0_30px_rgba(255,0,234,0.8)] transition-all cursor-pointer border border-pink-500/50">Nx</div>
          </div>
        </div>

        <div className="md:col-span-2 neon-glass-card rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-black mb-6 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">{t.certTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.certs.map((cert, index) => (
              <div key={index} className="p-5 rounded-2xl bg-[#090514]/60 font-bold text-gray-200 text-sm flex items-center gap-3 hover:bg-[#1a0b2e] hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all border border-white/5">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,243,255,0.8)] animate-pulse"></div>
                {cert}
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="relative z-20 max-w-6xl mx-auto px-6 pt-10 pb-4 text-center border-t border-white/10">
        <p className="text-gray-400 font-medium text-sm drop-shadow-md">
          {t.footerText}
        </p>
      </footer>
    </main>
  );
}
