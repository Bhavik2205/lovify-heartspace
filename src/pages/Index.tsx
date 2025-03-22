
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetEl = document.querySelector(href);
        if (!targetEl) return;
        
        window.scrollTo({
          top: targetEl.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
    
    // Fade in animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const hiddenElements = document.querySelectorAll('.fade-in-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="overflow-x-hidden dark:bg-gray-900">
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleTheme} 
          variant="outline" 
          size="icon"
          className="rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-lovify-gold" />
          ) : (
            <Moon className="h-5 w-5 text-lovify-purple" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
