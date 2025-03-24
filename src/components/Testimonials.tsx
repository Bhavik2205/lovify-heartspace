
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah J.",
    age: 28,
    image: "/placeholder.svg",
    content: "I was skeptical about dating apps, but Lovify completely changed my perspective. The interface is intuitive, and I met my current boyfriend within two weeks!",
    rating: 5
  },
  {
    name: "Michael T.",
    age: 32,
    image: "/placeholder.svg",
    content: "After trying several dating apps, Lovify stands out for its genuine community. The matching algorithm actually works! I'm now engaged to someone I met here.",
    rating: 5
  },
  {
    name: "Aisha R.",
    age: 26,
    image: "/placeholder.svg",
    content: "The nearby feature is a game-changer. I met someone who frequents the same coffee shop as me, and we've been dating for 6 months now!",
    rating: 5
  },
  {
    name: "David L.",
    age: 30,
    image: "/placeholder.svg",
    content: "What I love about Lovify is how it encourages meaningful conversations. The profile prompts help break the ice naturally.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-lovify-softgray text-sm font-medium text-lovify-purple mb-4 inline-block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real People, Real <span className="gradient-text">Connections</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community about how Lovify has helped them find meaningful relationships.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="absolute top-0 right-0 w-20 h-20 gradient-bg opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 gradient-bg opacity-20 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-3 ">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-lovify-gold text-lovify-gold" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].name}, {testimonials[currentIndex].age}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-lovify-pink transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-lovify-pink w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-lovify-pink transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


// import { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Sarah J.",
//     age: 28,
//     image: "/placeholder.svg",
//     content: "I was skeptical about dating apps, but Lovify completely changed my perspective. The interface is intuitive, and I met my current boyfriend within two weeks!",
//     rating: 5
//   },
//   {
//     name: "Michael T.",
//     age: 32,
//     image: "/placeholder.svg",
//     content: "After trying several dating apps, Lovify stands out for its genuine community. The matching algorithm actually works! I'm now engaged to someone I met here.",
//     rating: 5
//   },
//   {
//     name: "Aisha R.",
//     age: 26,
//     image: "/placeholder.svg",
//     content: "The nearby feature is a game-changer. I met someone who frequents the same coffee shop as me, and we've been dating for 6 months now!",
//     rating: 5
//   },
//   {
//     name: "David L.",
//     age: 30,
//     image: "/placeholder.svg",
//     content: "What I love about Lovify is how it encourages meaningful conversations. The profile prompts help break the ice naturally.",
//     rating: 4
//   }
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       next();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollTo({
//         left: carouselRef.current.offsetWidth * (currentIndex + testimonials.length),
//         behavior: 'smooth'
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <section id="testimonials" className="section-spacing bg-white">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <span className="px-4 py-2 rounded-full bg-lovify-softgray text-sm font-medium text-lovify-purple mb-4 inline-block">
//             Success Stories
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Real People, Real <span className="gradient-text">Connections</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Hear from our community about how Lovify has helped them find meaningful relationships.
//           </p>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             ref={carouselRef}
//             className="flex transition-all duration-700 ease-in-out snap-x snap-mandatory scrollbar-hide"
//             style={{ overflow: 'hidden', scrollBehavior: 'smooth' }}
//           >
//             {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="min-w-full px-4 md:px-8 snap-center"
//               >
//                 <div className="glass-card p-8 md:p-12 rounded-2xl shadow-lg bg-transparent">
//                   <div className="absolute top-0 right-0 w-20 h-20 gradient-bg opacity-20 rounded-full blur-2xl"></div>
//                   <div className="absolute bottom-0 left-0 w-24 h-24 gradient-bg opacity-20 rounded-full blur-2xl"></div>

//                   <div className="flex flex-col md:flex-row gap-8 items-center">
//                     <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
//                       <img
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center mb-3">
//                         {[...Array(testimonial.rating)].map((_, i) => (
//                           <Star key={i} className="w-5 h-5 fill-lovify-gold text-lovify-gold" />
//                         ))}
//                       </div>

//                       <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>

//                       <div>
//                         <p className="font-bold text-lg">{testimonial.name}, {testimonial.age}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-8 gap-4">
//             <button
//               onClick={prev}
//               className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-lovify-pink transition-colors"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-700" />
//             </button>

//             <div className="flex gap-2 mt-4">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                     index === currentIndex ? 'bg-lovify-pink w-6' : 'bg-gray-300'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={next}
//               className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-lovify-pink transition-colors"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
