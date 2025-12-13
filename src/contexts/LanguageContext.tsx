import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang",
    features: "Fitur",
    contact: "Kontak",
    language: "id",
    
    // Hero
    heroTitle: "Digitalkind",
    heroSlogan: "Caring Your Anxiety with Gently",
    heroDescription: "Platform yang hadir untuk membantu Anda mengenali dan mengatasi kecemasan dengan pendekatan yang lembut, penuh perhatian, dan berbasis edukasi.",
    exploreFeatures: "Jelajahi Fitur",
    learnMore: "Pelajari Lebih Lanjut",
    
    // Features Preview
    gentleApproach: "Pendekatan Lembut",
    gentleApproachDesc: "Kami memahami setiap orang berbeda. Platform kami dirancang dengan pendekatan yang penuh empati.",
    richResources: "Sumber Lengkap",
    richResourcesDesc: "Akses artikel, video, audio, dan podcast pilihan untuk membantu perjalanan Anda.",
    supportiveCommunity: "Komunitas Suportif",
    supportiveCommunityDesc: "Bergabunglah dengan komunitas yang saling mendukung dan berbagi pengalaman.",
    
    // CTA
    readyToBegin: "Siap Memulai Perjalanan Anda?",
    readyToBeginDesc: "Mari bersama-sama menciptakan ruang yang aman untuk kesehatan mental Anda.",
    getStarted: "Mulai Sekarang",
    
    // About
    aboutIntro: "Digitalkind adalah platform yang didedikasikan untuk membantu individu mengenali dan mengatasi anxiety dengan cara yang lembut dan penuh perhatian.",
    ourPurpose: "Tujuan Kami",
    ourPurposeDesc: "Memberikan edukasi dan dukungan praktis bagi mereka yang mengalami kecemasan, dengan informasi yang mudah dipahami dan dapat diakses kapan saja.",
    ourVision: "Visi Kami",
    ourVisionDesc: "Menjadi platform terpercaya dan ramah untuk kesehatan mental, khususnya dalam membantu mengatasi kecemasan di Indonesia.",
    ourMission: "Misi Kami",
    ourMissionDesc: "Menyediakan informasi terpercaya, memberikan tips praktis, dan membangun komunitas yang suportif untuk saling berbagi pengalaman.",
    togetherBetter: "Bersama, kita bisa menciptakan lingkungan yang lebih sehat untuk kesehatan mental.",
    
    // Features
    featuresTitle: "Fitur & Sumber Daya",
    featuresDesc: "Jelajahi berbagai sumber daya yang kami sediakan untuk mendukung perjalanan kesehatan mental Anda.",
    articles: "Artikel",
    articlesDesc: "Baca artikel informatif tentang anxiety dan cara mengatasinya.",
    readArticles: "Baca Artikel",
    tipsAndTricks: "Tips & Trik",
    tipsAndTricksDesc: "Tonton video tips praktis untuk mengelola kecemasan.",
    watchVideos: "Tonton Video",
    relaxingAudio: "Audio Menenangkan",
    relaxingAudioDesc: "Dengarkan suara alam dan musik yang menenangkan.",
    listenNow: "Dengarkan",
    podcasts: "Podcast",
    podcastsDesc: "Ikuti diskusi mendalam tentang kesehatan mental.",
    listenPodcasts: "Dengarkan Podcast",
    eduPosters: "Galeri Poster Edukasi",
    eduPostersDesc: "Lihat dan unduh poster edukatif tentang anxiety.",
    comingSoon: "Segera Hadir",
    community: "Komunitas Forum",
    communityDesc: "Bergabung dengan komunitas untuk berbagi dan berdiskusi.",
    joinCommunity: "Gabung Komunitas",
    
    // Articles
    articlesPageTitle: "Artikel Tentang Anxiety",
    articlesPageDesc: "Pilih kategori artikel yang ingin Anda baca untuk mempelajari lebih lanjut tentang anxiety",
    viewArticles: "Lihat Artikel",
    tipsAndTricksPageDesc: "Tonton video edukatif dan tips praktis untuk mengatasi anxiety",
    
    // Contact
    contactTitle: "Hubungi Kami",
    contactDesc: "Punya pertanyaan atau ingin berbagi? Kami siap mendengarkan Anda.",
    emailUs: "Email Kami",
    emailDesc: "Hubungi kami melalui email untuk pertanyaan atau dukungan.",
    sendEmail: "Kirim Email",
    followUs: "Ikuti Kami",
    followDesc: "Terhubung dengan kami di media sosial untuk update terbaru dan konten inspiratif.",
    stayConnected: "Mari tetap terhubung dan tumbuh bersama dalam perjalanan kesehatan mental.",
    
    // Anxiety First Aid Kit
    anxietyFirstAidKit: "Anxiety First Aid Kit",
    anxietyFirstAidKitDesc: "Siap belajar bersama? Yuk coba pertolongan pertama pada saat anxiety",
    tryMe: "Yuk Coba",
    
    // Anxiety Introduction
    whatIsAnxiety: "Apa itu Anxiety? Dan Mengapa Kita Harus Tau?",
    anxietyIntroText: "Di tengah kehidupan digital yang serba cepat, banyak dari kita sering merasa cemas tanpa benar-benar menyadarinya. Perasaan khawatir berlebihan, jantung berdebar, atau sulit tidur bisa jadi tanda dari anxiety — atau gangguan kecemasan. Ini bukan sekadar perasaan gugup biasa, melainkan kondisi mental yang dapat memengaruhi cara seseorang berpikir, beraktivitas, dan berinteraksi dengan orang lain. Mengetahui apa itu anxiety penting karena kesadaran adalah langkah pertama untuk peduli terhadap kesehatan mental sendiri dan orang di sekitar kita. Dengan pemahaman yang tepat, kita bisa mengenali gejalanya lebih dini, mengurangi stigma, dan mencari bantuan secara bijak. Melalui Digitalkind, kami berupaya menghadirkan informasi yang mudah dipahami, interaktif, dan relevan agar semua orang dapat belajar memahami Gangguan Kecemasan secara positif. — dimulai dari mengenal apa itu anxiety.",
    
    // Why Digitalkind
    whyDigitalkind: "Mengapa Harus Digitalkind?",
    
    // Testimonials
    whatTheySay: "Apa Kata Mereka?",
    readyToStartTogether: "Siap Memulai Perjalanan Bersama?",
    letsStart: "Yuk Mulai",
    
    // Your Wellness Companion
    yourWellnessCompanion: "Teman Kesehatan Mental Anda",
    
    // Chat Messages
    chatMessage1: "Gejala anxiety menyerang? Tapi bingung harus gimana?",
    chatMessage2: "Anxiety First Aid Kit Digitalkind solusinya! Yuk coba",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    features: "Features",
    contact: "Contact",
    language: "en",
    
    // Hero
    heroTitle: "Digitalkind",
    heroSlogan: "Caring Your Anxiety with Gently",
    heroDescription: "A platform dedicated to helping you recognize and manage anxiety with a gentle, caring, and education-based approach.",
    exploreFeatures: "Explore Features",
    learnMore: "Learn More",
    
    // Features Preview
    gentleApproach: "Gentle Approach",
    gentleApproachDesc: "We understand everyone is different. Our platform is designed with an empathetic approach.",
    richResources: "Rich Resources",
    richResourcesDesc: "Access curated articles, videos, audio, and podcasts to support your journey.",
    supportiveCommunity: "Supportive Community",
    supportiveCommunityDesc: "Join a community that supports and shares experiences with each other.",
    
    // CTA
    readyToBegin: "Ready to Begin Your Journey?",
    readyToBeginDesc: "Let's create a safe space for your mental health together.",
    getStarted: "Get Started Today",
    
    // About
    aboutIntro: "Digitalkind is a platform dedicated to helping individuals recognize and manage anxiety in a gentle and caring way.",
    ourPurpose: "Our Purpose",
    ourPurposeDesc: "Providing education and practical support for those experiencing anxiety, with information that is easy to understand and accessible anytime.",
    ourVision: "Our Vision",
    ourVisionDesc: "To become a trusted and friendly platform for mental health, especially in helping overcome anxiety.",
    ourMission: "Our Mission",
    ourMissionDesc: "Providing trusted information, practical tips, and building a supportive community to share experiences.",
    togetherBetter: "Together, we can create a healthier environment for mental health.",
    
    // Features
    featuresTitle: "Features & Resources",
    featuresDesc: "Explore the various resources we provide to support your mental health journey.",
    articles: "Articles",
    articlesDesc: "Read informative articles about anxiety and how to overcome it.",
    readArticles: "Read Articles",
    tipsAndTricks: "Tips & Tricks",
    tipsAndTricksDesc: "Watch practical video tips for managing anxiety.",
    watchVideos: "Watch Videos",
    relaxingAudio: "Relaxing Audio",
    relaxingAudioDesc: "Listen to nature sounds and calming music.",
    listenNow: "Listen Now",
    podcasts: "Podcasts",
    podcastsDesc: "Follow in-depth discussions about mental health.",
    listenPodcasts: "Listen to Podcasts",
    eduPosters: "Educational Poster Gallery",
    eduPostersDesc: "View and download educational posters about anxiety.",
    comingSoon: "Coming Soon",
    community: "Community Forum",
    communityDesc: "Join the community to share and discuss.",
    joinCommunity: "Join Community",
    
    // Articles
    articlesPageTitle: "Articles About Anxiety",
    articlesPageDesc: "Choose the article category you want to read to learn more about anxiety",
    viewArticles: "View Articles",
    tipsAndTricksPageDesc: "Watch educational videos and practical tips for managing anxiety",
    
    // Contact
    contactTitle: "Contact Us",
    contactDesc: "Have questions or want to share? We're here to listen.",
    emailUs: "Email Us",
    emailDesc: "Contact us via email for questions or support.",
    sendEmail: "Send Email",
    followUs: "Follow Us",
    followDesc: "Connect with us on social media for the latest updates and inspiring content.",
    stayConnected: "Let's stay connected and grow together on our mental health journey.",
    
    // Anxiety First Aid Kit
    anxietyFirstAidKit: "Anxiety First Aid Kit",
    anxietyFirstAidKitDesc: "Ready to learn together? Let's try first aid during anxiety",
    tryMe: "Try Me",
    
    // Anxiety Introduction
    whatIsAnxiety: "What is Anxiety? And Why Should We Know?",
    anxietyIntroText: "In the fast-paced digital life, many of us often feel anxious without really realizing it. Excessive worry, pounding heart, or difficulty sleeping could be signs of anxiety — a mental condition that can affect how someone thinks, acts, and interacts with others. Knowing what anxiety is important because awareness is the first step to caring for our own mental health and those around us. With proper understanding, we can recognize symptoms early, reduce stigma, and seek help wisely. Through Digitalkind, we strive to present information that is easy to understand, interactive, and relevant so everyone can learn to understand Anxiety Disorders positively — starting from knowing what anxiety is.",
    
    // Why Digitalkind
    whyDigitalkind: "Why Choose Digitalkind?",
    
    // Testimonials
    whatTheySay: "What They Say",
    readyToStartTogether: "Ready to Start the Journey Together?",
    letsStart: "Let's Start",
    
    // Your Wellness Companion
    yourWellnessCompanion: "Your Mental Wellness Companion",
    
    // Chat Messages
    chatMessage1: "Anxiety symptoms attacking? But confused what to do?",
    chatMessage2: "Anxiety First Aid Kit Digitalkind is the solution! Let's try",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
