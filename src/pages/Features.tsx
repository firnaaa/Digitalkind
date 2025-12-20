import Navigation from "@/components/Navigation";
import { BookOpen, Video, Music, Podcast, Image as ImageIcon, MessageSquare, Download, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Import poster images
import eduPoster1 from "@/assets/posters/edu-poster-1.png";
import eduPoster2 from "@/assets/posters/edu-poster-2.png";
import eduPoster3 from "@/assets/posters/edu-poster-3.png";
import eduPoster4 from "@/assets/posters/edu-poster-4.png";
import eduPoster5 from "@/assets/posters/edu-poster-5.png";
import eduPoster6 from "@/assets/posters/edu-poster-6.png";
import eduPoster7 from "@/assets/posters/edu-poster-7.png";
import eduPoster8 from "@/assets/posters/edu-poster-8.png";
import eduPoster9 from "@/assets/posters/edu-poster-9.png";
import eduPoster10 from "@/assets/posters/edu-poster-10.png";

// Import feature images
import featureArticles from "@/assets/feature-articles.png";
import featureTips from "@/assets/feature-tips.png";
import featureAudio from "@/assets/feature-audio.png";
import featurePodcast from "@/assets/feature-podcast.png";
import featurePosters from "@/assets/feature-posters.png";
import featureCommunity from "@/assets/feature-community.png";

const Features = () => {
  const { t, language } = useLanguage();
  const [selectedPoster, setSelectedPoster] = useState<{src: string, title: string} | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const posters = [
    { src: eduPoster1, title: language === 'id' ? "Manajemen Kecemasan" : "Anxiety Management" },
    { src: eduPoster2, title: language === 'id' ? "Hentikan Kebiasaan Negatif" : "Stop Negative Habits" },
    { src: eduPoster3, title: language === 'id' ? "Gaya Hidup Sehat" : "Healthy Lifestyle" },
    { src: eduPoster4, title: language === 'id' ? "Persatuan & Persahabatan" : "Unity & Friendship" },
    { src: eduPoster5, title: language === 'id' ? "Pengobatan Alami" : "Natural Healing" },
    { src: eduPoster6, title: language === 'id' ? "Nutrisi Sehat" : "Healthy Nutrition" },
    { src: eduPoster7, title: language === 'id' ? "Cinta Lingkungan" : "Environmental Care" },
    { src: eduPoster8, title: language === 'id' ? "Berpikir Positif" : "Positive Thinking" },
    { src: eduPoster9, title: language === 'id' ? "Self-Care & Stress Relief" : "Self-Care & Stress Relief" },
    { src: eduPoster10, title: language === 'id' ? "Mindfulness & Meditasi" : "Mindfulness & Meditation" },
  ];
  
  const features = [
    {
      icon: BookOpen,
      title: t("articles"),
      description: t("articlesDesc"),
      link: "/articles",
      linkText: t("readArticles"),
      color: "bg-primary/10",
      internal: true,
      image: featureArticles,
    },
    {
      icon: Video,
      title: t("tipsAndTricks"),
      description: t("tipsAndTricksDesc"),
      link: "/tips-and-tricks",
      linkText: t("watchVideos"),
      color: "bg-primary/10",
      internal: true,
      image: featureTips,
    },
    {
      icon: Music,
      title: t("relaxingAudio"),
      description: t("relaxingAudioDesc"),
      link: "/relaxing-audio",
      linkText: t("listenNow"),
      color: "bg-primary/10",
      internal: true,
      image: featureAudio,
    },
    {
      icon: Podcast,
      title: t("podcasts"),
      description: t("podcastsDesc"),
      link: "/podcasts",
      linkText: t("listenPodcasts"),
      color: "bg-primary/10",
      internal: true,
      image: featurePodcast,
    },
    {
      icon: ImageIcon,
      title: t("eduPosters"),
      description: t("eduPostersDesc"),
      link: "#postedu",
      linkText: language === 'id' ? "Lihat Galeri" : "View Gallery",
      color: "bg-primary/10",
      image: featurePosters,
    },
    {
      icon: MessageSquare,
      title: t("community"),
      description: t("communityDesc"),
      link: "https://t.me/digitalkind",
      linkText: t("joinCommunity"),
      color: "bg-primary/10",
      image: featureCommunity,
    },
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = async (src: string, title: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">{t("featuresTitle")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("featuresDesc")}
            </p>
          </div>

          {/* Features Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-3 hover:rotate-1 border-border/50 animate-fade-in cursor-pointer overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Feature Image */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pt-4">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg -mt-10 relative bg-card border-4 border-background`}>
                    <feature.icon className="w-7 h-7 text-primary group-hover:animate-bounce-soft" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {(feature as any).internal ? (
                    <Link to={feature.link} className="inline-block w-full">
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {feature.linkText}
                      </Button>
                    </Link>
                  ) : feature.link.startsWith('#') ? (
                    <a 
                      href={feature.link} 
                      className="inline-block w-full"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {feature.linkText}
                      </Button>
                    </a>
                  ) : (
                    <a 
                      href={feature.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {feature.linkText}
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Postedu Gallery Section */}
          <div id="postedu" className="mt-20 scroll-mt-24">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">{t("eduPosters")}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'id' 
                  ? "Klik poster untuk memperbesar dan unduh untuk koleksi kamu!"
                  : "Click poster to enlarge and download for your collection!"}
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
                {posters.map((poster, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-center group/poster cursor-pointer"
                    style={{ 
                      perspective: '1000px',
                      animationDelay: `${index * 100}ms` 
                    }}
                  >
                    <div 
                      className="relative w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-soft transition-all duration-500 group-hover/poster:shadow-hover group-hover/poster:-translate-y-4 group-hover/poster:scale-105"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateY(0deg)',
                      }}
                      onClick={() => setSelectedPoster(poster)}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'rotateY(5deg) rotateX(5deg)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
                      }}
                    >
                      <img 
                        src={poster.src} 
                        alt={poster.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/poster:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover/poster:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-4">
                        <p className="text-primary-foreground font-semibold text-center mb-3 transform translate-y-4 group-hover/poster:translate-y-0 transition-transform duration-300">
                          {poster.title}
                        </p>
                        <div className="flex gap-2 transform translate-y-4 group-hover/poster:translate-y-0 transition-transform duration-300 delay-75">
                          <Button 
                            size="sm" 
                            variant="secondary"
                            className="gap-1 hover:scale-105 transition-transform"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPoster(poster);
                            }}
                          >
                            <ZoomIn className="w-4 h-4" />
                            {language === 'id' ? "Lihat" : "View"}
                          </Button>
                          <Button 
                            size="sm" 
                            className="gap-1 hover:scale-105 transition-transform"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(poster.src, poster.title);
                            }}
                          >
                            <Download className="w-4 h-4" />
                            {language === 'id' ? "Unduh" : "Download"}
                          </Button>
                        </div>
                      </div>

                      {/* 3D Border Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover/poster:border-primary/50 transition-all duration-300 pointer-events-none" />
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

      {/* Poster Modal */}
      <Dialog open={!!selectedPoster} onOpenChange={() => setSelectedPoster(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background/95 backdrop-blur-md">
          <DialogTitle className="sr-only">
            {selectedPoster?.title || 'Poster'}
          </DialogTitle>
          {selectedPoster && (
            <div className="relative animate-scale-up">
              <img 
                src={selectedPoster.src} 
                alt={selectedPoster.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">{selectedPoster.title}</h3>
                  <Button 
                    className="gap-2 hover:scale-105 transition-transform"
                    onClick={() => handleDownload(selectedPoster.src, selectedPoster.title)}
                  >
                    <Download className="w-5 h-5" />
                    {language === 'id' ? "Unduh Poster" : "Download Poster"}
                  </Button>
                </div>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Features;
