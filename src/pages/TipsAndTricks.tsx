import Navigation from "@/components/Navigation";
import { Video, ChevronRight, Play, Wind, Eye, Brain, Heart, Music, PenLine, Phone, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

// Import grounding images
import groundingSee from "@/assets/grounding/grounding-see.jpg";
import groundingTouch from "@/assets/grounding/grounding-touch.jpg";
import groundingHear from "@/assets/grounding/grounding-hear.jpg";
import groundingSmell from "@/assets/grounding/grounding-smell.jpg";
import groundingFeel from "@/assets/grounding/grounding-feel.jpg";

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

const TipsAndTricks = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedKit, setSelectedKit] = useState<string | null>(null);

  const playlists = [
    {
      id: "anxiety-videos",
      title: "Playlist Video Tentang Anxiety",
      titleEn: "Anxiety Video Playlist",
      description: "Koleksi video edukatif tentang anxiety",
      descriptionEn: "Educational video collection about anxiety",
      color: "bg-primary/10",
      videosId: [
        { id: "vEFRjeYNMSY", title: "Kenali Gejala Anxiety Disorder", url: "https://www.youtube.com/watch?v=vEFRjeYNMSY" },
        { id: "lHdmDeV8qT8", title: "Cara Agar Tidak Anxious Terus | Podcast Angkat Bicara #8", url: "https://www.youtube.com/watch?v=lHdmDeV8qT8" },
        { id: "0xV-gpKYv3k", title: "Cara Tepat Atasi Gangguan Kecemasan (Anxiety Disorder)", url: "https://www.youtube.com/watch?v=0xV-gpKYv3k" },
        { id: "tfLhnX9RdbM", title: "🎥 ANXIETY DISORDER : CURHAT & SOLUSI 🎥", url: "https://www.youtube.com/watch?v=tfLhnX9RdbM" },
        { id: "uBOz87RWoeM", title: "dr. Ryan Aditya, Sp.KJ (Bincang Sehat MIKA)", url: "https://www.youtube.com/watch?v=uBOz87RWoeM" },
        { id: "kSB7q-E6zI0", title: "Apa Itu Social Anxiety Disorder? Begini Penjelasannya", url: "https://www.youtube.com/watch?v=kSB7q-E6zI0" },
        { id: "vR8X-whnvig", title: "Temukan Ketenanganmu: Sebuah Panduan Mengatasi Kecemasan", url: "https://www.youtube.com/watch?v=vR8X-whnvig" },
        { id: "YLKYysEYiSo", title: "Bingung Memahami Anxiety ❓️ Pelan-pelan Saja", url: "https://www.youtube.com/watch?v=YLKYysEYiSo" },
        { id: "sfvyvRJCKFc", title: "Social Anxiety dalam kehidupan sehari-hari", url: "https://www.youtube.com/watch?v=sfvyvRJCKFc" },
        { id: "nhzbIpyQm2k", title: "Mengatasi kecemasan sebelum tidur", url: "https://www.youtube.com/watch?v=nhzbIpyQm2k" },
        { id: "dc3JifRLotg", title: "Penjelasan Kecemasan Berlebih oleh Psikolog", url: "https://www.youtube.com/watch?v=dc3JifRLotg" },
        { id: "Ja86YOd4zx4", title: "Penanganan Anxiety ala Medis dan Psikolog", url: "https://www.youtube.com/watch?v=Ja86YOd4zx4" },
        { id: "1XCObQjSHIs", title: "Diskusi Panel Tentang Anxiety dan Mental Health", url: "https://www.youtube.com/watch?v=1XCObQjSHIs" },
        { id: "PLZ2QmLL0rNFtgcgZSM_FYxcySCwh6u2uA", title: "Anxiety (Gangguan Kecemasan) [Playlist]", url: "https://www.youtube.com/playlist?list=PLZ2QmLL0rNFtgcgZSM_FYxcySCwh6u2uA" },
        { id: "anxietydisorderindonesia", title: "Ringkasan Gangguan Anxiety dan Tips", url: "https://www.youtube.com/hashtag/anxietydisorderindonesia" },
      ],
      videosEn: [
        { id: "BVJkf8IuRjE", title: "What is Anxiety?", url: "https://www.youtube.com/watch?v=BVJkf8IuRjE" },
        { id: "xGb4fvfZpWM", title: "I Treat Anxiety Every Day. These 10 Work Best.", url: "https://www.youtube.com/watch?v=xGb4fvfZpWM" },
        { id: "cTnPqgL8ZPs", title: "How to Make Anxiety Your Friend | David H. Rosmarin | TED", url: "https://www.youtube.com/watch?v=cTnPqgL8ZPs" },
        { id: "PxjxY9VilCs", title: "How to Deal With Anxiety - The Step-by-Step Guide", url: "https://www.youtube.com/watch?v=PxjxY9VilCs" },
        { id: "UR6ZUJsnV1E", title: "Understanding Anxiety: Symptoms, Causes and Treatments", url: "https://www.youtube.com/watch?v=UR6ZUJsnV1E" },
        { id: "WWloIAQpMcQ", title: "How to Cope with Anxiety | Olivia Remes | TEDxUHasselt", url: "https://www.youtube.com/watch?v=WWloIAQpMcQ" },
        { id: "db3K8b3ftaY", title: "What Is Anxiety Really? Stress and Anxiety Explained", url: "https://www.youtube.com/watch?v=db3K8b3ftaY" },
        { id: "dknTQktH5Z0", title: "Let's talk about anxiety animation", url: "https://www.youtube.com/watch?v=dknTQktH5Z0" },
        { id: "83wYDzO3CzI", title: "Public Speaking Anxiety Tips: 6 Mindset Tips", url: "https://www.youtube.com/watch?v=83wYDzO3CzI" },
        { id: "PLZoDGrriQgsJXYpmRL_MD7bIq20NmLCCs", title: "Anxiety Relief: Calm Your Mind Videos (Playlist)", url: "https://www.youtube.com/playlist?list=PLZoDGrriQgsJXYpmRL_MD7bIq20NmLCCs" },
        { id: "dc3JifRLotg", title: "Managing Stress & Overcoming Anxiety", url: "https://www.youtube.com/watch?v=dc3JifRLotg" },
        { id: "3cXGt2d1RyQ", title: "How to Cope with Anxiety - a relaxation technique | NHS", url: "https://www.youtube.com/watch?v=3cXGt2d1RyQ" },
        { id: "1XCObQjSHIs", title: "One Thing You Must Do to Overcome Anxiety | Sadhguru", url: "https://www.youtube.com/watch?v=1XCObQjSHIs" },
        { id: "FJ5tXuBi4EM", title: "The Secret to Stopping Anxiety & Fear (That Actually Works)", url: "https://www.youtube.com/watch?v=FJ5tXuBi4EM" },
        { id: "MK0rESk_oW0", title: "Quick-Start Guide to Anxiety Treatment", url: "https://www.youtube.com/watch?v=MK0rESk_oW0" },
      ],
    },
    {
      id: "tips-tricks",
      title: "Tips & Tricks Mengatasi Anxiety",
      titleEn: "Tips & Tricks for Managing Anxiety",
      description: "Video panduan praktis mengatasi anxiety",
      descriptionEn: "Practical guide videos for managing anxiety",
      color: "bg-primary/10",
      videosId: [
        { id: "nhzbIpyQm2k", title: "Tips Konkrit Mengatasi Kecemasan/Anxiety dari Psikolog", url: "https://www.youtube.com/watch?v=nhzbIpyQm2k" },
        { id: "abajYksqvJI", title: "Cara Mengatasi Panic attack, Anxiety atau Gelisah menurut ajaran Islam", url: "https://www.youtube.com/watch?v=abajYksqvJI" },
        { id: "lHdmDeV8qT8", title: "Cara Agar Tidak Anxious Terus | Podcast Angkat Bicara #8", url: "https://www.youtube.com/watch?v=lHdmDeV8qT8" },
        { id: "tfLhnX9RdbM", title: "🎥 ANXIETY DISORDER : CURHAT & SOLUSI 🎥", url: "https://www.youtube.com/watch?v=tfLhnX9RdbM" },
        { id: "0xV-gpKYv3k", title: "Cara Tepat Atasi Gangguan Kecemasan (Anxiety Disorder)", url: "https://www.youtube.com/watch?v=0xV-gpKYv3k" },
        { id: "uBOz87RWoeM", title: "dr. Ryan Aditya, Sp.KJ (Bincang Sehat MIKA)", url: "https://www.youtube.com/watch?v=uBOz87RWoeM" },
        { id: "vEFRjeYNMSY", title: "Kenali Gejala Anxiety Disorder", url: "https://www.youtube.com/watch?v=vEFRjeYNMSY" },
        { id: "dc3JifRLotg", title: "Tips Mengelola Anxiety Saat Kerja di Kantor", url: "https://www.youtube.com/watch?v=dc3JifRLotg" },
        { id: "JA86YOd4zx4", title: "Cara Praktis Mengurangi Kecemasan Berlebih", url: "https://www.youtube.com/watch?v=JA86YOd4zx4" },
        { id: "3cXGt2d1RyQ", title: "Panduan Relaksasi dan Meditasi Atasi Anxiety", url: "https://www.youtube.com/watch?v=3cXGt2d1RyQ" },
        { id: "nhzbIpyQm2k-2", title: "Teknik Pernafasan untuk Redakan Anxiety", url: "https://www.youtube.com/watch?v=nhzbIpyQm2k" },
        { id: "abajYksqvJI-2", title: "Tips Menghadapi Anxiety dan Panik Attack", url: "https://www.youtube.com/watch?v=abajYksqvJI" },
        { id: "tfLhnX9RdbM-2", title: "Sharing Kisah dan Cara Melawan Anxiety", url: "https://www.youtube.com/watch?v=tfLhnX9RdbM" },
        { id: "vR8X-whnvig", title: "Tips Sederhana Atasi Anxiety Saat Wawancara Kerja", url: "https://www.youtube.com/watch?v=vR8X-whnvig" },
        { id: "lHdmDeV8qT8-2", title: "Podcast: Cara Menghadapi Anxiety dan Stress Harian", url: "https://www.youtube.com/watch?v=lHdmDeV8qT8" },
      ],
      videosEn: [
        { id: "MK0rESk_oW0", title: "Quick-Start Guide to Anxiety Treatment", url: "https://www.youtube.com/watch?v=MK0rESk_oW0" },
        { id: "JA86YOd4zx4", title: "My System for Stopping Anxiety Attacks: 5 steps, 20+ Skills", url: "https://www.youtube.com/watch?v=JA86YOd4zx4" },
        { id: "PxjxY9VilCs", title: "How to Deal With Anxiety - The Step-by-Step Guide", url: "https://www.youtube.com/watch?v=PxjxY9VilCs" },
        { id: "dc3JifRLotg", title: "Managing Stress & Overcoming Anxiety", url: "https://www.youtube.com/watch?v=dc3JifRLotg" },
        { id: "1XCObQjSHIs", title: "One Thing You Must Do to Overcome Anxiety | Sadhguru", url: "https://www.youtube.com/watch?v=1XCObQjSHIs" },
        { id: "FJ5tXuBi4EM", title: "The Secret to Stopping Anxiety & Fear (That Actually Works)", url: "https://www.youtube.com/watch?v=FJ5tXuBi4EM" },
        { id: "xGb4fvfZpWM", title: "I Treat Anxiety Every Day. These 10 Work Best.", url: "https://www.youtube.com/watch?v=xGb4fvfZpWM" },
        { id: "3cXGt2d1RyQ", title: "How to Cope with Anxiety - a relaxation technique | NHS", url: "https://www.youtube.com/watch?v=3cXGt2d1RyQ" },
        { id: "83wYDzO3CzI", title: "Public Speaking Anxiety Tips: 6 Mindset Tips", url: "https://www.youtube.com/watch?v=83wYDzO3CzI" },
        { id: "PL4Qw4-tlRJe-BPvRFipv5uxWNJvG1LdI5", title: "Tips for Mindfulness and Anxiety Relief", url: "https://www.youtube.com/playlist?list=PL4Qw4-tlRJe-BPvRFipv5uxWNJvG1LdI5" },
        { id: "sfvyvRJCKFc", title: "Help for Anxiety & Panic with CBT and Exposure Therapy", url: "https://www.youtube.com/watch?v=sfvyvRJCKFc" },
        { id: "PLZoDGrriQgsJXYpmRL_MD7bIq20NmLCCs", title: "Anxiety Relief: Calm Your Mind Videos (Playlist)", url: "https://www.youtube.com/playlist?list=PLZoDGrriQgsJXYpmRL_MD7bIq20NmLCCs" },
        { id: "mvDZtyG3ivw", title: "How to Add Links, Videos & Playlists Into Your YouTube Videos", url: "https://www.youtube.com/watch?v=mvDZtyG3ivw" },
        { id: "JA86YOd4zx4-2", title: "Tips for Overcoming Anxiety Triggers", url: "https://www.youtube.com/watch?v=JA86YOd4zx4" },
        { id: "rr0a4r-sU9E", title: "Relaxation and Anxiety Control Techniques", url: "https://www.youtube.com/watch?v=rr0a4r-sU9E" },
      ],
    },
    {
      id: "anxiety-first-aid-kit",
      title: "Anxiety First Aid Kit",
      titleEn: "Anxiety First Aid Kit",
      description: "Toolkit lengkap untuk mengatasi anxiety",
      descriptionEn: "Complete toolkit to manage anxiety",
      color: "bg-green-500/10",
    },
  ];

  const groundingTechniques = [
    {
      number: 5,
      title: "Lihat 5 Benda",
      titleEn: "See 5 Things",
      description: "Coba lihat 5 benda di sekitar Anda apapun itu secara tenang dan jelas. Perhatikan warna, bentuk, dan detailnya untuk membantu Anda mengurangi kecemasan.",
      descriptionEn: "Try to see 5 things around you, anything at all, calmly and clearly. Notice their colors, shapes, and details to help reduce your anxiety.",
      image: groundingSee,
      color: "bg-blue-500/10",
    },
    {
      number: 4,
      title: "Sentuh 4 Benda",
      titleEn: "Touch 4 Things",
      description: "Sentuh 4 benda di sekitar Anda. Rasakan teksturnya - apakah halus, kasar, hangat, atau dingin. Fokus pada sensasi sentuhan untuk menenangkan pikiran.",
      descriptionEn: "Touch 4 things around you. Feel their textures - whether smooth, rough, warm, or cold. Focus on the sensation of touch to calm your mind.",
      image: groundingTouch,
      color: "bg-purple-500/10",
    },
    {
      number: 3,
      title: "Dengar 3 Suara",
      titleEn: "Hear 3 Sounds",
      description: "Dengarkan dengan tenang 3 suara di sekitar Anda. Mungkin suara angin, kendaraan, atau suara burung. Biarkan suara-suara itu mengalir tanpa menghakimi.",
      descriptionEn: "Listen calmly to 3 sounds around you. Perhaps the wind, vehicles, or birds. Let these sounds flow without judgment.",
      image: groundingHear,
      color: "bg-green-500/10",
    },
    {
      number: 2,
      title: "Cium 2 Aroma",
      titleEn: "Smell 2 Scents",
      description: "Coba cium bau atau aroma 2 benda di sekitar Anda. Bisa aroma kopi, bunga, atau parfum. Fokus pada aromanya untuk membawa Anda kembali ke saat ini.",
      descriptionEn: "Try to smell 2 scents around you. Perhaps coffee, flowers, or perfume. Focus on the aromas to bring you back to the present moment.",
      image: groundingSmell,
      color: "bg-pink-500/10",
    },
    {
      number: 1,
      title: "Rasakan 1 Hal",
      titleEn: "Feel 1 Thing",
      description: "Rasakan 1 hal yang bisa Anda rasakan saat ini. Mungkin detak jantung, napas, atau kaki menyentuh lantai. Hadir sepenuhnya dalam momen ini.",
      descriptionEn: "Feel 1 thing you can sense right now. Perhaps your heartbeat, breath, or feet touching the floor. Be fully present in this moment.",
      image: groundingFeel,
      color: "bg-orange-500/10",
    },
  ];

  const affirmationsData = {
    intro: "Peluk diri sendiri, ambil nafas pelan, pejamkan mata dan ucapkan setiap kalimat ini dengan pelan dan lembut. Kita coba ya, semoga membantu 💜",
    introEn: "Hug yourself, take a slow breath, close your eyes and say each of these sentences slowly and gently. Let's try, hope it helps 💜",
    affirmations: [
      {
        text: "Saya layak mendapatkan kebahagiaan dan cinta",
        textEn: "I am worthy of happiness and love",
        encouragement: "Kamu pantas bahagia, selalu ingat itu!",
        encouragementEn: "You deserve to be happy, always remember that!",
      },
      {
        text: "Saya kuat dan mampu menghadapi tantangan apapun",
        textEn: "I am strong and capable of facing any challenge",
        encouragement: "Kamu sudah melewati banyak hal sulit, dan kamu tetap berdiri di sini!",
        encouragementEn: "You have overcome many difficult things, and you are still standing here!",
      },
      {
        text: "Saya mencintai dan menerima diri saya apa adanya",
        textEn: "I love and accept myself just as I am",
        encouragement: "Kamu sempurna dengan cara kamu sendiri 🌟",
        encouragementEn: "You are perfect in your own way 🌟",
      },
      {
        text: "Setiap hari saya menjadi versi terbaik dari diri saya",
        textEn: "Every day I become the best version of myself",
        encouragement: "Progres kecil tetap progres, terus maju!",
        encouragementEn: "Small progress is still progress, keep going!",
      },
      {
        text: "Saya berharga dan berarti bagi orang-orang di sekitar saya",
        textEn: "I am valuable and meaningful to those around me",
        encouragement: "Kehadiranmu membuat perbedaan untuk banyak orang!",
        encouragementEn: "Your presence makes a difference to many people!",
      },
      {
        text: "Saya tenang dan damai dalam setiap situasi",
        textEn: "I am calm and peaceful in every situation",
        encouragement: "Kamu punya kekuatan untuk tetap tenang 🌊",
        encouragementEn: "You have the strength to stay calm 🌊",
      },
      {
        text: "Saya melepaskan kecemasan dan menerima kedamaian",
        textEn: "I release anxiety and embrace peace",
        encouragement: "Lepaskan yang berat, peluk yang ringan!",
        encouragementEn: "Release the heavy, embrace the light!",
      },
      {
        text: "Saya pantas mendapatkan cinta dan kasih sayang",
        textEn: "I deserve love and affection",
        encouragement: "Kamu layak dicintai, tanpa syarat apapun 💕",
        encouragementEn: "You are worthy of love, without any conditions 💕",
      },
      {
        text: "Saya percaya pada perjalanan hidup saya",
        textEn: "I trust in my life journey",
        encouragement: "Setiap langkahmu punya makna!",
        encouragementEn: "Every step you take has meaning!",
      },
      {
        text: "Saya adalah sumber kebahagiaan bagi diri saya sendiri",
        textEn: "I am the source of my own happiness",
        encouragement: "Kebahagiaanmu ada di tanganmu 🌈",
        encouragementEn: "Your happiness is in your hands 🌈",
      },
    ],
  };

  const selfLoveVideos = [
    { id: "9kdHXQ7BPc8", title: "Belajar kuat mental", url: "https://youtu.be/9kdHXQ7BPc8?si=MSacjLA8Z8hpVKJ0" },
    { id: "-MF3sxgD28M", title: "Cara membunuh keraguan diri", url: "https://youtu.be/-MF3sxgD28M?si=M0KkhyJs8eWWfxGX" },
    { id: "A7Pt8R2Fx2Q", title: "Cara mudah bangun kembali kebiasaan positif", url: "https://youtu.be/A7Pt8R2Fx2Q?si=SbsclseT_8X1fLNQ" },
    { id: "wUAh6YgPbog", title: "Self grow talk", url: "https://youtu.be/wUAh6YgPbog?si=0p8ZISxMs-EIcNh0" },
    { id: "dAI12OGD04A", title: "Kunci dari kebahagiaan, bersikap bodoamat?", url: "https://youtu.be/dAI12OGD04A?si=OLv45yFEM0qAUIqj" },
    { id: "9qwR3GmR63I", title: "Supaya gak gampang overthinking", url: "https://youtu.be/9qwR3GmR63I?si=kZCwz7bsNFnJl-8u" },
    { id: "kNOIyglqn3Y", title: "Strategi self healing & mengenal diri sendiri", url: "https://youtu.be/kNOIyglqn3Y?si=V5eA9IZ3xuxk2X3y" },
    { id: "isD3bKIrofM", title: "Membangun rasa percaya diri", url: "https://youtu.be/isD3bKIrofM?si=_54fmr2VGb8NBfLA" },
    { id: "PAhACCZb76g", title: "Menjernihkan pikiran agar tidak keruh", url: "https://youtu.be/PAhACCZb76g?si=UMjZjozQw0GiD__9" },
    { id: "nofDzC4DXFs", title: "Cara mengenal diri lebih baik lagi", url: "https://youtu.be/nofDzC4DXFs?si=_htADMVM_1c2wA4R" },
    { id: "NsRTZ0msIEU", title: "Untuk kamu yang lagi ngerasa 'ketinggalan' sama yang lain", url: "https://youtu.be/NsRTZ0msIEU?si=ZuPPSqyhXx1eIyWe" },
    { id: "cds-Zd9msdQ", title: "Ubah mindset kamu", url: "https://youtu.be/cds-Zd9msdQ?si=MhkVLlwoC5n0AWKh" },
    { id: "dmFKPhjoRrE", title: "Seni berdamai dengan ketidakpastian hidup", url: "https://youtu.be/dmFKPhjoRrE?si=jmhngpZ6vgwgNsjC" },
    { id: "9IoTnUM7vOc", title: "Pesan untuk kamu yang sering meragukan diri sendiri", url: "https://youtu.be/9IoTnUM7vOc?si=185XXaJohLN0vKS8" },
    { id: "nSxZflv29SY", title: "Self improvement", url: "https://youtu.be/nSxZflv29SY?si=_jn_fT22lO2nopvt" },
    { id: "kN7nduwBlN4", title: "Perjalanan menerima diri", url: "https://youtu.be/kN7nduwBlN4?si=PHVi3A7UGpzRkkvw" },
    { id: "U6qeW1MoK9s", title: "Self healing - menyembuhkan luka batin", url: "https://youtu.be/U6qeW1MoK9s?si=Dl3oIxq4ctBBLH5D" },
    { id: "6KPLw3SkqP8", title: "Rehat sejenak", url: "https://youtu.be/6KPLw3SkqP8?si=0tMIeDkkYuBEbZHd" },
    { id: "SMPjQdkwISk", title: "Move on yuk", url: "https://youtu.be/SMPjQdkwISk?si=UMApxr6tDyqKuDR0" },
    { id: "VBSb63bJGXo", title: "Menghadapi rasa insecure", url: "https://youtu.be/VBSb63bJGXo?si=9-mDYF4dIYJbYv5E" },
  ];

  const anxietyKits = [
    {
      id: "digibreath",
      title: "Digibreath",
      titleEn: "Digibreath",
      subtitle: "Latihan Pernafasan",
      subtitleEn: "Breathing Exercises",
      icon: Wind,
      color: "bg-blue-500/10",
      description: "Latihan pernafasan adalah teknik yang efektif untuk menenangkan sistem saraf dan mengurangi gejala anxiety. Dengan fokus pada napas, Anda dapat mengaktifkan respons relaksasi tubuh dan menurunkan tingkat stres.",
      descriptionEn: "Breathing exercises are effective techniques to calm the nervous system and reduce anxiety symptoms. By focusing on breath, you can activate the body's relaxation response and lower stress levels.",
      videos: [
        { id: "tybOi4hjZFQ", title: "Breathing Exercise for Anxiety", url: "https://www.youtube.com/watch?v=tybOi4hjZFQ" },
        { id: "DbDoBzGY3vo", title: "5 Minute Breathing Exercise for Anxiety Relief", url: "https://www.youtube.com/watch?v=DbDoBzGY3vo" },
        { id: "aXItOY0sLRY", title: "Box Breathing Technique", url: "https://www.youtube.com/watch?v=aXItOY0sLRY" },
        { id: "FKB0NswfiLw", title: "Deep Breathing for Stress Relief", url: "https://www.youtube.com/watch?v=FKB0NswfiLw" },
        { id: "inpok4MKVLM", title: "4-7-8 Breathing Technique", url: "https://www.youtube.com/watch?v=inpok4MKVLM" },
      ],
    },
    {
      id: "digiseen",
      title: "Digiseen",
      titleEn: "Digiseen",
      subtitle: "Perhatikan Lingkungan Sekitar & Teknik Grounding",
      subtitleEn: "Observe Surroundings & Grounding Technique",
      icon: Eye,
      color: "bg-purple-500/10",
    },
    {
      id: "digimind",
      title: "Digimind",
      titleEn: "Digimind",
      subtitle: "Mindfulness, Meditasi & Relaxing",
      subtitleEn: "Mindfulness, Meditation & Relaxation",
      icon: Brain,
      color: "bg-indigo-500/10",
      playlists: [
        {
          title: "Mindfulness Videos",
          titleEn: "Mindfulness Videos",
          videos: [
            { id: "ZToicYcHIOU", title: "What is Mindfulness?", url: "https://www.youtube.com/watch?v=ZToicYcHIOU" },
            { id: "6p_yaNFSYao", title: "5 Minute Mindfulness Meditation", url: "https://www.youtube.com/watch?v=6p_yaNFSYao" },
            { id: "thcEuMDWxoI", title: "Mindfulness for Beginners", url: "https://www.youtube.com/watch?v=thcEuMDWxoI" },
          ],
        },
        {
          title: "Guided Meditation",
          titleEn: "Guided Meditation",
          videos: [
            { id: "inpok4MKVLM", title: "10 Minute Guided Meditation", url: "https://www.youtube.com/watch?v=inpok4MKVLM" },
            { id: "z6X5oEIg6Ak", title: "Meditation for Anxiety", url: "https://www.youtube.com/watch?v=z6X5oEIg6Ak" },
            { id: "86m4RC_ADEY", title: "Body Scan Meditation", url: "https://www.youtube.com/watch?v=86m4RC_ADEY" },
          ],
        },
        {
          title: "Relaxing Content",
          titleEn: "Relaxing Content",
          videos: [
            { id: "1ZYbU82GVz4", title: "Nature Sounds for Relaxation", url: "https://www.youtube.com/watch?v=1ZYbU82GVz4" },
            { id: "YocKGPC2-Jk", title: "Calming Music", url: "https://www.youtube.com/watch?v=YocKGPC2-Jk" },
            { id: "lTRiuFIWV54", title: "Rain Sounds for Sleep", url: "https://www.youtube.com/watch?v=lTRiuFIWV54" },
          ],
        },
      ],
    },
    {
      id: "digisoul",
      title: "Digisoul",
      titleEn: "Digisoul",
      subtitle: "Peluk Diri, Afirmasi Positif",
      subtitleEn: "Self-Hug, Positive Affirmations",
      icon: Heart,
      color: "bg-pink-500/10",
    },
    {
      id: "digisound",
      title: "Digisound",
      titleEn: "Digisound",
      subtitle: "Dengarkan Musik Menenangkan",
      subtitleEn: "Listen to Calming Music",
      icon: Music,
      color: "bg-cyan-500/10",
      action: "navigate",
      path: "/relaxing-audio",
    },
    {
      id: "digipen",
      title: "Digipen",
      titleEn: "Digipen",
      subtitle: "Tulis Perasaan dengan Journaling",
      subtitleEn: "Write Your Feelings with Journaling",
      icon: PenLine,
      color: "bg-yellow-500/10",
      message: "Mau coba tulis perasaanmu dan berbagi kisah tanpa rasa takut ke DigitalKind AI? Yuk coba sekarang",
      messageEn: "Want to write your feelings and share your story without fear to DigitalKind AI? Try it now",
      whatsappUrl: "https://wa.me/ais/1115307430372997?s=5",
    },
    {
      id: "digitalk",
      title: "Digitalk",
      titleEn: "Digitalk",
      subtitle: "Coba Berbicara dengan Orang Lain & Cari Bantuan Profesional",
      subtitleEn: "Try Talking to Others & Seek Professional Help",
      icon: Phone,
      color: "bg-green-500/10",
      options: [
        {
          title: "Chat dengan DigitalKind AI",
          titleEn: "Chat with DigitalKind AI",
          message: "Mau coba tulis perasaanmu dan berbagi kisah tanpa rasa takut ke DigitalKind AI? Yuk coba sekarang",
          messageEn: "Want to write your feelings and share your story without fear to DigitalKind AI? Try it now",
          whatsappUrl: "https://wa.me/ais/1115307430372997?s=5",
        },
        {
          title: "Hubungi Kami",
          titleEn: "Contact Us",
          action: "navigate",
          path: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-2xl w-full max-w-5xl animate-fade-in">
            <div className="p-6">
              <Button
                variant="ghost"
                onClick={() => setSelectedVideo(null)}
                className="mb-4 flex items-center gap-2 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("language") === "id" ? "Tutup Video" : "Close Video"}
              </Button>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
      
      <div className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto">
          {/* Back to Features */}
          <Link to="/features">
            <Button 
              variant="ghost" 
              className="mb-4 flex items-center gap-2 hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("language") === "id" ? "Kembali ke Fitur" : "Back to Features"}
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">{t("tipsAndTricks")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("tipsAndTricksPageDesc")}
            </p>
          </div>

          {!selectedPlaylist ? (
            /* Playlist Selection */
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {playlists.map((playlist, index) => (
                <Card 
                  key={playlist.id}
                  className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in cursor-pointer w-full md:w-[calc(50%-1rem)] max-w-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedPlaylist(playlist.id)}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 ${playlist.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Video className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl flex items-center justify-between">
                      {t("language") === "id" ? playlist.title : playlist.titleEn}
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t("language") === "id" ? playlist.description : playlist.descriptionEn}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : selectedPlaylist === "anxiety-first-aid-kit" ? (
            /* Anxiety First Aid Kit Display */
            <div className="animate-fade-in">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedPlaylist(null);
                  setSelectedKit(null);
                }}
                className="mb-6 flex items-center gap-2 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("language") === "id" ? "Kembali ke Daftar Playlist" : "Back to Playlist List"}
              </Button>

              {!selectedKit ? (
                /* Show 7 Kits */
                <div className="flex flex-wrap justify-center gap-6">
                  {anxietyKits.map((kit, index) => {
                    const Icon = kit.icon;
                    return (
                      <Card
                        key={kit.id}
                        className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer w-full md:w-[calc(33.333%-1rem)] max-w-xs"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => {
                          if (kit.id === "digisound") {
                            navigate("/relaxing-audio");
                          } else {
                            setSelectedKit(kit.id);
                          }
                        }}
                      >
                        <CardHeader>
                          <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">
                            {t("language") === "id" ? kit.title : kit.titleEn}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {t("language") === "id" ? kit.subtitle : kit.subtitleEn}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                /* Show Selected Kit Content */
                <div className="animate-fade-in">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedKit(null)}
                    className="mb-6 flex items-center gap-2 hover:text-primary"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t("language") === "id" ? "Kembali" : "Back"}
                  </Button>

                  {(() => {
                    const kit = anxietyKits.find((k) => k.id === selectedKit);
                    if (!kit) return null;
                    const KitIcon = kit.icon;

                    // Digibreath - Breathing exercises
                    if (kit.id === "digibreath") {
                      return (
                        <div className="space-y-6">
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center`}>
                                <KitIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h2 className="text-2xl font-bold text-primary">
                                {t("language") === "id" ? kit.title : kit.titleEn}
                              </h2>
                            </div>
                            <p className="text-muted-foreground">
                              {t("language") === "id" ? kit.description : kit.descriptionEn}
                            </p>
                          </div>

                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <h3 className="text-xl font-semibold mb-4">
                              {t("language") === "id" ? "Video Tutorial" : "Video Tutorials"}
                            </h3>
                            <Carousel className="w-full">
                              <CarouselContent>
                                {kit.videos?.map((video) => (
                                  <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50">
                                      <CardContent className="p-0">
                                        <div className="relative aspect-video">
                                          <img
                                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover rounded-t-lg"
                                          />
                                          <div className="absolute bottom-3 right-3">
                                            <button 
                                              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                                              onClick={() => setSelectedVideo(video)}
                                            >
                                              <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="p-4">
                                          <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          </div>
                        </div>
                      );
                    }

                    // Digiseen - Grounding technique with images
                    if (kit.id === "digiseen") {
                      return (
                        <div className="space-y-6">
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center`}>
                                <KitIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h2 className="text-2xl font-bold text-primary">
                                {t("language") === "id" ? kit.title : kit.titleEn}
                              </h2>
                            </div>
                            <p className="text-lg font-semibold mb-2">
                              {t("language") === "id" ? "Teknik Grounding 5-4-3-2-1" : "5-4-3-2-1 Grounding Technique"}
                            </p>
                            <p className="text-muted-foreground mb-6">
                              {t("language") === "id" 
                                ? "Teknik grounding membantu membawa perhatian Anda kembali ke saat ini dan mengurangi kecemasan." 
                                : "Grounding technique helps bring your attention back to the present moment and reduce anxiety."}
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-6">
                              {groundingTechniques.map((technique, index) => (
                                <Card key={index} className={`border-border/50 overflow-hidden w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm ${technique.color}`}>
                                  <div className="aspect-video relative">
                                    <img
                                      src={technique.image}
                                      alt={t("language") === "id" ? technique.title : technique.titleEn}
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-3 left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                                      {technique.number}
                                    </div>
                                  </div>
                                  <CardContent className="p-4">
                                    <h4 className="text-lg font-semibold mb-2">
                                      {t("language") === "id" ? technique.title : technique.titleEn}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                      {t("language") === "id" ? technique.description : technique.descriptionEn}
                                    </p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // Digimind - Mindfulness, meditation
                    if (kit.id === "digimind") {
                      return (
                        <div className="space-y-6">
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center`}>
                                <KitIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h2 className="text-2xl font-bold text-primary">
                                {t("language") === "id" ? kit.title : kit.titleEn}
                              </h2>
                            </div>
                          </div>

                          {kit.playlists?.map((playlist, pIndex) => (
                            <div key={pIndex} className="bg-card rounded-2xl shadow-soft p-6">
                              <h3 className="text-xl font-semibold mb-4">
                                {t("language") === "id" ? playlist.title : playlist.titleEn}
                              </h3>
                              <Carousel className="w-full">
                                <CarouselContent>
                                  {playlist.videos.map((video) => (
                                    <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                                      <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50">
                                        <CardContent className="p-0">
                                          <div className="relative aspect-video">
                                            <img
                                              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                              alt={video.title}
                                              className="w-full h-full object-cover rounded-t-lg"
                                            />
                                            <div className="absolute bottom-3 right-3">
                                              <button 
                                                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                                                onClick={() => setSelectedVideo(video)}
                                              >
                                                <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                              </button>
                                            </div>
                                          </div>
                                          <div className="p-4">
                                            <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                                          </div>
                                        </CardContent>
                                      </Card>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </div>
                          ))}
                        </div>
                      );
                    }

                    // Digisoul - Positive affirmations with intro and self-love videos
                    if (kit.id === "digisoul") {
                      return (
                        <div className="space-y-6">
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center`}>
                                <KitIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h2 className="text-2xl font-bold text-primary">
                                {t("language") === "id" ? kit.title : kit.titleEn}
                              </h2>
                            </div>
                          </div>

                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <h3 className="text-xl font-semibold mb-4">
                              {t("language") === "id" ? "Afirmasi Positif" : "Positive Affirmations"}
                            </h3>
                            
                            {/* Intro message */}
                            <div className="bg-primary/10 rounded-xl p-4 mb-6 text-center">
                              <p className="text-base italic text-foreground">
                                {t("language") === "id" ? affirmationsData.intro : affirmationsData.introEn}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {affirmationsData.affirmations.map((affirmation, index) => (
                                <Card key={index} className="border-border/50 bg-gradient-to-br from-primary/5 to-pink-500/5 hover:shadow-lg transition-all duration-300">
                                  <CardContent className="p-5">
                                    <p className="text-base font-medium text-center mb-3">
                                      "{t("language") === "id" ? affirmation.text : affirmation.textEn}"
                                    </p>
                                    <p className="text-sm text-center text-primary italic">
                                      {t("language") === "id" ? affirmation.encouragement : affirmation.encouragementEn}
                                    </p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>

                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <h3 className="text-xl font-semibold mb-4">
                              {t("language") === "id" ? "Video Self Love & Development" : "Self Love & Development Videos"}
                            </h3>
                            <Carousel className="w-full">
                              <CarouselContent>
                                {selfLoveVideos.map((video) => (
                                  <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50">
                                      <CardContent className="p-0">
                                        <div className="relative aspect-video">
                                          <img
                                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover rounded-t-lg"
                                          />
                                          <div className="absolute bottom-3 right-3">
                                            <button 
                                              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                                              onClick={() => setSelectedVideo(video)}
                                            >
                                              <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="p-4">
                                          <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          </div>
                        </div>
                      );
                    }

                    // Digipen - Journaling
                    if (kit.id === "digipen") {
                      const journalingVideos = [
                        { id: "s-voafXRf9w", title: "Starting Journaling Tutorial 1", url: "https://youtu.be/s-voafXRf9w?si=FNlVbb-q83BE5ZEt" },
                        { id: "AcLrPFFqQ20", title: "Starting Journaling Tutorial 2", url: "https://youtu.be/AcLrPFFqQ20?si=8Ym0qetNromNgAdE" },
                        { id: "FLtxI6RnGiA", title: "Starting Journaling Tutorial 3", url: "https://youtu.be/FLtxI6RnGiA?si=c93DlG2KG-jMjUcT" },
                        { id: "P9xv5-CRaLE", title: "Starting Journaling Tutorial 4", url: "https://youtu.be/P9xv5-CRaLE?si=aPM1iBbYlO1sxNFU" },
                        { id: "j90_YbRtHUI", title: "Starting Journaling Tutorial 5", url: "https://youtu.be/j90_YbRtHUI?si=Qa-YXSti2CKsqefV" },
                        { id: "W409TU9-jYk", title: "Starting Journaling Tutorial 6", url: "https://youtu.be/W409TU9-jYk?si=1757HnajsnlmEv3u" },
                        { id: "PHwpD4e_dxo", title: "Starting Journaling Tutorial 7", url: "https://youtu.be/PHwpD4e_dxo?si=12xjgPPy6UK0Utmz" },
                        { id: "D66zkxj6jms", title: "Starting Journaling Tutorial 8", url: "https://youtu.be/D66zkxj6jms?si=QRDNJM3gTRMhvLM9" },
                        { id: "bzel9ChXwao", title: "Starting Journaling Tutorial 9", url: "https://youtu.be/bzel9ChXwao?si=OA3D9KUaSki20wFV" },
                        { id: "6CSwhBS2w9w", title: "Starting Journaling Tutorial 10", url: "https://youtu.be/6CSwhBS2w9w?si=6kF9RVwXSGHaZY9o" },
                      ];
                      
                      return (
                        <div className="space-y-6">
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center`}>
                                <KitIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h2 className="text-2xl font-bold text-primary">
                                {t("language") === "id" ? kit.title : kit.titleEn}
                              </h2>
                            </div>
                            <Card className="border-primary/20 bg-primary/5">
                              <CardContent className="p-6">
                                <p className="text-lg mb-4 text-center">
                                  {t("language") === "id" ? kit.message : kit.messageEn}
                                </p>
                                <div className="flex justify-center">
                                  <Button
                                    onClick={() => window.open(kit.whatsappUrl, "_blank")}
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                  >
                                    {t("language") === "id" ? "Chat with DigitalKind AI" : "Chat with DigitalKind AI"}
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Journaling Tutorial Videos */}
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <h3 className="text-xl font-semibold mb-4">
                              {t("language") === "id" ? "Video Tutorial Starting Journaling" : "Starting Journaling Tutorial Videos"}
                            </h3>
                            <Carousel className="w-full">
                              <CarouselContent>
                                {journalingVideos.map((video) => (
                                  <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50">
                                      <CardContent className="p-0">
                                        <div className="relative aspect-video">
                                          <img
                                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover rounded-t-lg"
                                          />
                                          <div className="absolute bottom-3 right-3">
                                            <button 
                                              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                                              onClick={() => setSelectedVideo(video)}
                                            >
                                              <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                            </button>
                                          </div>
                                        </div>
                                        <div className="p-4">
                                          <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          </div>
                        </div>
                      );
                    }

                    // Digitalk - Talk to others
                    if (kit.id === "digitalk") {
                      return (
                        <div className="space-y-6">
                          <div className="bg-card rounded-2xl shadow-soft p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`w-12 h-12 ${kit.color} rounded-xl flex items-center justify-center`}>
                                <KitIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h2 className="text-2xl font-bold text-primary">
                                {t("language") === "id" ? kit.title : kit.titleEn}
                              </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Chat with Digitalkind AI */}
                              <Card className="border-primary/20 bg-primary/5">
                                <CardContent className="p-6">
                                  <h3 className="text-xl font-semibold mb-4 text-center">
                                    {t("language") === "id" ? "Chat with Digitalkind AI" : "Chat with Digitalkind AI"}
                                  </h3>
                                  <p className="text-base mb-4 text-center text-muted-foreground">
                                    {t("language") === "id" 
                                      ? "Yuk ceritakan perasaanmu tanpa takut dihakimi dan di-judge bersama Digitalkind AI" 
                                      : "Share your feelings without fear of being judged with Digitalkind AI"}
                                  </p>
                                  <div className="flex justify-center">
                                    <Button
                                      onClick={() => window.open("https://wa.me/6285174070560", "_blank")}
                                      className="bg-green-500 hover:bg-green-600 text-white"
                                    >
                                      {t("language") === "id" ? "Chat with DigitalKind AI" : "Chat with DigitalKind AI"}
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Contact Us */}
                              <Card className="border-primary/20 bg-primary/5">
                                <CardContent className="p-6">
                                  <h3 className="text-xl font-semibold mb-4 text-center">
                                    {t("language") === "id" ? "Hubungi Kami" : "Contact Us"}
                                  </h3>
                                  <p className="text-base mb-4 text-center text-muted-foreground">
                                    {t("language") === "id" 
                                      ? "Ingin mengungkapkan hal yang kamu rasakan tapi bingung harus kemana? Yuk ceritakan perasaan dan keluh kesahmu kepada kami! Kami disini siap membantu kapanpun. Karena kami percaya setiap hal berharga memiliki rasa dan makna." 
                                      : "Want to express what you feel but don't know where to go? Share your feelings and concerns with us! We are here to help anytime. Because we believe every precious thing has feeling and meaning."}
                                  </p>
                                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Button
                                      onClick={() => navigate("/contact")}
                                      className="bg-primary hover:bg-primary/90"
                                    >
                                      {t("language") === "id" ? "Hubungi Kami" : "Contact Us"}
                                    </Button>
                                    <Button
                                      onClick={() => window.open("https://t.me/digitalkind", "_blank")}
                                      variant="outline"
                                      className="border-primary text-primary hover:bg-primary/10"
                                    >
                                      {t("language") === "id" ? "Gabung Komunitas" : "Join Community"}
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })()}
                </div>
              )}
            </div>
          ) : (
            /* Playlist Videos Display */
            <div className="animate-fade-in">
              <Button
                variant="ghost"
                onClick={() => setSelectedPlaylist(null)}
                className="mb-6 flex items-center gap-2 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("language") === "id" ? "Kembali ke Daftar Playlist" : "Back to Playlist List"}
              </Button>

              <div className="bg-card rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  {playlists.find(p => p.id === selectedPlaylist)?.[t("language") === "id" ? "title" : "titleEn"]}
                </h2>
                
                {selectedVideo ? (
                  /* Video Player */
                  <div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedVideo(null)}
                      className="mb-4 flex items-center gap-2 hover:text-primary"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      {t("language") === "id" ? "Kembali ke Daftar Video" : "Back to Video List"}
                    </Button>
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                        title={selectedVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{selectedVideo.title}</h3>
                  </div>
                ) : (
                  /* Video Grid with Carousel */
                  <div>
                    {/* Indonesian Videos */}
                    <div className="mb-12">
                      <h3 className="text-xl font-bold mb-4 text-foreground">
                        {t("language") === "id" ? "Video Bahasa Indonesia" : "Indonesian Videos"}
                      </h3>
                      <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                          {playlists.find(p => p.id === selectedPlaylist)?.videosId.map((video) => (
                            <CarouselItem key={video.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                              <Card 
                                className="group cursor-pointer hover:shadow-hover transition-all duration-300 overflow-hidden"
                                onClick={() => setSelectedVideo(video)}
                              >
                                <div className="relative aspect-video overflow-hidden">
                                  <img
                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute bottom-3 right-3">
                                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                      <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                    </button>
                                  </div>
                                </div>
                                <CardHeader className="p-4">
                                  <CardTitle className="text-sm line-clamp-2">{video.title}</CardTitle>
                                </CardHeader>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0" />
                        <CarouselNext className="right-0" />
                      </Carousel>
                    </div>

                    {/* English Videos */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">
                        {t("language") === "id" ? "Video Bahasa Inggris" : "English Videos"}
                      </h3>
                      <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                          {playlists.find(p => p.id === selectedPlaylist)?.videosEn.map((video) => (
                            <CarouselItem key={video.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                              <Card 
                                className="group cursor-pointer hover:shadow-hover transition-all duration-300 overflow-hidden"
                                onClick={() => setSelectedVideo(video)}
                              >
                                <div className="relative aspect-video overflow-hidden">
                                  <img
                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute bottom-3 right-3">
                                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                      <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                                    </button>
                                  </div>
                                </div>
                                <CardHeader className="p-4">
                                  <CardTitle className="text-sm line-clamp-2">{video.title}</CardTitle>
                                </CardHeader>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0" />
                        <CarouselNext className="right-0" />
                      </Carousel>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipsAndTricks;