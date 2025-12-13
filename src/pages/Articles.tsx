import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Lightbulb, Info, Heart, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  link: string;
}

interface Category {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: any;
  color: string;
  articles: Article[];
}

const Articles = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "mengenal",
      title: "Mengenal Anxiety",
      titleEn: "Understanding Anxiety",
      description: "Pengertian, Gejala, dan Jenis Anxiety",
      descriptionEn: "Definition, Symptoms, and Types of Anxiety",
      icon: BookOpen,
      color: "bg-blue-500/10 hover:bg-blue-500/20",
      articles: [
        { title: "Gangguan Kecemasan: Jenis, Gejala, dan Cara Mengatasi", link: "https://www.alodokter.com/kenali-tiga-jenis-gangguan-kecemasan-dan-gejalanya" },
        { title: "Mengenal Anxiety (Gangguan Kecemasan) dan Jenis-Jenisnya", link: "https://www.halodoc.com/artikel/mengenal-anxiety-gangguan-kecemasan-dan-jenis-jenisnya" },
        { title: "Mengenal Anxiety yang Mengganggu dan Berbagai Jenisnya", link: "https://www.alodokter.com/mengenal-anxiety-yang-mengganggu-dan-berbagai-jenisnya" },
        { title: "Apa Itu Anxiety Disorder? Kenali Gejala dan Pengobatannya", link: "https://www.mitrakeluarga.com/artikel/apa-itu-anxiety-disorder" },
        { title: "Gangguan Kecemasan Umum - Anxiety Disorder", link: "https://www.halodoc.com/kesehatan/gangguan-kecemasan-umum" },
        { title: "Gangguan Kecemasan Umum - Ayo Sehat (Kemenkes)", link: "https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/gangguan-kecemasan-umum" },
        { title: "Gangguan Kecemasan - National Institute of Mental Health", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.nimh.nih.gov%2Fhealth%2Ftopics%2Fanxiety-disorders&hl=id&sl=en&tl=id&client=srp" },
        { title: "Gangguan Kecemasan - WHO (terjemahan)", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.who.int%2Fnews-room%2Ffact-sheets%2Fdetail%2Fanxiety-disorders&hl=id&sl=en&tl=id&client=srp" },
        { title: "Kenali Bahaya Anxiety Disorder dan Cara Penanganannya", link: "https://www.emc.id/id/care-plus/kenali-bahaya-anxiety-disorder-dan-cara-penanganannya" },
        { title: "Cara Efektif Menghilangkan Rasa Cemas Berlebihan", link: "https://hellosehat.com/mental/gangguan-kecemasan/cara-menghilangkan-rasa-cemas-berlebihan/" },
      ],
    },
    {
      id: "mengatasi",
      title: "Cara Mengatasi / Panduan Anxiety",
      titleEn: "How to Overcome / Anxiety Guide",
      description: "Panduan praktis mengatasi kecemasan",
      descriptionEn: "Practical guide to overcome anxiety",
      icon: FileText,
      color: "bg-green-500/10 hover:bg-green-500/20",
      articles: [
        { title: "Cara Mengatasi Gangguan Kecemasan yang Mudah Dilakukan", link: "https://www.alodokter.com/ketahui-cara-mengatasi-gangguan-kecemasan" },
        { title: "Anxiety Menyerang, Bagaimana Cara Meredakannya?", link: "https://www.halodoc.com/artikel/anxiety-menyerang-bagaimana-cara-untuk-meredakannya" },
        { title: "Cara Mengatasi Anxiety Attack", link: "https://www.siloamhospitals.com/informasi-siloam/artikel/cara-mengatasi-anxiety-attack" },
        { title: "Cara Efektif Menghilangkan Rasa Cemas Berlebihan", link: "https://hellosehat.com/mental/gangguan-kecemasan/cara-menghilangkan-rasa-cemas-berlebihan/" },
        { title: "Kenali Bahaya Anxiety Disorder dan Cara Penanganannya", link: "https://www.emc.id/id/care-plus/kenali-bahaya-anxiety-disorder-dan-cara-penanganannya" },
        { title: "Gangguan Kecemasan Umum - Ayo Sehat (bagian cara penanganan)", link: "https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/gangguan-kecemasan-umum" },
        { title: "Gangguan Kecemasan - NIMH (bagian terapi dan pengobatan)", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.nimh.nih.gov%2Fhealth%2Ftopics%2Fanxiety-disorders&hl=id&sl=en&tl=id&client=srp" },
        { title: "Tips untuk menghadapi anxiety (Mayo Clinic terjemahan)", link: "https://translate.google.com/translate?u=https%3A%2F%2Fnewsnetwork.mayoclinic.org%2Fdiscussion%2Ftips-for-coping-with-an-anxiety-disorder%2F&hl=id&sl=en&tl=id&client=srp" },
        { title: "Gangguan Kecemasan: Jenis dan Pengobatan", link: "https://www.alodokter.com/kenali-tiga-jenis-gangguan-kecemasan-dan-gejalanya" },
        { title: "Relaksasi dan Terapi Untuk Kecemasan", link: "https://www.helpguide.org/mental-health/anxiety/treatment.htm" },
      ],
    },
    {
      id: "tips",
      title: "Tips & Tricks Mengelola Anxiety",
      titleEn: "Tips & Tricks to Manage Anxiety",
      description: "Tips praktis sehari-hari",
      descriptionEn: "Daily practical tips",
      icon: Lightbulb,
      color: "bg-yellow-500/10 hover:bg-yellow-500/20",
      articles: [
        { title: "Tips untuk mengatasi gangguan kecemasan (Mayo Clinic)", link: "https://translate.google.com/translate?u=https%3A%2F%2Fnewsnetwork.mayoclinic.org%2Fdiscussion%2Ftips-for-coping-with-an-anxiety-disorder%2F&hl=id&sl=en&tl=id&client=srp" },
        { title: "10 Tips Mengatasi Kecemasan (HelpGuide)", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.helpguide.org%2Fmental-health%2Fanxiety%2Ftips-for-dealing-with-anxiety&hl=id&sl=en&tl=id&client=srp" },
        { title: "7 Cara Mengatasi Gangguan Kecemasan yang Mudah Dilakukan", link: "https://www.alodokter.com/ketahui-cara-mengatasi-gangguan-kecemasan" },
        { title: "Anxiety Menyerang, Cara Meredakannya", link: "https://www.halodoc.com/artikel/anxiety-menyerang-bagaimana-cara-untuk-meredakannya" },
        { title: "Cara Menghilangkan Rasa Cemas Berlebihan", link: "https://hellosehat.com/mental/gangguan-kecemasan/cara-menghilangkan-rasa-cemas-berlebihan/" },
        { title: "Teknik Relaksasi dan Pernafasan untuk Anxiety", link: "https://www.siloamhospitals.com/informasi-siloam/artikel/cara-mengatasi-anxiety-attack" },
        { title: "Tips Mengatasi Stress dan Anxiety Sehari-hari", link: "https://www.alodokter.com/mengenal-anxiety-yang-mengganggu-dan-berbagai-jenisnya" },
        { title: "Cara Meredakan Kecemasan dengan Metode 3-3-3", link: "https://www.halodoc.com/artikel/anxiety-menyerang-bagaimana-cara-untuk-meredakannya" },
        { title: "Panduan Menjaga Kesehatan Mental dan Mengurangi Anxiety", link: "https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/gangguan-kecemasan-umum" },
        { title: "Cara Sederhana Mengatasi Anxiety di Kehidupan Sehari-hari", link: "https://hellosehat.com/mental/gangguan-kecemasan/cara-menghilangkan-rasa-cemas-berlebihan/" },
      ],
    },
    {
      id: "informasi",
      title: "Informasi Lainnya",
      titleEn: "Other Information",
      description: "Informasi tambahan terkait anxiety",
      descriptionEn: "Additional information related to anxiety",
      icon: Info,
      color: "bg-purple-500/10 hover:bg-purple-500/20",
      articles: [
        { title: "Gangguan kecemasan - WHO (informasi epidemiologi dan fakta)", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.who.int%2Fnews-room%2Ffact-sheets%2Fdetail%2Fanxiety-disorders&hl=id&sl=en&tl=id&client=srp" },
        { title: "Gangguan Kecemasan - National Institute of Mental Health", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.nimh.nih.gov%2Fhealth%2Ftopics%2Fanxiety-disorders&hl=id&sl=en&tl=id&client=srp" },
        { title: "Kenali Bahaya Anxiety Disorder dan Cara Penanganannya", link: "https://www.emc.id/id/care-plus/kenali-bahaya-anxiety-disorder-dan-cara-penanganannya" },
        { title: "Gangguan Kecemasan Umum - Ayo Sehat (Kemenkes)", link: "https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/gangguan-kecemasan-umum" },
        { title: "Jenis-jenis Gangguan Kecemasan Umum", link: "https://www.halodoc.com/kesehatan/gangguan-kecemasan-umum" },
        { title: "Dampak Gangguan Kecemasan pada Kesehatan Mental dan Fisik", link: "https://hellosehat.com/mental/gangguan-kecemasan/cara-menghilangkan-rasa-cemas-berlebihan/" },
        { title: "Faktor Pemicu dan Pencegahan Gangguan Kecemasan", link: "https://www.alodokter.com/ketahui-cara-mengatasi-gangguan-kecemasan" },
        { title: "Memahami Gangguan Panik dan Fobia dalam Anxiety Disorder", link: "https://www.alodokter.com/kenali-tiga-jenis-gangguan-kecemasan-dan-gejalanya" },
        { title: "Perbedaan Gangguan Kecemasan dan Stres Biasa", link: "https://www.halodoc.com/artikel/mengenal-anxiety-gangguan-kecemasan-dan-jenis-jenisnya" },
        { title: "Informasi Terbaru dan Statistik Anxiety di Indonesia", link: "https://www.mitrakeluarga.com/artikel/apa-itu-anxiety-disorder" },
      ],
    },
    {
      id: "cerita",
      title: "Cerita dan Kisah",
      titleEn: "Stories and Experiences",
      description: "Cerita relate tentang anxiety",
      descriptionEn: "Relatable stories about anxiety",
      icon: Heart,
      color: "bg-pink-500/10 hover:bg-pink-500/20",
      articles: [
        { title: "Belajar Berdamai dengan Diri Sendiri Setelah Generalized Anxiety Disorder", link: "https://pijarpsikologi.org/blog/cerita-kami-belajar-berdamai-dengan-diri-sendiri-setelah-mengalami-generalized-anxiety-disorder" },
        { title: "Pengalaman Penuh Lika-liku Hadapi GERD Anxiety", link: "https://hellosehat.com/pencernaan/gerd/pengalaman-gerd-anxiety/" },
        { title: "Berdamai dengan Kecemasan", link: "https://www.greatmind.id/article/berdamai-dengan-kecemasan" },
        { title: "Cerita Pasien Cemas/Anxiety/Depresi/Psikosomatik (YouTube)", link: "https://www.youtube.com/playlist?list=PLZ2QmLL0rNFsRZP58R93c8oIVcl6lTcm9" },
        { title: "Pengalaman dengan Kecemasan dan PTSD dari Suicide Bereavement", link: "https://translate.google.com/translate?u=https%3A%2F%2Fmentalhealth-uk.org%2Fblog%2Fmy-experience-with-anxiety-and-ptsd-from-suicide-bereavement%2F&hl=id&sl=en&tl=id&client=srp" },
        { title: "Bertahan Hidup dari GAD Gangguan Kecemasan Umum", link: "https://translate.google.com/translate?u=https%3A%2F%2Fadaa.org%2Fliving-with-anxiety%2Fpersonal-stories%2Fsurviving-gad-generalized-anxiety-disorder&hl=id&sl=en&tl=id&client=srp" },
        { title: "Hidup dengan Kecemasan dan Serangan Panik - Kisah Becki", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.rethink.org%2Fnews-and-stories%2Fblogs%2F2022%2F07%2Fliving-with-anxiety-and-panic-attacks-beckis-story%2F&hl=id&sl=en&tl=id&client=srp" },
        { title: "Perjuangan Melawan Kecemasan Kesehatan dan OCD", link: "https://translate.google.com/translate?u=https%3A%2F%2Fwww.aacn.org%2Fblog%2Fthe-journey-to-joy-my-struggles-with-health-anxiety-obsessive-compulsive-disorder&hl=id&sl=en&tl=id&client=srp" },
        { title: "Studi Kasus: Mengatasi Kecemasan – Kisah Sukses", link: "https://translate.google.com/translate?u=https%3A%2F%2Fcpdonline.co.uk%2Fknowledge-base%2Fmental-health%2Fovercoming-anxiety-success-stories%2F&hl=id&sl=en&tl=id&client=srp" },
      ],
    },
  ];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  if (selectedCategory && selectedCategoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Back to Features */}
            <Link to="/features">
              <Button 
                variant="ghost" 
                className="mb-4 flex items-center gap-2 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === "id" ? "Kembali ke Fitur" : "Back to Features"}
              </Button>
            </Link>

            {/* Back to Categories */}
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCategory(null)}
              className="mb-8 flex items-center gap-2 hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === "id" ? "Kembali ke Kategori" : "Back to Categories"}
            </Button>

            {/* Category Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className={`w-16 h-16 ${selectedCategoryData.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <selectedCategoryData.icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-primary">
                  {language === "id" ? selectedCategoryData.title : selectedCategoryData.titleEn}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === "id" ? selectedCategoryData.description : selectedCategoryData.descriptionEn}
              </p>
            </div>

            {/* Articles List */}
            <div className="space-y-4">
              {selectedCategoryData.articles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50">
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                          {article.title}
                        </p>
                      </div>
                      <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4">
                        →
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              {language === "id" ? "Kembali ke Fitur" : "Back to Features"}
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">{t("articlesPageTitle")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("articlesPageDesc")}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card 
                key={category.id}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {language === "id" ? category.title : category.titleEn}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {language === "id" ? category.description : category.descriptionEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {t("viewArticles")} ({category.articles.length})
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
