import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import podcast images
import podcast1 from "@/assets/podcast/podcast-1-yang-kami-rasakan.png";
import podcast2 from "@/assets/podcast/podcast-2-cara-ampuh.png";
import podcast3 from "@/assets/podcast/podcast-3-anxiety-gaada-habisnya.png";
import podcast4 from "@/assets/podcast/podcast-4-melepaskan-kekhawatiran.png";
import podcast5 from "@/assets/podcast/podcast-5-pertolongan-pertama.png";
import podcast6 from "@/assets/podcast/podcast-6-mengenal-anxiety.png";
import podcast7 from "@/assets/podcast/podcast-7-kenali-anxiety.png";
import podcast8 from "@/assets/podcast/podcast-8-definisi-gejala.png";
import podcast9 from "@/assets/podcast/podcast-9-what-is-anxiety.png";
import podcast10 from "@/assets/podcast/podcast-10-tips-mengatasi.png";
import podcast11 from "@/assets/podcast/podcast-11-positif-afirmasi.png";
import podcast12 from "@/assets/podcast/podcast-12-bedanya-kecemasan.png";
import podcast13 from "@/assets/podcast/podcast-13-mengenal-bersama.png";
import podcast14 from "@/assets/podcast/podcast-14-peduli-kenali.png";
import podcast15 from "@/assets/podcast/podcast-15-kecemasan-gangguan.png";

const Podcasts = () => {
  const { t } = useLanguage();
  const [selectedSpotify, setSelectedSpotify] = useState<string | null>(null);
  const [selectedYoutube, setSelectedYoutube] = useState<string | null>(null);

  const spotifyPodcasts = [
    { id: "481PnWRjJyK87ycLLAZPdO", title: "Yang Kami Rasakan Saat Anxiety", url: "https://open.spotify.com/episode/481PnWRjJyK87ycLLAZPdO", image: podcast1 },
    { id: "4e3XAfnKxyJCUpQKbOPqp8", title: "Cara Ampuh Mengatasi Anxiety", url: "https://open.spotify.com/episode/4e3XAfnKxyJCUpQKbOPqp8", image: podcast2 },
    { id: "1NM4pK4eWS9RtZEK2m2QTt", title: "Anxiety yang Gaada Habisnya", url: "https://open.spotify.com/episode/1NM4pK4eWS9RtZEK2m2QTt", image: podcast3 },
    { id: "7eTWTAD0ZchI7W5niFSx7T", title: "Melepaskan Kekhawatiran", url: "https://open.spotify.com/episode/7eTWTAD0ZchI7W5niFSx7T", image: podcast4 },
    { id: "0SucWm0vdp25AA8mXDUVpw", title: "Pertolongan Pertama Saat Anxiety", url: "https://open.spotify.com/episode/0SucWm0vdp25AA8mXDUVpw", image: podcast5 },
    { id: "5n1pbeh2DkyZTHWjKf42uG", title: "Mengenal Anxiety", url: "https://open.spotify.com/episode/5n1pbeh2DkyZTHWjKf42uG", image: podcast6 },
    { id: "10FVQ4CITAFFqqy5wesQ8w", title: "Kenali Anxiety", url: "https://open.spotify.com/episode/10FVQ4CITAFFqqy5wesQ8w", image: podcast7 },
    { id: "7MjQ0aF2p3WDE8E7QZCMgc", title: "Definisi dan Gejala Anxiety", url: "https://open.spotify.com/episode/7MjQ0aF2p3WDE8E7QZCMgc", image: podcast8 },
    { id: "2tykGAQrDD175ilk2xvW5Z", title: "What is Anxiety", url: "https://open.spotify.com/episode/2tykGAQrDD175ilk2xvW5Z", image: podcast9 },
    { id: "72GPLf7uMOYCjGayIsZt2B", title: "Tips Mengatasi Gangguan Kecemasan", url: "https://open.spotify.com/episode/72GPLf7uMOYCjGayIsZt2B", image: podcast10 },
    { id: "4zLRkI9mhNz0qpXYI3bnA0", title: "Positif Afirmasi", url: "https://open.spotify.com/episode/4zLRkI9mhNz0qpXYI3bnA0", image: podcast11 },
    { id: "1pyL4GGUEBxv03f2zMc2r9", title: "Bedanya Kecemasan & Gangguan Kecemasan", url: "https://open.spotify.com/episode/1pyL4GGUEBxv03f2zMc2r9", image: podcast12 },
    { id: "2XmCGydkcudaS3sXE1NUCL", title: "Mengenal Bersama Apa Itu Anxiety", url: "https://open.spotify.com/episode/2XmCGydkcudaS3sXE1NUCL", image: podcast13 },
    { id: "5wK111q7lvkkRBeCgGmPZ3", title: "Peduli dan Kenali Anxiety", url: "https://open.spotify.com/episode/5wK111q7lvkkRBeCgGmPZ3", image: podcast14 },
    { id: "1GCEsPnVtUeBKgGwZrEEO3", title: "Kecemasan itu Gangguan Mental?", url: "https://open.spotify.com/episode/1GCEsPnVtUeBKgGwZrEEO3", image: podcast15 },
  ];

  const youtubePodcasts = [
    { id: "BwivvpCyVAA", title: "Podcast: Understanding Anxiety", url: "https://youtu.be/BwivvpCyVAA" },
    { id: "3BAI5Czp0k4", title: "Podcast: Mengatasi Kecemasan", url: "https://youtu.be/3BAI5Czp0k4" },
    { id: "A3uIr2F2Ono", title: "Podcast: Tips Anxiety", url: "https://youtu.be/A3uIr2F2Ono" },
    { id: "qWJeMDuWd44", title: "Podcast: Mental Health Talk", url: "https://youtu.be/qWJeMDuWd44" },
    { id: "IUdMdqOf6wU", title: "Podcast: Anxiety Relief", url: "https://youtu.be/IUdMdqOf6wU" },
    { id: "iML1vuZlzpU", title: "Podcast: Kesehatan Mental", url: "https://youtu.be/iML1vuZlzpU" },
    { id: "a7fTHNqtMAk", title: "Podcast: Coping Strategies", url: "https://youtu.be/a7fTHNqtMAk" },
    { id: "YRXLrqtjEIU", title: "Podcast: Anxiety Discussion", url: "https://youtu.be/YRXLrqtjEIU" },
    { id: "VlncTIohraM", title: "Podcast: Mental Wellness", url: "https://youtu.be/VlncTIohraM" },
    { id: "nhzbIpyQm2k", title: "Podcast: Tips Mengatasi Anxiety", url: "https://youtu.be/nhzbIpyQm2k" },
    { id: "L3W1h_SN8Nc", title: "Podcast: Mindfulness", url: "https://youtu.be/L3W1h_SN8Nc" },
    { id: "7QM7vY9I7KM", title: "Podcast: Stress Management", url: "https://youtu.be/7QM7vY9I7KM" },
    { id: "0xV-gpKYv3k", title: "Podcast: Cara Tepat Atasi Anxiety", url: "https://youtu.be/0xV-gpKYv3k" },
    { id: "uBOz87RWoeM", title: "Podcast: Bincang Sehat", url: "https://youtu.be/uBOz87RWoeM" },
    { id: "FJ5tXuBi4EM", title: "Podcast: Overcoming Fear", url: "https://youtu.be/FJ5tXuBi4EM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto">
          {/* Back to Features */}
          <Link to="/features">
            <Button 
              variant="ghost" 
              className="mb-4 flex items-center gap-2 hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backToFeatures")}
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">{t("podcasts")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("podcastsDesc")}
            </p>
          </div>

          {/* Spotify Podcasts Section */}
          <div className="mb-16">
            <Card className="overflow-hidden border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">{t("spotify playlist")}</CardTitle>
                <CardDescription>{t("spotify playlist abouty anxiety")}</CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedSpotify ? (
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                      {spotifyPodcasts.map((podcast) => (
                        <CarouselItem key={podcast.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <div 
                            className="group cursor-pointer"
                            onClick={() => setSelectedSpotify(podcast.id)}
                          >
                            <div className="relative aspect-square bg-card rounded-lg overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 hover:shadow-hover">
                              <img 
                                src={podcast.image} 
                                alt={podcast.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <div className="w-full">
                                  <div className="flex items-center justify-between">
                                    <h3 className="text-white font-semibold text-sm line-clamp-2">{podcast.title}</h3>
                                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 flex-shrink-0 ml-2">
                                      <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                ) : (
                  <div className="animate-fade-in">
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedSpotify(null)}
                      className="mb-4 flex items-center gap-2 hover:text-primary"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      {t("backToPodcastList")}
                    </Button>
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={spotifyPodcasts.find(p => p.id === selectedSpotify)?.image} 
                        alt={spotifyPodcasts.find(p => p.id === selectedSpotify)?.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{spotifyPodcasts.find(p => p.id === selectedSpotify)?.title}</h3>
                        <p className="text-muted-foreground text-sm">Podcast Anxiety</p>
                      </div>
                    </div>
                    <iframe 
                      src={`https://open.spotify.com/embed/episode/${selectedSpotify}`}
                      width="100%" 
                      height="232" 
                      frameBorder="0" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                      className="rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* YouTube Podcasts Section */}
          <div>
            <Card className="overflow-hidden border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">{t("youtube playlist")}</CardTitle>
                <CardDescription>{t("Playlist youtube tentang anxiety")}</CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedYoutube ? (
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                      {youtubePodcasts.map((podcast) => (
                        <CarouselItem key={podcast.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <div 
                            className="group cursor-pointer"
                            onClick={() => setSelectedYoutube(podcast.id)}
                          >
                            <div className="relative aspect-video bg-card rounded-lg overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-300 hover:shadow-hover">
                              <img 
                                src={`https://img.youtube.com/vi/${podcast.id}/mqdefault.jpg`}
                                alt={podcast.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <div className="w-full">
                                  <div className="flex items-center justify-between">
                                    <h3 className="text-white font-semibold text-sm">{podcast.title}</h3>
                                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 flex-shrink-0 ml-2">
                                      <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                ) : (
                  <div className="animate-fade-in">
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedYoutube(null)}
                      className="mb-4 flex items-center gap-2 hover:text-primary"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      {t("backToPodcastList")}
                    </Button>
                    <h3 className="font-semibold text-lg mb-4">{youtubePodcasts.find(p => p.id === selectedYoutube)?.title}</h3>
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedYoutube}`}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;