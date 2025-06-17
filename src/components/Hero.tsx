
import { ArrowRight, MapPin, Satellite } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Advanced
              <span className="text-blue-400"> Geospatial</span>
              <br />
              Technology Solutions
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Empowering decision-making through cutting-edge geospatial analytics, 
              remote sensing, and location intelligence solutions for government and enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group">
                Explore Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-400" size={24} />
                <span className="text-gray-300">Global Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Satellite className="text-blue-400" size={24} />
                <span className="text-gray-300">Satellite Data</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Geospatial Technology" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
