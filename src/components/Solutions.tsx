
import { Building2, TreePine, Factory, Shield } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Smart Cities",
      description: "Urban planning and smart city solutions leveraging geospatial data for sustainable development.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      features: ["Urban Planning", "Traffic Analysis", "Infrastructure Monitoring"]
    },
    {
      icon: TreePine,
      title: "Environmental",
      description: "Environmental monitoring and conservation solutions using satellite imagery and IoT sensors.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Climate Monitoring", "Deforestation Tracking", "Biodiversity Assessment"]
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Asset management and operational efficiency solutions for industrial and energy sectors.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Asset Tracking", "Pipeline Monitoring", "Safety Compliance"]
    },
    {
      icon: Shield,
      title: "Defense & Security",
      description: "Mission-critical intelligence and security solutions for defense and law enforcement.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      features: ["Threat Detection", "Border Security", "Emergency Response"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Industry <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored geospatial solutions for diverse industries and use cases
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{solution.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
