
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 flex items-center relative overflow-hidden">
      {/* Animated Geospatial Network Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full">
          {/* Moving network nodes */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Animated connecting lines forming a spatial network */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Network of interconnected lines */}
            <g className="animate-pulse">
              <line x1="50" y1="100" x2="200" y2="80" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.1;0.8;0.1" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="80" x2="350" y2="150" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.8;0.1;0.8" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="350" y1="150" x2="500" y2="100" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="500" y1="100" x2="650" y2="180" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="650" y1="180" x2="800" y2="120" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4.5s" repeatCount="indefinite" />
              </line>
              
              {/* Vertical connections */}
              <line x1="100" y1="200" x2="150" y2="350" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="250" x2="250" y2="400" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.8s" repeatCount="indefinite" />
              </line>
              <line x1="500" y1="300" x2="550" y2="450" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.1;0.9;0.1" dur="4.2s" repeatCount="indefinite" />
              </line>
              
              {/* Diagonal network patterns */}
              <line x1="100" y1="400" x2="300" y2="300" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.8s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="450" x2="600" y2="350" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5.2s" repeatCount="indefinite" />
              </line>
              <line x1="700" y1="400" x2="900" y2="300" stroke="url(#networkGradient)" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.6s" repeatCount="indefinite" />
              </line>
            </g>
            
            {/* Moving geometric shapes representing spatial data */}
            <circle cx="150" cy="120" r="3" fill="rgba(255,255,255,0.3)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" 
                values="0,0; 50,30; 0,0" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="200" r="2" fill="rgba(255,255,255,0.4)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" 
                values="0,0; -30,40; 0,0" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="150" r="2.5" fill="rgba(255,255,255,0.3)">
              <animateTransform attributeName="transform" attributeType="XML" type="translate" 
                values="0,0; 40,-20; 0,0" dur="7s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Accessible location<br />
            intelligence for informed<br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">decisions</span>
          </h1>
          
          <div className="mt-16">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg inline-flex items-center shadow-lg">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
