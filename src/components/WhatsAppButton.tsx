import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <a
      href="https://l.instagram.com/?u=https%3A%2F%2Faistudio.instagram.com%2Fai%2F1115307430372997%3Futm_source%3Dai_agent%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnHU7wpGueTMRuSQIAmQur4o-wt1whnUxL5vrloSYTXU-QjRGh2hNZoI_6WGU_aem_8xQuWcsH9LXiUMLd7_Ob7g&e=AUD5GbtUg1zUSBgA0xo34QtqccN9AtV59_QozAkiJ_5mtOsigzUaAdndR3tToOQfEIpNNAOycgVjeG5iucCq0gXc3JAWLTlRgJkHF8yoAGuGCVmd9IHsobSVMYLwjBUAIOff7Uc"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat with DigitalKind AI on WhatsApp"
    >
      {/* Animated Tooltip */}
      <div 
        className={`bg-card/95 backdrop-blur-sm border border-border text-foreground text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap transition-all duration-500 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <span className="font-medium">Let's chat with Digitalkind AI</span>
        <span className="ml-2 animate-pulse">💬</span>
      </div>
      
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500/40 rounded-full animate-ping" />
        
        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
