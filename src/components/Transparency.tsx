
const Transparency = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 pt-16 mb-16">
          <h2 className="text-4xl font-bold mb-16">
            <span className="text-red-500">Transparent</span> & <span className="text-red-500">integrated</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gray-900 rounded-lg p-4 h-80 flex items-center justify-center relative border border-gray-800">
              <div className="text-gray-500 text-center">
                <div className="text-lg mb-2">Dashboard Interface</div>
                <div className="text-sm text-gray-600">Integrated Management</div>
              </div>
              
              {/* Simulated dashboard elements */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs">
                ACTIVE
              </div>
              <div className="absolute bottom-4 left-4 bg-gray-700 rounded p-2 text-xs">
                Project Status
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Each action is logged with industry-compliant metadata and 
                  confidence scores for full auditability
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Your internal data never leaves your servers, the Geoforge 
                  API fuses it with external sources without exposing your data
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Export maps, charts, and interactive reports that merge 
                  your data with geospatial insights
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Manage users, roles, and shared projects from a single dashboard
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="border-t border-gray-800 pt-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* LinkedIn Style Cards */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white text-black rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold">MS</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Maaz Sheikh • 2nd</div>
                    <div className="text-sm text-gray-600">Founder & CEO @ Ageospatial</div>
                    <div className="text-sm text-gray-500">3m • ⚡</div>
                  </div>
                  <div className="text-blue-600 font-semibold">LinkedIn</div>
                </div>
                
                <p className="text-sm mb-4">
                  {index === 1 && "65 seconds to identify buildings at risk of flood with AI Agents anywhere on the planet"}
                  {index === 2 && "Tested AI Agents to alert road networks an flood-risk anywhere on Earth and visualize the results in 3D within seconds using on LLM 💡"}
                  {index === 3 && "I can also this GIS in Quality Lab setup. Identify buildings at-risk in flood zones from satellite imagery. Geneva stats (Great models). I can do this anyway!"}
                </p>
                
                <div className="bg-gray-100 rounded-lg p-3 mb-4 h-32 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded mx-auto mb-2"></div>
                    <div className="text-xs">
                      {index === 1 && "Geoforge"}
                      {index === 2 && "AI-risk Ol"}
                      {index === 3 && "Geoforge"}
                    </div>
                    <div className="text-xs text-gray-400">
                      {index === 1 && "at-risk of"}
                      {index === 2 && "using GenAI"}  
                      {index === 3 && "Building Intelligence using GenAI"}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <span className="mr-1">👍</span> {145 + index * 10}
                    </span>
                    <span>{12 + index} Comments</span>
                  </div>
                </div>
                
                <div className="border-t mt-3 pt-3 flex justify-between text-sm text-gray-600">
                  <button className="flex items-center hover:bg-gray-50 px-3 py-1 rounded">
                    👍 Like
                  </button>
                  <button className="flex items-center hover:bg-gray-50 px-3 py-1 rounded">
                    💬 Comment
                  </button>
                  <button className="flex items-center hover:bg-gray-50 px-3 py-1 rounded">
                    📤 Share
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex justify-center space-x-6">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Let's talk
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
