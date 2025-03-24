
import { Heart, MessageCircle, Map, Sparkles, User } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  accentColor 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  accentColor: string;
}) => {
  return (
    <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accentColor}`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
    },
    {
      icon: MessageCircle,
      title: "Random Chat",
      description:
        "Start spontaneous, anonymous chats with strangers — just like Omegle, but safer and smarter.",
      accentColor: "bg-lovify-blue",
    },
  ];

  return (
    <section id="features" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-lovify-softgray text-sm font-medium text-lovify-purple mb-4 inline-block">
            App Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Find Love</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lovify combines innovative features to help you discover meaningful connections
            and build relationships that last.
          </p>
        </div>

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
