
import { Globe, Database, BarChart3, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Remote Sensing",
      description: "Advanced satellite imagery analysis and earth observation solutions for environmental monitoring and asset management."
    },
    {
      icon: Database,
      title: "Geospatial Analytics",
      description: "Transform spatial data into actionable insights with our advanced analytics and machine learning capabilities."
    },
    {
      icon: BarChart3,
      title: "Location Intelligence",
      description: "Strategic location-based insights for business optimization, market analysis, and operational efficiency."
    },
    {
      icon: Shield,
      title: "Defense Solutions",
      description: "Mission-critical geospatial intelligence and security solutions for defense and government agencies."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring systems for infrastructure, environmental changes, and emergency response."
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert consulting and implementation services to maximize your geospatial technology investments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive geospatial solutions designed to meet the complex needs of modern organizations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
