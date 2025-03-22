
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ageGroup: '',
    gender: '',
    lookingFor: '',
    betaTester: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Show success toast
      toast('Thank you for signing up!', {
        description: 'You\'ll be among the first to experience Lovify.',
        action: {
          label: 'Dismiss',
          onClick: () => console.log('Dismissed'),
        },
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        ageGroup: '',
        gender: '',
        lookingFor: '',
        betaTester: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="sign-up" className="section-spacing gradient-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 gradient-bg p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
                Be the First to Experience Lovify
              </h3>
              
              <p className="mb-8 text-white/90 relative z-10">
                Join our exclusive early access list and be part of the Lovify revolution. Find your match before everyone else!
              </p>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="font-medium">Early access benefits</span>
              </div>
              
              <ul className="space-y-2 text-sm relative z-10">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-lovify-gold"></div>
                  <span>Free premium features for 3 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-lovify-gold"></div>
                  <span>Unlimited matches & conversations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-lovify-gold"></div>
                  <span>Profile highlighted for more visibility</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lovify-pink/50 focus:border-lovify-pink transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lovify-pink/50 focus:border-lovify-pink transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
                      Age Group
                    </label>
                    <select
                      id="ageGroup"
                      name="ageGroup"
                      required
                      value={formData.ageGroup}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lovify-pink/50 focus:border-lovify-pink transition-colors"
                    >
                      <option value="" disabled>Select age group</option>
                      <option value="18-24">18-24</option>
                      <option value="25-34">25-34</option>
                      <option value="35-44">35-44</option>
                      <option value="45+">45+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lovify-pink/50 focus:border-lovify-pink transition-colors"
                    >
                      <option value="" disabled>Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700 mb-1">
                    What are you looking for?
                  </label>
                  <select
                    id="lookingFor"
                    name="lookingFor"
                    required
                    value={formData.lookingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lovify-pink/50 focus:border-lovify-pink transition-colors"
                  >
                    <option value="" disabled>Select option</option>
                    <option value="love">Love</option>
                    <option value="friendship">Friendship</option>
                    <option value="casual">Casual Dating</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="betaTester"
                      name="betaTester"
                      type="checkbox"
                      checked={formData.betaTester}
                      onChange={handleChange}
                      className="w-4 h-4 text-lovify-pink focus:ring-lovify-pink border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="betaTester" className="text-sm text-gray-600">
                      I'd love to be a beta tester
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full button-primary py-3 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>Join Early Access</span>
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
