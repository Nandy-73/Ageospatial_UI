
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white pt-20 flex items-center relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full">
          {/* Moving dots animation */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Network lines */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 0.3)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Animated connecting lines */}
            <line x1="100" y1="150" x2="300" y2="100" stroke="url(#lineGradient)" strokeWidth="1">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="100" x2="500" y2="200" stroke="url(#lineGradient)" strokeWidth="1">
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="500" y1="200" x2="700" y2="120" stroke="url(#lineGradient)" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="700" y1="120" x2="900" y2="180" stroke="url(#lineGradient)" strokeWidth="1">
              <animate attributeName="opacity" values="0.1;0.7;0.1" dur="3.5s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header with logo style */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold mb-4">
              Geo<span className="text-red-500">forge</span>
              <span className="text-red-500 text-4xl align-top">+</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              <span className="text-red-500 font-semibold">AI Agent</span> web platform that enriches your data with geospatial<br />
              insights, anywhere, in seconds to <span className="text-red-500 font-semibold">support your decisions</span>
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-left">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <h3 className="text-red-500 font-semibold mb-2">No expertise required</h3>
              <p className="text-gray-400 text-sm">
                You don't need to be a pro, AI agents handle geodata discovery, 
                processing, and fusion
              </p>
            </div>

            <div className="text-left">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-500 text-xl font-bold">$</span>
              </div>
              <h3 className="text-red-500 font-semibold mb-2">Lower cost</h3>
              <p className="text-gray-400 text-sm">
                Save money and manual work than with our platform
              </p>
            </div>

            <div className="text-left">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full relative">
                  <div className="absolute inset-1 bg-black rounded-full">
                    <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-red-500 font-semibold mb-2">Increase speed</h3>
              <p className="text-gray-400 text-sm">
                Go from idea to insight in under minutes instead of hours or days spent 
                on searching for the right data, processing it and measuring it on a map
              </p>
            </div>

            <div className="text-left">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-white"></div>
                </div>
              </div>
              <h3 className="text-red-500 font-semibold mb-2">Enrich context</h3>
              <p className="text-gray-400 text-sm">
                Fuse your data with external, validated, and local thematic, 
                socioeconomic, imagery and near-time data from the web
              </p>
            </div>
          </div>

          {/* Demo Image Placeholder */}
          <div className="mb-12 relative">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center relative">
                  <div className="text-gray-500">Interactive Map Demo</div>
                  <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-left space-y-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded inline-block text-sm">
                    DETECTED: FLOOD
                  </div>
                  <p className="text-gray-300">
                    I realized my community suffered a recent 5 floor is level 
                    in vulnerability where those about at 2 homes being 
                    emergency and may be hit...
                  </p>
                  <div className="bg-red-600 text-white px-4 py-2 rounded inline-block text-sm">
                    GET STARTED: GO
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mb-12">
            <p className="text-gray-400 mb-8">
              Trusted by <span className="text-red-500 font-semibold">decision makers</span> in
            </p>
            <div className="bg-white text-black px-6 py-2 rounded inline-block">
              Public safety
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg inline-flex items-center">
              Join the waitlist
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
