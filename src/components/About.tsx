
import { Award, Globe, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Globe, value: "150+", label: "Countries Served" },
    { icon: Users, value: "500+", label: "Expert Team" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Zap, value: "1000+", label: "Projects Delivered" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Leading the Future of <span className="text-blue-400">Geospatial Technology</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over two decades, we've been at the forefront of geospatial innovation, 
              providing cutting-edge solutions that transform how organizations understand 
              and interact with spatial data.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our team of experts combines deep technical expertise with industry knowledge 
              to deliver solutions that drive real business value. From satellite imagery 
              analysis to advanced location intelligence, we help organizations make 
              informed decisions based on spatial insights.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Learn More About Us
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
