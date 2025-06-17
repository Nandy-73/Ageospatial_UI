
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-900 text-white pt-20 flex items-center relative overflow-hidden">
      {/* Network Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Network nodes */}
          <circle cx="100" cy="150" r="3" fill="white" />
          <circle cx="300" cy="100" r="3" fill="white" />
          <circle cx="500" cy="200" r="3" fill="white" />
          <circle cx="700" cy="120" r="3" fill="white" />
          <circle cx="900" cy="180" r="3" fill="white" />
          <circle cx="1100" cy="140" r="3" fill="white" />
          <circle cx="200" cy="300" r="3" fill="white" />
          <circle cx="400" cy="350" r="3" fill="white" />
          <circle cx="600" cy="280" r="3" fill="white" />
          <circle cx="800" cy="320" r="3" fill="white" />
          <circle cx="1000" cy="380" r="3" fill="white" />
          <circle cx="150" cy="500" r="3" fill="white" />
          <circle cx="350" cy="550" r="3" fill="white" />
          <circle cx="550" cy="480" r="3" fill="white" />
          <circle cx="750" cy="520" r="3" fill="white" />
          <circle cx="950" cy="580" r="3" fill="white" />
          <circle cx="250" cy="650" r="3" fill="white" />
          <circle cx="450" cy="700" r="3" fill="white" />
          <circle cx="650" cy="630" r="3" fill="white" />
          <circle cx="850" cy="680" r="3" fill="white" />
          
          {/* Connection lines */}
          <line x1="100" y1="150" x2="300" y2="100" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="300" y1="100" x2="500" y2="200" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="500" y1="200" x2="700" y2="120" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="120" x2="900" y2="180" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="900" y1="180" x2="1100" y2="140" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="300" x2="400" y2="350" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="400" y1="350" x2="600" y2="280" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="600" y1="280" x2="800" y2="320" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="800" y1="320" x2="1000" y2="380" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="150" y1="500" x2="350" y2="550" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="350" y1="550" x2="550" y2="480" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="550" y1="480" x2="750" y2="520" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="750" y1="520" x2="950" y2="580" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="250" y1="650" x2="450" y2="700" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="450" y1="700" x2="650" y2="630" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="650" y1="630" x2="850" y2="680" stroke="white" strokeWidth="1" opacity="0.3" />
          
          {/* Vertical connections */}
          <line x1="100" y1="150" x2="200" y2="300" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="300" y1="100" x2="400" y2="350" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="500" y1="200" x2="600" y2="280" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="120" x2="800" y2="320" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="300" x2="150" y2="500" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="400" y1="350" x2="350" y2="550" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="600" y1="280" x2="550" y2="480" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="800" y1="320" x2="750" y2="520" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="350" y1="550" x2="250" y2="650" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="550" y1="480" x2="450" y2="700" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="750" y1="520" x2="650" y2="630" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="950" y1="580" x2="850" y2="680" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Accessible location
            <br />
            intelligence for informed
            <br />
            decisions
          </h1>
          
          <div className="mt-12">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
