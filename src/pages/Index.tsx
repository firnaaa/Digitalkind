import { Link } from "react-router-dom";
import { Sparkles, Heart, Users, HeartPulse, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-calm.jpg";
import homeBg from "@/assets/home-bg.jpg";
import gentleApproach from "@/assets/gentle-approach.jpg";
import richResources from "@/assets/rich-resources.jpg";
import supportiveCommunity from "@/assets/supportive-community.jpg";
import anxietyPhoto1 from "@/assets/anxiety-photo-1.jpg";
import anxietyPhoto2 from "@/assets/anxiety-photo-2.jpg";
import anxietyPhoto3 from "@/assets/anxiety-photo-3.jpg";
import anxietyPhoto4 from "@/assets/anxiety-photo-4.jpg";
// AFK Carousel Images
import afkImage1 from "@/assets/afk-carousel/afk-1.jpg";
import afkImage2 from "@/assets/afk-carousel/afk-2.jpg";
import afkImage3 from "@/assets/afk-carousel/afk-3.jpg";
import afkImage4 from "@/assets/afk-carousel/afk-4.jpg";
import afkImage5 from "@/assets/afk-carousel/afk-5.jpg";
import afkImage6 from "@/assets/afk-carousel/afk-6.jpg";
import afkImage7 from "@/assets/afk-carousel/afk-7.jpg";
import afkImage8 from "@/assets/afk-carousel/afk-8.jpg";
import afkImage9 from "@/assets/afk-carousel/afk-9.jpg";
import afkImage10 from "@/assets/afk-carousel/afk-10.jpg";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [selectedAfkImage, setSelectedAfkImage] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const reviewScrollRef = useRef<HTMLDivElement>(null);
  const afkScrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll position tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewScrollRef.current) {
      const scrollAmount = 350;
      reviewScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollAfkImages = (direction: 'left' | 'right') => {
    if (afkScrollRef.current) {
      const scrollAmount = 200;
      afkScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const featureCards = [
    { 
      icon: Heart, 
      title: "gentleApproach", 
      desc: "gentleApproachDesc", 
      delay: 0.1,
      image: gentleApproach
    },
    { 
      icon: Sparkles, 
      title: "richResources", 
      desc: "richResourcesDesc", 
      delay: 0.2,
      image: richResources
    },
    { 
      icon: Users, 
      title: "supportiveCommunity", 
      desc: "supportiveCommunityDesc", 
      delay: 0.3,
      image: supportiveCommunity
    }
  ];

  const testimonials = [
    { name: "Sarah M.", rating: 5, text: "Digitalkind benar-benar membantu saya memahami anxiety dengan cara yang tidak menakutkan.", textEn: "Digitalkind really helped me understand anxiety in a non-scary way." },
    { name: "Andi P.", rating: 5, text: "Fitur audio relaxing-nya sangat membantu ketika saya merasa cemas!", textEn: "The relaxing audio feature is so helpful when I feel anxious!" },
    { name: "Maya L.", rating: 5, text: "Platform yang sangat informatif dan mudah dipahami. Terima kasih Digitalkind!", textEn: "Very informative and easy to understand platform. Thank you Digitalkind!" },
    { name: "Reza K.", rating: 4, text: "Podcast-nya sangat menginspirasi. Saya jadi lebih berani menghadapi kecemasan.", textEn: "The podcasts are very inspiring. I became braver facing anxiety." },
    { name: "Dina R.", rating: 5, text: "Anxiety First Aid Kit-nya lengkap banget! Sangat membantu di saat panik.", textEn: "The Anxiety First Aid Kit is so complete! Very helpful during panic." },
    { name: "Budi S.", rating: 5, text: "Saya suka cara Digitalkind menyampaikan informasi dengan lembut.", textEn: "I love how Digitalkind delivers information gently." },
    { name: "Fitri A.", rating: 4, text: "Poster edukasinya bagus untuk belajar tentang mental health!", textEn: "The educational posters are great for learning about mental health!" },
    { name: "Yoga T.", rating: 5, text: "Komunitas yang suportif dan saling mendukung. Highly recommended!", textEn: "Supportive community that helps each other. Highly recommended!" }
  ];

  const anxietyPhotos = [anxietyPhoto1, anxietyPhoto2, anxietyPhoto3, anxietyPhoto4];
  const afkCarouselImages = [afkImage1, afkImage2, afkImage3, afkImage4, afkImage5, afkImage6, afkImage7, afkImage8, afkImage9, afkImage10];

  // Calculate parallax offset for photos based on scroll position
  const getParallaxOffset = (index: number) => {
    const baseOffset = scrollY * 0.15;
    const staggerOffset = index * 15;
    const maxOffset = 180; // Maximum distance photos can travel
    const offset = Math.min(baseOffset + staggerOffset, maxOffset);
    return offset;
  };
  
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Full Page Background */}
      <div className="fixed inset-0 z-0">
        <img 
          src={homeBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 px-4 lg:px-8 overflow-hidden z-10">
        <div 
          className="absolute inset-0 opacity-30 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2 - scrollY * 0.3}px) scale(1.05)`
          }}
        >
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
                transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div 
              className="inline-flex items-center px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground animate-fade-in hover:scale-105 hover:bg-accent/70 transition-all duration-300 cursor-default"
              style={{ animationDelay: '0.1s', transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              {t("yourWellnessCompanion")}
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight animate-fade-in"
              style={{ 
                animationDelay: '0.2s',
                transform: `translate(${mousePosition.x}px, ${mousePosition.y - scrollY * 0.15}px)`
              }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:via-primary hover:to-primary/80 transition-all duration-500">
                {t("heroTitle")}
              </span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light animate-fade-in"
              style={{ animationDelay: '0.3s', transform: `translateY(${-scrollY * 0.08}px)` }}
            >
              {t("heroSlogan")}
            </p>
            
            <p 
              className="text-base md:text-lg text-muted-foreground max-w-3xl animate-fade-in"
              style={{ animationDelay: '0.4s', transform: `translateY(${-scrollY * 0.05}px)` }}
            >
              {t("heroDescription")}
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: '0.5s', transform: `translateY(${-scrollY * 0.03}px)` }}
            >
              <Link to="/features">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                >
                  {t("exploreFeatures")}
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 hover:bg-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                >
                  {t("learnMore")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Anxiety Introduction + First Aid Kit Section */}
      <section className="py-12 px-4 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* Anxiety Introduction Box - Larger (3 columns) */}
            <div 
              className="scroll-animate md:col-span-3 group p-6 bg-card/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary group-hover:scale-105 transition-transform duration-300">
                {t("whatIsAnxiety")}
              </h3>
              
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Stacked Photocard Layout with Parallax */}
                <div className="relative w-full lg:w-56 h-64 flex-shrink-0 overflow-visible">
                  {anxietyPhotos.map((photo, index) => {
                    const parallaxOffset = getParallaxOffset(index);
                    const isStacked = parallaxOffset < 50;
                    
                    return (
                      <div
                        key={index}
                        className="absolute w-36 h-44 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out hover:z-50 hover:scale-110 cursor-pointer border-2 border-background"
                        style={{
                          left: isStacked ? `${index * 15}px` : `${(index % 2) * 80}px`,
                          top: isStacked ? `${index * 8}px` : `${Math.floor(index / 2) * 100 + parallaxOffset - 50}px`,
                          zIndex: isStacked ? (4 - index) : index,
                          transform: isStacked 
                            ? `rotate(${(index - 1.5) * 6}deg)` 
                            : `rotate(${(index % 2 === 0 ? -3 : 3)}deg)`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) scale(1.15) translateY(-10px)`;
                          (e.currentTarget as HTMLElement).style.zIndex = '50';
                        }}
                        onMouseLeave={(e) => {
                          const isCurrentlyStacked = getParallaxOffset(index) < 50;
                          (e.currentTarget as HTMLElement).style.transform = isCurrentlyStacked 
                            ? `rotate(${(index - 1.5) * 6}deg)` 
                            : `rotate(${(index % 2 === 0 ? -3 : 3)}deg)`;
                          (e.currentTarget as HTMLElement).style.zIndex = String(isCurrentlyStacked ? (4 - index) : index);
                        }}
                      >
                        <img 
                          src={photo} 
                          alt={`Anxiety awareness ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
                
                {/* Description Text - Justified */}
                <div className="flex-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-justify">
                    {t("anxietyIntroText")}
                  </p>
                </div>
              </div>
            </div>

            {/* Anxiety First Aid Kit Box - Smaller (2 columns) */}
            <div 
              className="scroll-animate md:col-span-2 group p-5 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 text-center backdrop-blur-sm flex flex-col"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: `translateY(${-scrollY * 0.03}px)`
              }}
            >
              {/* Image Carousel - Larger */}
              <div className="relative mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/60 backdrop-blur-sm shadow-md hover:scale-110 transition-all duration-300 w-7 h-7"
                  onClick={(e) => { e.stopPropagation(); scrollAfkImages('left'); }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/60 backdrop-blur-sm shadow-md hover:scale-110 transition-all duration-300 w-7 h-7"
                  onClick={(e) => { e.stopPropagation(); scrollAfkImages('right'); }}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                
                <div 
                  ref={afkScrollRef}
                  className="flex gap-3 overflow-x-auto pb-2 px-8 snap-x snap-mandatory hide-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {afkCarouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-28 h-36 rounded-xl overflow-hidden shadow-md transition-all duration-500 snap-center cursor-pointer border-2 border-transparent hover:border-primary ${selectedAfkImage === image ? 'scale-110 ring-2 ring-primary shadow-xl' : 'hover:scale-105'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAfkImage(selectedAfkImage === image ? null : image);
                      }}
                      style={{
                        transform: selectedAfkImage === image ? 'scale(1.15) translateY(-8px)' : undefined
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`First Aid Kit ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Chat Animation */}
              <div className="relative h-24 mb-4 overflow-hidden">
                {/* Message 1 - From Right */}
                <div className="absolute right-2 top-0 max-w-[85%] animate-chat-slide-right">
                  <div className="bg-muted/80 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-md border border-border/50">
                    <p className="text-xs md:text-sm text-foreground text-left">
                      {t("chatMessage1")}
                    </p>
                  </div>
                </div>
                
                {/* Message 2 - From Left */}
                <div className="absolute left-2 top-12 max-w-[85%] animate-chat-slide-left" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-primary/20 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-md border border-primary/30">
                    <p className="text-xs md:text-sm text-foreground text-left font-medium">
                      {t("chatMessage2")}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Heart Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg group-hover:bg-primary/30">
                <HeartPulse className="w-7 h-7 text-primary group-hover:animate-pulse" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:scale-105 transition-transform duration-300">
                {t("anxietyFirstAidKit")}
              </h3>
              
              {/* Button */}
              <Link to="/tips-and-tricks?kit=anxiety-first-aid-kit" className="mt-auto">
                <Button 
                  size="default" 
                  className="bg-primary hover:bg-primary/90 shadow-soft hover:shadow-hover transition-all duration-300 rounded-full px-8 hover:scale-110 hover:-translate-y-1 active:scale-95"
                >
                  {t("tryMe")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digitalkind Section Title */}
      <section className="py-8 px-4 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <h2 
            className="scroll-animate text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
          >
            {t("whyDigitalkind")}
          </h2>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-8 px-4 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {featureCards.map((item, index) => (
              <div 
                key={index}
                className="scroll-animate group bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-3 hover:rotate-1 w-full md:w-[calc(33.333%-1.5rem)] max-w-sm cursor-pointer overflow-hidden"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `translateY(${-scrollY * (0.01 + index * 0.005)}px)`
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `translateY(-12px) rotateY(5deg) rotateX(5deg)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `translateY(${-scrollY * (0.01 + index * 0.005)}px)`;
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={t(item.title as any)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/20 transition-all duration-500 -mt-10 relative z-10 shadow-lg bg-card border border-border">
                    <item.icon className="w-6 h-6 text-primary group-hover:animate-bounce-soft" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{t(item.title as any)}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {t(item.desc as any)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <h2 
            className="scroll-animate text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            style={{ transform: `translateY(${-scrollY * 0.015}px)` }}
          >
            {t("whatTheySay")}
          </h2>
          
          {/* Carousel Navigation */}
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 -translate-x-2 md:-translate-x-4"
              onClick={() => scrollReviews('left')}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 translate-x-2 md:translate-x-4"
              onClick={() => scrollReviews('right')}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            {/* Testimonial Cards */}
            <div 
              ref={reviewScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 px-8 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="scroll-animate flex-shrink-0 w-72 p-6 bg-card/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-border/50 snap-center cursor-pointer group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${-scrollY * (0.005 + index * 0.002)}px)`
                  }}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'} transition-transform duration-300 group-hover:scale-110`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    "{t("language") === "id" ? testimonial.text : testimonial.textEn}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent flex items-center justify-center text-sm font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className="font-medium text-foreground">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Box Below Testimonials */}
          <div 
            className="scroll-animate mt-12 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary rounded-3xl p-10 text-center relative overflow-hidden group hover:shadow-hover transition-all duration-500 backdrop-blur-sm max-w-2xl mx-auto"
            style={{ transform: `translateY(${-scrollY * 0.01}px)` }}
          >
            {/* Animated Background Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 group-hover:scale-105 transition-transform duration-300">
              {t("readyToStartTogether")}
            </h2>
            <Link to="/features" className="relative z-10">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 rounded-full px-10"
              >
                {t("letsStart")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox for selected AFK image */}
      {selectedAfkImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedAfkImage(null)}
        >
          <div 
            className="relative max-w-2xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedAfkImage} 
              alt="Selected Image"
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-card/80 rounded-full flex items-center justify-center hover:bg-card transition-colors"
              onClick={() => setSelectedAfkImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
