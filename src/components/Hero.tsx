
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-lovify-softgray dark:bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full gradient-ping blur-3xl"></div>
          <div className="absolute bottom-10 right-[5%] w-80 h-80 rounded-full gradient-ping blur-3xl"></div>
        </div>
      </div>
      
      <div className="container-custom py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 hero-animation-container">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-lovify-pink/20 text-xs md:text-sm font-medium gradient-text mb-4">
                Dating Reimagined
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight dark:text-white">
                Meet. Match. <span className="gradient-text">Make Magic.</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Discover authentic connections on Lovify — where meaningful relationships begin with a simple swipe.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#sign-up" className="button-primary">
                Get Early Access
              </a>
              <a href="#how-it-works" className="button-secondary">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br from-pink-${300 + i*100} to-purple-${300 + i*100}`}></div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">10,000+</span> early signups
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center hero-animation-container">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 gradient-bg rounded-full flex items-center justify-center shadow-lg animate-heartbeat">
                <Heart className="w-6 h-6 text-white" />
              </div>
              
              <div className="relative z-10 glass-card p-4 rounded-3xl shadow-2xl transform rotate-3 transition-transform duration-500 hover:rotate-0">
                <img 
                  src="/placeholder.svg" 
                  alt="Lovify app mockup" 
                  className="w-64 md:w-72 lg:w-80 rounded-2xl shadow-sm"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-2xl shadow-lg dark:bg-gray-800/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lovify-pink animate-pulse"></div>
                  <p className="text-xs font-medium dark:text-white">2,521 online now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
