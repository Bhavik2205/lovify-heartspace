
import { UserPlus, Heart, MessageCircle } from 'lucide-react';

const Step = ({ 
  number, 
  icon: Icon, 
  title, 
  description 
}: { 
  number: number; 
  icon: any; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="relative">
      {/* Connecting line */}
      {number < 3 && (
        <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-lovify-pink to-lovify-purple"></div>
      )}
      
      <div className="flex flex-col items-center relative z-10">
        <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center shadow-lg mb-6">
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        <div className="w-8 h-8 rounded-full bg-white border-2 border-lovify-pink flex items-center justify-center absolute -top-2 -right-2">
          <span className="font-bold text-lovify-pink">{number}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-center max-w-xs">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Sign up and create your unique profile with photos and preferences."
    },
    {
      icon: Heart,
      title: "Find Matches",
      description: "Discover and connect with people who share your interests."
    },
    {
      icon: MessageCircle,
      title: "Start Chatting",
      description: "Break the ice and start building meaningful connections."
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-lovify-softgray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-lovify-purple mb-4 inline-block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Lovify <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding your perfect match has never been easier. Follow these simple steps to start your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
