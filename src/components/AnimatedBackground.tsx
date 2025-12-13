const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-teal-50/60 to-emerald-100/70 dark:from-green-950/90 dark:via-emerald-900/80 dark:to-teal-900/70" />
      
      {/* Aurora Wave 1 - Pink/Purple glow */}
      <div className="absolute inset-0 opacity-60 dark:opacity-70">
        <div 
          className="absolute -inset-[100%] animate-[spin_25s_linear_infinite]"
          style={{
            background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.4) 0%, rgba(167, 243, 208, 0.3) 30%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      
      {/* Aurora Wave 2 - Teal/Green glow */}
      <div className="absolute inset-0 opacity-50 dark:opacity-80">
        <div 
          className="absolute -inset-[100%] animate-[spin_35s_linear_infinite_reverse]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(134, 239, 172, 0.5) 0%, rgba(74, 222, 128, 0.4) 25%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
      </div>
      
      {/* Aurora Wave 3 - Yellow/Green shimmer */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60">
        <div 
          className="absolute -inset-[100%] animate-[spin_45s_linear_infinite]"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(209, 250, 229, 0.6) 0%, rgba(187, 247, 208, 0.4) 20%, transparent 50%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Dark mode neon glow */}
      <div className="absolute inset-0 opacity-0 dark:opacity-50">
        <div 
          className="absolute -inset-[50%] animate-[spin_40s_linear_infinite]"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(139, 255, 74, 0.3) 0%, transparent 40%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-transparent via-white/10 to-transparent dark:via-green-400/10 animate-shimmer" />
    </div>
  );
};

export default AnimatedBackground;
