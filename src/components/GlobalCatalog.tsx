
const GlobalCatalog = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 pt-16 mb-16">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Global catalog of <span className="text-red-500">+1000</span> data layers
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gray-900 rounded-lg p-4 h-80 flex items-center justify-center relative border border-gray-800">
              <div className="text-gray-500 text-center">
                <div className="text-lg mb-2">Interactive Map Interface</div>
                <div className="text-sm text-gray-600">Geospatial Data Visualization</div>
              </div>
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border border-red-500/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">Thousands of geospatial data layers from trusted sources</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">Enrichment with real-time information as events unfold</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">Worldwide coverage</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">Geocoding and reverse geocoding</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-16">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-red-500">AI Agents</span> producing <span className="text-red-500">real-time</span> information in <span className="text-red-500">seconds</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Built for and in the cloud, uses state of the art geospatial 
                  technologies to cut hours of processing down to seconds
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Plug & play agents run on any LLM and choose the best 
                  workflow, automate discovery, processing, and fusion.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Streams near real-time satellite imagery and applies GeoAI 
                  foundational models to detect change such as natural 
                  disasters as they happen
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 h-80 flex items-center justify-center relative border border-gray-800">
              <div className="text-gray-500 text-center">
                <div className="text-lg mb-2">Real-time Processing</div>
                <div className="text-sm text-gray-600">AI-Powered Analysis</div>
              </div>
              <div className="absolute inset-4 border border-red-500/20 rounded animate-pulse"></div>
              <div className="absolute top-6 right-6 w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCatalog;
