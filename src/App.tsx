import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ButterflyAnimation from "@/components/ButterflyAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Articles from "./pages/Articles";
import TipsAndTricks from "./pages/TipsAndTricks";
import Podcasts from "./pages/Podcasts";
import RelaxingAudio from "./pages/RelaxingAudio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatedBackground />
          <ButterflyAnimation />
          <WhatsAppButton />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/relaxing-audio" element={<RelaxingAudio />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
