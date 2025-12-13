import Navigation from "@/components/Navigation";
import { Bird, Waves, Wind, CloudRain, Music2, Plane, ArrowLeft, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import animal images
import animals1 from "@/assets/audio/animals-1-kicau-burung.jpg";
import animals2 from "@/assets/audio/animals-2-damai.jpg";
import animals3 from "@/assets/audio/animals-3-raungan-tenang.jpg";
import animals4 from "@/assets/audio/animals-4-alam.jpg";
import animals5 from "@/assets/audio/animals-5-kicau-alam.jpg";
import animals6 from "@/assets/audio/animals-6-hutan-damai.jpg";
import animals7 from "@/assets/audio/animals-7-hutan-tenang.jpg";
import animals8 from "@/assets/audio/animals-8-amazing-forest.jpg";
import animals9 from "@/assets/audio/animals-9-kicauan.jpg";
import animals10 from "@/assets/audio/animals-10-sejukan-alam.jpg";

// Import ocean images
import ocean1 from "@/assets/audio/ocean-1-ombak-tenang.jpg";
import ocean2 from "@/assets/audio/ocean-2-shooting-ocean.jpg";
import ocean3 from "@/assets/audio/ocean-3-feel-in-ocean.jpg";
import ocean4 from "@/assets/audio/ocean-4-mindful-waves.jpg";
import ocean5 from "@/assets/audio/ocean-5-ombak-tepi-pantai.jpg";
import ocean6 from "@/assets/audio/ocean-6-laut-jernih.jpg";
import ocean7 from "@/assets/audio/ocean-7-berpasir.jpg";
import ocean8 from "@/assets/audio/ocean-8-menyelami-laut.jpg";
import ocean9 from "@/assets/audio/ocean-9-sirene.jpg";
import ocean10 from "@/assets/audio/ocean-10-coast-the-line.jpg";

// Import healing images
import healing1 from "@/assets/audio/healing-1-positif-energi.jpg";
import healing2 from "@/assets/audio/healing-2-menenangkan-pikiran.jpg";
import healing3 from "@/assets/audio/healing-3-clear-mind.jpg";
import healing4 from "@/assets/audio/healing-4-healing.jpg";
import healing5 from "@/assets/audio/healing-5-meredakan-stress.jpg";
import healing6 from "@/assets/audio/healing-6-meredakan-kecemasan.jpg";
import healing7 from "@/assets/audio/healing-7-emotional-physical.jpg";
import healing8 from "@/assets/audio/healing-8-buang-negatif.jpg";
import healing9 from "@/assets/audio/healing-9-anti-overthinking.jpg";
import healing10 from "@/assets/audio/healing-10-mindful.jpg";

// Import rain images
import rain1 from "@/assets/audio/rain-1-peace-of-rain.jpg";
import rain2 from "@/assets/audio/rain-2-hujan-sungai.jpg";
import rain3 from "@/assets/audio/rain-3-hujan-petir.jpg";
import rain4 from "@/assets/audio/rain-4-hujan-mengalir.jpg";
import rain5 from "@/assets/audio/rain-5-tenang.jpg";
import rain6 from "@/assets/audio/rain-6-petir.jpg";
import rain7 from "@/assets/audio/rain-7-hujan-deras.jpg";
import rain8 from "@/assets/audio/rain-8-gerimis.jpg";
import rain9 from "@/assets/audio/rain-9-gemercik-air.jpg";
import rain10 from "@/assets/audio/rain-10-therapy.jpg";

// Import piano images
import piano1 from "@/assets/audio/piano-1-thousand-years.jpg";
import piano2 from "@/assets/audio/piano-2-fix-you.jpg";
import piano3 from "@/assets/audio/piano-3-end-of-beginning.jpg";
import piano4 from "@/assets/audio/piano-4-die-with-smile.jpg";
import piano5 from "@/assets/audio/piano-5-all-of-me.jpg";
import piano6 from "@/assets/audio/piano-6-harmoni-klasik.jpg";
import piano7 from "@/assets/audio/piano-7-percaya-diri.jpg";
import piano8 from "@/assets/audio/piano-8-dreamy.jpg";
import piano9 from "@/assets/audio/piano-9-peaceful.jpg";
import piano10 from "@/assets/audio/piano-10-lofi.jpg";

// Import travel images
import travel1 from "@/assets/audio/travel-1-airport.jpg";
import travel2 from "@/assets/audio/travel-2-on-the-train.jpg";
import travel3 from "@/assets/audio/travel-3-railway-express.jpg";
import travel4 from "@/assets/audio/travel-4-hujan-stasiun.jpg";
import travel5 from "@/assets/audio/travel-5-some-city.jpg";
import travel6 from "@/assets/audio/travel-6-traffic-line.jpg";
import travel7 from "@/assets/audio/travel-7-railway.jpg";
import travel8 from "@/assets/audio/travel-8-slow-train.jpg";
import travel9 from "@/assets/audio/travel-9-night-train.jpg";
import travel10 from "@/assets/audio/travel-10-rainy-car.jpg";

const RelaxingAudio = () => {
  const { t } = useLanguage();
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  const playlists = [
    {
      id: "animals",
      icon: Bird,
      titleKey: "animalsTitle",
      descKey: "animalsDesc",
      color: "bg-emerald-500/10",
      audios: [
        { id: "3JceqUgXQPaX6RYakFUy4X", title: "Kicau burung", url: "https://open.spotify.com/track/3JceqUgXQPaX6RYakFUy4X", image: animals1 },
        { id: "4zE3EZNDuoLabKLlvWcuBw", title: "Damai", url: "https://open.spotify.com/track/4zE3EZNDuoLabKLlvWcuBw", image: animals2 },
        { id: "45OQ4d2oF6PKUg30jIYhLD", title: "Raungan tenang", url: "https://open.spotify.com/track/45OQ4d2oF6PKUg30jIYhLD", image: animals3 },
        { id: "0XVodTArKi2jRSyWmFLYX1", title: "Alam", url: "https://open.spotify.com/track/0XVodTArKi2jRSyWmFLYX1", image: animals4 },
        { id: "5y25kyQQTAqyPoSchOAnxS", title: "Kicau alam", url: "https://open.spotify.com/track/5y25kyQQTAqyPoSchOAnxS", image: animals5 },
        { id: "323vDrUSVxJTm7SsV5Oftw", title: "Hutan damai", url: "https://open.spotify.com/track/323vDrUSVxJTm7SsV5Oftw", image: animals6 },
        { id: "0wjq5TtW5Jhu51pOUhrtws", title: "Hutan tenang", url: "https://open.spotify.com/track/0wjq5TtW5Jhu51pOUhrtws", image: animals7 },
        { id: "65LSaoUF97lGOO33OTQYEG", title: "Amazing forest", url: "https://open.spotify.com/track/65LSaoUF97lGOO33OTQYEG", image: animals8 },
        { id: "1oU42Iu4KihKEpAV6fBVIp", title: "Kicauan", url: "https://open.spotify.com/track/1oU42Iu4KihKEpAV6fBVIp", image: animals9 },
        { id: "0lcc6GtdExUopI7NkeyWb0", title: "Sejukan alam", url: "https://open.spotify.com/track/0lcc6GtdExUopI7NkeyWb0", image: animals10 },
      ],
    },
    {
      id: "ocean",
      icon: Waves,
      titleKey: "oceanTitle",
      descKey: "oceanDesc",
      color: "bg-blue-500/10",
      audios: [
        { id: "0VEfKc8Hi0ATp7vQ7cpoLY", title: "Ombak tenang", url: "https://open.spotify.com/track/0VEfKc8Hi0ATp7vQ7cpoLY", image: ocean1 },
        { id: "2ACz2tjRaxwK2v7Gsmm5X2", title: "Shooting ocean", url: "https://open.spotify.com/track/2ACz2tjRaxwK2v7Gsmm5X2", image: ocean2 },
        { id: "30GcqYrwMhloErNPfWZKMR", title: "Feel in ocean", url: "https://open.spotify.com/track/30GcqYrwMhloErNPfWZKMR", image: ocean3 },
        { id: "0E5wXj0hlHSM3VwbbV121F", title: "Mindfull waves", url: "https://open.spotify.com/track/0E5wXj0hlHSM3VwbbV121F", image: ocean4 },
        { id: "52tVaLj0by47n0HyR9oyB0", title: "Ombak di tepi pantai", url: "https://open.spotify.com/track/52tVaLj0by47n0HyR9oyB0", image: ocean5 },
        { id: "1v2amRtEhw1hnkrkv1HfrO", title: "Laut jernih", url: "https://open.spotify.com/track/1v2amRtEhw1hnkrkv1HfrO", image: ocean6 },
        { id: "16d6Up62qNcVTW3rqrPUGF", title: "Berpasir", url: "https://open.spotify.com/track/16d6Up62qNcVTW3rqrPUGF", image: ocean7 },
        { id: "5VhRSMDxexywBn6JUvd0uS", title: "Menyelami laut", url: "https://open.spotify.com/track/5VhRSMDxexywBn6JUvd0uS", image: ocean8 },
        { id: "01AnDwC3P2GgKcaFc0ELNW", title: "Sirene", url: "https://open.spotify.com/track/01AnDwC3P2GgKcaFc0ELNW", image: ocean9 },
        { id: "2lre6qQ75iYsyvmwlORmBQ", title: "Coast the line", url: "https://open.spotify.com/track/2lre6qQ75iYsyvmwlORmBQ", image: ocean10 },
      ],
    },
    {
      id: "healFrequency",
      icon: Wind,
      titleKey: "healingTitle",
      descKey: "healingDesc",
      color: "bg-purple-500/10",
      audios: [
        { id: "6foPAR4znfqXrCZxt4OMqt", title: "Positif energi", url: "https://open.spotify.com/track/6foPAR4znfqXrCZxt4OMqt", image: healing1 },
        { id: "4EVU7XGaZHUCM77W9vm6U9", title: "Menangkan pikiran", url: "https://open.spotify.com/track/4EVU7XGaZHUCM77W9vm6U9", image: healing2 },
        { id: "1AOloI7FbuKNRRjmnxssCH", title: "Clear mind", url: "https://open.spotify.com/track/1AOloI7FbuKNRRjmnxssCH", image: healing3 },
        { id: "7aCyV2LKrEkF9s4QYMUfJV", title: "Healing", url: "https://open.spotify.com/track/7aCyV2LKrEkF9s4QYMUfJV", image: healing4 },
        { id: "0vtp6L7PjGRNfbNefNWpjc", title: "Meredakan stress", url: "https://open.spotify.com/track/0vtp6L7PjGRNfbNefNWpjc", image: healing5 },
        { id: "1E6InSRft4lrOv6QeIjLYA", title: "Meredakan kecemasan", url: "https://open.spotify.com/track/1E6InSRft4lrOv6QeIjLYA", image: healing6 },
        { id: "6CLCMuZynOX2OvXF5tj4d1", title: "Emotional & physical healing", url: "https://open.spotify.com/track/6CLCMuZynOX2OvXF5tj4d1", image: healing7 },
        { id: "2W00JZymGwKqOJ3vtXJMhP", title: "Buang energi negatif", url: "https://open.spotify.com/track/2W00JZymGwKqOJ3vtXJMhP", image: healing8 },
        { id: "15RQ1FoTZpwSkZybMXpXsa", title: "Anti overthinking", url: "https://open.spotify.com/track/15RQ1FoTZpwSkZybMXpXsa", image: healing9 },
        { id: "0030Q2k1Oebxs31gKNpvS3", title: "Mindfull", url: "https://open.spotify.com/track/0030Q2k1Oebxs31gKNpvS3", image: healing10 },
      ],
    },
    {
      id: "rain",
      icon: CloudRain,
      titleKey: "rainTitle",
      descKey: "rainDesc",
      color: "bg-cyan-500/10",
      audios: [
        { id: "5qGTFA3qALSfVvmtVUSvcO", title: "Peace of rain", url: "https://open.spotify.com/track/5qGTFA3qALSfVvmtVUSvcO", image: rain1 },
        { id: "1XGH1AZ0JONwKKkYuNEPdE", title: "Hujan dan sungai", url: "https://open.spotify.com/track/1XGH1AZ0JONwKKkYuNEPdE", image: rain2 },
        { id: "17IFYjhW6FZ7JuZmp6qi0b", title: "Hujan dan petir", url: "https://open.spotify.com/track/17IFYjhW6FZ7JuZmp6qi0b", image: rain3 },
        { id: "6TZpD7QUEwgNO4KN47SEum", title: "Hujan mengalir", url: "https://open.spotify.com/track/6TZpD7QUEwgNO4KN47SEum", image: rain4 },
        { id: "0mYUqkBxfgzfMqTJHIzwSf", title: "Tenang", url: "https://open.spotify.com/track/0mYUqkBxfgzfMqTJHIzwSf", image: rain5 },
        { id: "4thKcL7ssBDlYczSzUiPcK", title: "Petir", url: "https://open.spotify.com/track/4thKcL7ssBDlYczSzUiPcK", image: rain6 },
        { id: "3egfhktWUW9udQp0qJZdKP", title: "Hujan deras", url: "https://open.spotify.com/track/3egfhktWUW9udQp0qJZdKP", image: rain7 },
        { id: "5uXbAWLFsKhUA2BaCVsB6K", title: "Gerimis", url: "https://open.spotify.com/track/5uXbAWLFsKhUA2BaCVsB6K", image: rain8 },
        { id: "6JkuFr7ZEcOuJx2BB6SMNu", title: "Gemercik air", url: "https://open.spotify.com/track/6JkuFr7ZEcOuJx2BB6SMNu", image: rain9 },
        { id: "0MpS7XOWhfDcE85uqd0XBB", title: "Therapy", url: "https://open.spotify.com/track/0MpS7XOWhfDcE85uqd0XBB", image: rain10 },
      ],
    },
    {
      id: "piano",
      icon: Music2,
      titleKey: "pianoTitle",
      descKey: "pianoDesc",
      color: "bg-pink-500/10",
      audios: [
        { id: "2D328fT45V2fBeJjCizwvz", title: "A thousand year piano", url: "https://open.spotify.com/track/2D328fT45V2fBeJjCizwvz", image: piano1 },
        { id: "15nGx6GjiUSZWWcVDzKo5z", title: "Fix you piano", url: "https://open.spotify.com/track/15nGx6GjiUSZWWcVDzKo5z", image: piano2 },
        { id: "7wJlBt0J8Sz2llObL1sEFa", title: "End of beginning piano", url: "https://open.spotify.com/track/7wJlBt0J8Sz2llObL1sEFa", image: piano3 },
        { id: "3yeZ7O31RGBimgpYakOfDg", title: "Die with a smile", url: "https://open.spotify.com/track/3yeZ7O31RGBimgpYakOfDg", image: piano4 },
        { id: "5POY7bIIkWzunLjZGp5poI", title: "All of me", url: "https://open.spotify.com/track/5POY7bIIkWzunLjZGp5poI", image: piano5 },
        { id: "2CTRsFkCzXEafseF4MLRN9", title: "Harmoni klasik", url: "https://open.spotify.com/track/2CTRsFkCzXEafseF4MLRN9", image: piano6 },
        { id: "3PjllqpJS9qF82x1qxaTGv", title: "Percaya diri", url: "https://open.spotify.com/track/3PjllqpJS9qF82x1qxaTGv", image: piano7 },
        { id: "4nuOT2R4KCUKaSPxWYWr0b", title: "Dreamy", url: "https://open.spotify.com/track/4nuOT2R4KCUKaSPxWYWr0b", image: piano8 },
        { id: "4FTj02S8T1U4438yq4Vm0B", title: "Peaceful", url: "https://open.spotify.com/track/4FTj02S8T1U4438yq4Vm0B", image: piano9 },
        { id: "688o4iEC23uFzGZ6nNRTt4", title: "Lo-fi", url: "https://open.spotify.com/track/688o4iEC23uFzGZ6nNRTt4", image: piano10 },
      ],
    },
    {
      id: "travel",
      icon: Plane,
      titleKey: "travelTitle",
      descKey: "travelDesc",
      color: "bg-orange-500/10",
      audios: [
        { id: "1W45fawBuiqBxuUCkBmRSX", title: "Airport", url: "https://open.spotify.com/track/1W45fawBuiqBxuUCkBmRSX", image: travel1 },
        { id: "54emiW7uAIhfnw2zJ9okjs", title: "On the train", url: "https://open.spotify.com/track/54emiW7uAIhfnw2zJ9okjs", image: travel2 },
        { id: "54emiW7uAIhfnw2zJ9okjs", title: "Railway express", url: "https://open.spotify.com/track/54emiW7uAIhfnw2zJ9okjs", image: travel3 },
        { id: "3o8ulxLiRyz2StF76Ewtuj", title: "Hujan di stasiun", url: "https://open.spotify.com/track/3o8ulxLiRyz2StF76Ewtuj", image: travel4 },
        { id: "1b6PvLhh6plN2KMjuHIcC4", title: "Some city", url: "https://open.spotify.com/track/1b6PvLhh6plN2KMjuHIcC4", image: travel5 },
        { id: "33aPncScCNpHcyDBhoSUw9", title: "Traffic line", url: "https://open.spotify.com/track/33aPncScCNpHcyDBhoSUw9", image: travel6 },
        { id: "57w2PtfGRtww8JYBrKV9HZ", title: "Railway", url: "https://open.spotify.com/track/57w2PtfGRtww8JYBrKV9HZ", image: travel7 },
        { id: "1Hz32r4uZXKF1I8CibhcBP", title: "Slow train", url: "https://open.spotify.com/track/1Hz32r4uZXKF1I8CibhcBP", image: travel8 },
        { id: "56r1nUtDLZcSs8nHfMoNXz", title: "Night train", url: "https://open.spotify.com/track/56r1nUtDLZcSs8nHfMoNXz", image: travel9 },
        { id: "3EIll9EAufxK2R3JX7Jprt", title: "Rainy car", url: "https://open.spotify.com/episode/3EIll9EAufxK2R3JX7Jprt", image: travel10 },
      ],
    },
  ];

  const selectedPlaylistData = playlists.find((p) => p.id === selectedPlaylist);

  // Convert Spotify URL to embed format
  const getEmbedUrl = (url: string, id: string) => {
    if (url.includes('open.spotify.com/track/')) {
      return `https://open.spotify.com/embed/track/${id}`;
    } else if (url.includes('open.spotify.com/episode/')) {
      return `https://open.spotify.com/embed/episode/${id}`;
    } else if (url.includes('spotify.link')) {
      return `https://open.spotify.com/embed/track/${id}`;
    }
    return url;
  };

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
              <span className="text-primary">{t("audioTitle")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("audioDesc")}
            </p>
          </div>

          {/* Playlists Grid */}
          {!selectedPlaylist ? (
            <div className="flex flex-wrap justify-center gap-8">
              {playlists.map((playlist, index) => (
                <Card
                  key={playlist.id}
                  className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in cursor-pointer w-full md:w-[calc(33.333%-1.5rem)] max-w-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedPlaylist(playlist.id)}
                >
                  <CardHeader>
                    <div
                      className={`w-14 h-14 ${playlist.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <playlist.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{t(playlist.titleKey)}</CardTitle>
                    <CardDescription className="text-base">
                      {t(playlist.descKey)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {t("viewAudios")} ({playlist.audios.length})
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="animate-fade-in">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedPlaylist(null);
                  setSelectedAudio(null);
                }}
                className="mb-8 flex items-center gap-2 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("backToPlaylist")}
              </Button>

              {selectedPlaylistData && (
                <>
                  <div className="text-center mb-12">
                    <div
                      className={`w-20 h-20 ${selectedPlaylistData.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <selectedPlaylistData.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {t(selectedPlaylistData.titleKey)}
                    </h2>
                    <p className="text-muted-foreground">
                      {t(selectedPlaylistData.descKey)}
                    </p>
                  </div>

                  {selectedAudio ? (
                    <div className="max-w-4xl mx-auto">
                      <Button
                        variant="ghost"
                        onClick={() => setSelectedAudio(null)}
                        className="mb-6 flex items-center gap-2 hover:text-primary"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        {t("backToAudioList")}
                      </Button>
                      <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                        <iframe
                          src={getEmbedUrl(
                            selectedPlaylistData?.audios.find(a => a.id === selectedAudio)?.url || '',
                            selectedAudio
                          )}
                          width="100%"
                          height="352"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="w-full"
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-7xl mx-auto px-4">
                      <Carousel
                        opts={{
                          align: "start",
                          loop: false,
                        }}
                        className="w-full"
                      >
                        <CarouselContent className="-ml-4">
                          {selectedPlaylistData.audios.map((audio) => (
                            <CarouselItem
                              key={audio.id + audio.title}
                              className="pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                              <Card
                                className="group cursor-pointer hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
                                onClick={() => setSelectedAudio(audio.id)}
                              >
                                <CardContent className="p-0">
                                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                                    <img 
                                      src={audio.image} 
                                      alt={audio.title}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-4 right-4">
                                      <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group-hover:bg-primary/90">
                                        <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="p-4">
                                    <h3 className="font-semibold text-sm line-clamp-2">
                                      {audio.title}
                                    </h3>
                                  </div>
                                </CardContent>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4" />
                        <CarouselNext className="-right-4" />
                      </Carousel>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelaxingAudio;