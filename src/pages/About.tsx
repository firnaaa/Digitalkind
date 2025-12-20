import Navigation from "@/components/Navigation";
import { Target, Eye, CheckCircle, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";
import aboutPurpose from "@/assets/about-purpose.png";
import aboutVision from "@/assets/about-vision.png";
import aboutMission from "@/assets/about-mission.png";

// News images
import news1 from "@/assets/news/news-1.png";
import news2 from "@/assets/news/news-2.png";
import news3 from "@/assets/news/news-3.png";
import news4 from "@/assets/news/news-4.png";
import news5 from "@/assets/news/news-5.png";
import news6 from "@/assets/news/news-6.png";
import news7 from "@/assets/news/news-7.png";
import news8 from "@/assets/news/news-8.png";
import news9 from "@/assets/news/news-9.png";
import news10 from "@/assets/news/news-10.png";

const About = () => {
  const { t, language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const articles = [
    {
      title: "Prevalensi gangguan kecemasan di Indonesia capai 68,7%",
      source: "ANTARA",
      hook: language === 'id' 
        ? "Seberapa banyak sebenarnya orang Indonesia yang hidup dengan kecemasan tanpa disadari, dan bisa jadi salah satunya adalah kamu?"
        : "How many Indonesians actually live with anxiety unknowingly, and could you be one of them?",
      link: "https://www.antaranews.com/berita/4698013/prevalensi-gangguan-kecemasan-di-indonesia-capai-687",
      image: news1
    },
    {
      title: "Anak 5 Kali Lebih Rentan Gangguan Kejiwaan",
      source: "Republika",
      hook: language === 'id'
        ? "Di balik senyum dan layar gadget anak, ada risiko kecemasan dan depresi yang jauh lebih besar dari yang dibayangkan orang tua."
        : "Behind children's smiles and gadget screens lies a risk of anxiety and depression far greater than parents imagine.",
      link: "https://ameera.republika.co.id/berita/t6yn3y425/anak-5-kali-lebih-rentan-gangguan-kejiwaan-mayoritas-gangguan-cemas-dan-depresi",
      image: news2
    },
    {
      title: "Krisis Kesehatan Mental di Indonesia 2025",
      source: "Republika",
      hook: language === 'id'
        ? "Indonesia sedang menghadapi \"tsunami sunyi\" kecemasan dan depresi—benarkah kita sudah siap menghadapinya?"
        : "Indonesia is facing a \"silent tsunami\" of anxiety and depression—are we ready to face it?",
      link: "https://kaltimtara.republika.co.id/posts/524922/krisis-kesehatan-mental-di-indonesia-tantangan-dan-solusi-di-tahun-2025",
      image: news3
    },
    {
      title: "Satu dari Tiga Remaja Indonesia Memiliki Masalah Kesehatan Mental",
      source: "UGM",
      hook: language === 'id'
        ? "Jika ada tiga teman di sebelahmu, kemungkinan satu di antaranya sedang berjuang dengan kecemasan yang tak pernah diceritakan."
        : "If there are three friends next to you, one of them is likely struggling with anxiety they never talk about.",
      link: "https://ugm.ac.id/id/berita/23086-hasil-survei-i-namhs-satu-dari-tiga-remaja-indonesia-memiliki-masalah-kesehatan-mental/",
      image: news4
    },
    {
      title: "Depresi dan Kecemasan Bisa Menurunkan Produktivitas Kerja",
      source: "UGM",
      hook: language === 'id'
        ? "Produktif di luar, hancur di dalam—apakah kecemasan diam-diam sudah menggerogoti performa kerjamu?"
        : "Productive on the outside, destroyed inside—has anxiety been silently eating away at your work performance?",
      link: "https://ugm.ac.id/id/berita/kenali-sejak-dini-depresi-dan-kecemasan-bisa-menurunkan-produktivitas-kerja/",
      image: news5
    },
    {
      title: "Lonjakan Gangguan Kecemasan dan Depresi pada Gen Z",
      source: "RSPP",
      hook: language === 'id'
        ? "Disebut generasi paling melek teknologi, tapi mengapa justru Gen Z yang paling banyak merasa cemas dan kewalahan dengan hidup?"
        : "Called the most tech-savvy generation, but why is Gen Z the most anxious and overwhelmed by life?",
      link: "https://rspp.co.id/artikel-detail-926-Lonjakan-Gangguan-Kecemasan-dan-Depresi-pada-Gen-Z.html",
      image: news6
    },
    {
      title: "Anxiety Disorder / Gangguan Kecemasan",
      source: "Ibunda.id",
      hook: language === 'id'
        ? "Cemas terus-menerus sampai susah menikmati hidup? Cari tahu apakah itu \"sekadar khawatir\" atau tanda gangguan kecemasan."
        : "Constantly anxious to the point of not enjoying life? Find out if it's \"just worry\" or a sign of anxiety disorder.",
      link: "https://www.ibunda.id/articles/anxiety-disorder-gangguan-kecemasan",
      image: news7
    },
    {
      title: "Mengatasi Kecemasan: Langkah Awal Menuju Hidup Nyaman",
      source: "Satu Persen",
      hook: language === 'id'
        ? "Kalau kepala terus penuh pikiran yang tidak bisa berhenti, artikel ini bisa jadi titik awal untuk hidup lebih tenang."
        : "If your head is always full of thoughts that won't stop, this article could be the starting point for a calmer life.",
      link: "https://satupersen.net/blog/mengatasi-kecemasan-langkah-awal-menuju-hidup-nyaman",
      image: news8
    },
    {
      title: "Generasi Gelisah: Tantangan Kesehatan Mental Gen Z dan Milenial",
      source: "RSUI",
      hook: language === 'id'
        ? "Scroll media sosial sebentar, tapi ujung-ujungnya malah cemas dan overthinking—ini potret nyata Gen Z dan milenial hari ini."
        : "A quick social media scroll that ends up causing anxiety and overthinking—this is the real portrait of Gen Z and millennials today.",
      link: "https://rs.ui.ac.id/umum/berita-artikel/artikel-populer/generasi-gelisah-tantangan-kesehatan-mental-generasi-z-dan-milenial",
      image: news9
    },
    {
      title: "Belajar Berdamai dengan Diri Sendiri Setelah Mengalami GAD",
      source: "Pijar Psikologi",
      hook: language === 'id'
        ? "Untuk kamu yang lelah \"berperang\" dengan pikiran sendiri, kisah ini menunjukkan bahwa hidup dengan kecemasan tetap bisa terasa layak dijalani."
        : "For those tired of \"fighting\" their own thoughts, this story shows that life with anxiety can still feel worth living.",
      link: "https://pijarpsikologi.org/blog/cerita-kami-belajar-berdamai-dengan-diri-sendiri-setelah-mengalami-generalized-anxiety-disorder",
      image: news10
    }
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 360;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="fixed inset-0 opacity-20 -z-10">
        <img src={aboutBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about")} <span className="text-primary">Digitalkind</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("aboutIntro")}
            </p>
          </div>

          {/* Main Content Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Purpose */}
            <div 
              className="group bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-3 animate-fade-in overflow-hidden cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={aboutPurpose} 
                  alt="Purpose" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{t("ourPurpose")}</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("ourPurposeDesc")}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div 
              className="group bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-3 animate-fade-in overflow-hidden cursor-pointer"
              style={{ animationDelay: '100ms', perspective: '1000px' }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={aboutVision} 
                  alt="Vision" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{t("ourVision")}</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("ourVisionDesc")}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div 
              className="group bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-3 animate-fade-in overflow-hidden cursor-pointer"
              style={{ animationDelay: '200ms', perspective: '1000px' }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={aboutMission} 
                  alt="Mission" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{t("ourMission")}</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("ourMissionDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* News Articles Carousel */}
          <div className="mt-16 animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">{language === 'id' ? "Berita & Artikel Terkait" : "Related News & Articles"}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'id' 
                  ? "Baca berita terbaru seputar kesehatan mental dan gangguan kecemasan di Indonesia"
                  : "Read the latest news about mental health and anxiety disorders in Indonesia"}
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative group/carousel">
              {/* Left Arrow */}
              <button
                onClick={() => scrollCarousel('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 -translate-x-4 group-hover/carousel:translate-x-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Carousel */}
              <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto pb-6 pt-4 px-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 snap-center group/article cursor-pointer block"
                    style={{ 
                      perspective: '1000px',
                      animationDelay: `${index * 100}ms` 
                    }}
                  >
                    <div 
                      className="relative w-[320px] bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-500 group-hover/article:shadow-hover group-hover/article:-translate-y-4 group-hover/article:scale-105 border border-border/30"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateY(0deg)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'rotateY(3deg) rotateX(3deg)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
                      }}
                    >
                      {/* Image */}
                      <div className="h-44 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/article:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                            {article.source}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover/article:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {article.hook}
                        </p>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover/article:gap-3 transition-all">
                          <span>{language === 'id' ? 'Baca Selengkapnya' : 'Read More'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>

                      {/* 3D Border Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover/article:border-primary/50 transition-all duration-300 pointer-events-none" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollCarousel('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 translate-x-4 group-hover/carousel:translate-x-0"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              <span className="text-sm text-muted-foreground animate-bounce-soft">
                {language === 'id' ? "← Geser untuk melihat lebih banyak →" : "← Swipe to see more →"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
