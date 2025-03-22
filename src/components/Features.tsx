
import { Heart, MessageCircle, Map, Sparkles, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  accentColor,
  className 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  accentColor: string;
  className?: string;
}) => {
  return (
    <div className={cn(
      "glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accentColor}`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const FeatureVisual = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-lovify-pink/20 to-lovify-purple/20 dark:from-lovify-pink/10 dark:to-lovify-purple/10 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-lovify-pink to-lovify-purple opacity-20 blur-3xl"></div>
      
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-around h-full p-6">
        <div className="glass-card dark:bg-black/20 p-4 rounded-xl shadow-lg transform rotate-3 mb-4 md:mb-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-gradient-to-br from-lovify-pink/80 to-lovify-purple/80 flex items-center justify-center">
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="glass-card dark:bg-black/20 p-3 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-lovify-pink"></div>
              <p className="text-xs font-medium dark:text-white">Alex liked your profile</p>
            </div>
          </div>
          
          <div className="glass-card dark:bg-black/20 p-3 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-lovify-gold"></div>
              <p className="text-xs font-medium dark:text-white">New match!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Discover",
      description: "Swipe right to like, left to pass. Our algorithm learns your preferences for better matches.",
      accentColor: "bg-lovify-pink"
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Connect through text, voice messages, or video calls with your matches.",
      accentColor: "bg-lovify-purple"
    },
    {
      icon: Map,
      title: "Nearby",
      description: "Find potential matches in your area and see where your paths might cross.",
      accentColor: "gradient-bg"
    },
    {
      icon: Sparkles,
      title: "Smart Match",
      description: "Our AI-powered matching system connects you with compatible profiles.",
      accentColor: "bg-lovify-gold"
    },
    {
      icon: User,
      title: "Profile",
      description: "Create a profile that truly represents who you are and what you're looking for.",
      accentColor: "bg-lovify-charcoal"
    }
  ];

  return (
    <section id="features" className="section-spacing bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-lovify-softgray text-sm font-medium text-lovify-purple mb-4 inline-block dark:bg-gray-800 dark:text-lovify-pink">
            App Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Everything You Need to <span className="gradient-text">Find Love</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Lovify combines innovative features to help you discover meaningful connections
            and build relationships that last.
          </p>
        </div>

        <FeatureVisual className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 feature-card-container">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
