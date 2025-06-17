
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">AeroGeoSpatial</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of geospatial technology with innovative solutions 
              for government and enterprise clients worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Remote Sensing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Geospatial Analytics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Location Intelligence</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Defense Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Smart Cities</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Environmental</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Industrial</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Defense & Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span>info@ageospatial.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                <span>123 Tech Valley Drive<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 AeroGeoSpatial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
