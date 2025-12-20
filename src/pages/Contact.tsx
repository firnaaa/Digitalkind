import Navigation from "@/components/Navigation";
import { Mail, Instagram, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";
 
// Import images
import contactEmail from "@/assets/contact-email.png";
import quote1 from "@/assets/quotes/quote-1.jpg";
import quote2 from "@/assets/quotes/quote-2.jpg";
import quote3 from "@/assets/quotes/quote-3.jpg";
import quote4 from "@/assets/quotes/quote-4.jpg";
import quote5 from "@/assets/quotes/quote-5.jpg";
import quote6 from "@/assets/quotes/quote-6.jpg";
import quote7 from "@/assets/quotes/quote-7.jpg";
import quote8 from "@/assets/quotes/quote-8.jpg";
import quote9 from "@/assets/quotes/quote-9.jpg";
import quote10 from "@/assets/quotes/quote-10.jpg";

const Contact = () => {
  const { t, language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const quotes = [
    {
      quote: language === 'id' 
        ? "Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu."
        : "Every day is a new opportunity to become the best version of yourself.",
      image: quote1
    },
    {
      quote: language === 'id' 
        ? "Kamu tidak sendirian dalam perjuangan ini. Kita semua belajar untuk bertumbuh."
        : "You are not alone in this struggle. We are all learning to grow.",
      image: quote2
    },
    {
      quote: language === 'id' 
        ? "Tarik napas dalam-dalam. Lepaskan semua kekhawatiran. Kamu lebih kuat dari yang kamu kira."
        : "Take a deep breath. Let go of all worries. You are stronger than you think.",
      image: quote3
    },
    {
      quote: language === 'id' 
        ? "Kecemasan tidak mendefinisikan siapa dirimu. Kamu adalah pejuang yang luar biasa."
        : "Anxiety does not define who you are. You are an incredible warrior.",
      image: quote4
    },
    {
      quote: language === 'id' 
        ? "Satu langkah kecil setiap hari membawa kita lebih dekat pada ketenangan."
        : "One small step each day brings us closer to peace.",
      image: quote5
    },
    {
      quote: language === 'id' 
        ? "Dalam kesunyian, kamu menemukan kekuatan. Dalam ketenangan, kamu menemukan diri."
        : "In silence, you find strength. In stillness, you find yourself.",
      image: quote6
    },
    {
      quote: language === 'id' 
        ? "Berani berbicara tentang kesehatan mental adalah tanda kekuatan, bukan kelemahan."
        : "Daring to talk about mental health is a sign of strength, not weakness.",
      image: quote7
    },
    {
      quote: language === 'id' 
        ? "Seperti kupu-kupu, kamu juga bisa berubah menjadi sesuatu yang indah."
        : "Like a butterfly, you too can transform into something beautiful.",
      image: quote8
    },
    {
      quote: language === 'id' 
        ? "Bersyukur untuk hal-hal kecil dapat mengubah cara kita melihat dunia."
        : "Being grateful for small things can change how we see the world.",
      image: quote9
    },
    {
      quote: language === 'id' 
        ? "Besok adalah hari baru. Beri dirimu kesempatan untuk memulai kembali."
        : "Tomorrow is a new day. Give yourself the chance to start again.",
      image: quote10
    }
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const socialMedia = [
    {
      name: "Instagram",
      handle: "@digitalkind_",
      icon: Instagram,
      link: "https://www.instagram.com/digitalkind_?igsh=MXhqaDhkZm1tcGJ0OQ==",
      color: "hover:bg-pink-50 hover:border-pink-300 dark:hover:bg-pink-950/30",
    },
    {
      name: "TikTok",
      handle: "@digitalkindofficiall",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      link: "https://tiktok.com/@digitalkindofficiall",
      color: "hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-950/30",
    },
    {
      name: "YouTube",
      handle: "@digitalkindofficiall",
      icon: Youtube,
      link: "https://youtube.com/@digitalkindofficiall?si=O2evkmkBYk57ddFJ",
      color: "hover:bg-red-50 hover:border-red-300 dark:hover:bg-red-950/30",
    },
    {
      name: "Spotify",
      handle: "digitalkind",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      link: "https://spotify.link/djDNsqJgEXb",
      color: "hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950/30",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">{t("contactTitle")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("contactDesc")}
            </p>
          </div>

          {/* Email Contact with Image */}
          <div className="mb-12 animate-fade-in">
            <Card className="group hover:shadow-hover transition-all duration-500 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={contactEmail} 
                    alt="Contact Us" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{t("emailUs")}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {t("emailDesc")}
                  </CardDescription>
                  <a 
                    href="mailto:digitalkindofficiall@gmail.com" 
                    className="inline-block"
                  >
                    <Button className="bg-primary hover:bg-primary/90 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105">
                      {t("sendEmail")}
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-primary">{t("followUs")}</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {t("followDesc")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialMedia.map((social, index) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className={`group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50 ${social.color}`}>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <social.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{social.name}</h3>
                        <p className="text-muted-foreground">{social.handle}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-primary font-medium">Visit →</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Positive Quotes Carousel */}
          <div className="mt-16 animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-primary">{language === 'id' ? "Kalimat afirmasi" : "Words of Affirmation"}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'id' 
                  ? "Mari tetap terhubung dan tumbuh bersama dalam perjalanan kesehatan mental"
                  : "Let's stay connected and grow together in our mental health journey"}
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
                {quotes.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-center group/quote cursor-pointer"
                    style={{ 
                      perspective: '1000px',
                      animationDelay: `${index * 100}ms` 
                    }}
                  >
                    <div 
                      className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-soft transition-all duration-500 group-hover/quote:shadow-hover group-hover/quote:-translate-y-4 group-hover/quote:scale-105"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateY(0deg)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'rotateY(5deg) rotateX(3deg)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt="Inspirational"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/quote:scale-110"
                      />
                      
                      {/* Overlay with Quote */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex items-end p-6">
                        <p className="text-primary-foreground text-lg font-medium leading-relaxed transform translate-y-2 group-hover/quote:translate-y-0 transition-transform duration-300">
                          "{item.quote}"
                        </p>
                      </div>

                      {/* 3D Border Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover/quote:border-primary/50 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
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

export default Contact;
