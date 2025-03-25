import React, { useState, useEffect, useRef } from "react";
import clientsBg from "../assets/clients.jpeg";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Testimonial data (enhanced with avatar placeholders)
  const testimonials = [
    {
      quote: "JKR Consultancy transformed our campaign strategy completely. Their data-driven approach and strategic insights were invaluable for our success.",
      author: "Coming Soon",
      position: "Campaign Manager",
      color: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      quote: "Working with JKR has been a game-changer for our political movement. They understand the nuances of voter behavior and helped us craft messages that truly resonated.",
      author: "Coming Soon",
      position: "Party Leader",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-700"
    },
    {
      quote: "The team at JKR provided us with expert guidance throughout our campaign. Their dedication and professionalism made all the difference in our victory.",
      author: "Coming Soon",
      position: "Elected Official",
      color: "bg-gradient-to-r from-purple-500 to-purple-700"
    }
  ];

  // Enhanced animation on scroll with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      id="testimonials-section" 
      className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 z-0 opacity-15 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${clientsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Parallax effect
          filter: "blur(2px)",
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 text-center mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}
        >
          WHAT OUR CLIENTS SAY
        </h2>
        
        <div 
          className={`h-1 mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{
            background: "linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa)",
            boxShadow: "0 0 10px rgba(96, 165, 250, 0.7)"
          }}
        ></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`glassmorphism-card rounded-lg p-6 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${0.2 + index * 0.15}s`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Animated quote icon */}
              <div className="quote-icon-container mb-4">
                <svg className="quote-icon text-blue-400 w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              {/* Testimonial text with gradient hover effect */}
              <p className="text-gray-200 italic mb-6 line-clamp-4 hover:line-clamp-none transition-all duration-300 quote-text">
                {testimonial.quote}
              </p>
              
              {/* Author info with animated avatar */}
              <div className="flex items-center">
                <div className={`avatar-circle w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-blue-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        /* Glassmorphism Card Effect */
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .glassmorphism-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 100, 255, 0.2);
        }
        
        /* Quote Icon Animation */
        .quote-icon-container {
          position: relative;
          display: inline-block;
        }
        
        .quote-icon {
          filter: drop-shadow(0 0 5px rgba(96, 165, 250, 0.5));
          transition: all 0.3s ease;
        }
        
        .glassmorphism-card:hover .quote-icon {
          transform: scale(1.2) rotate(10deg);
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.8));
        }
        
        /* Text hover effect */
        .quote-text {
          position: relative;
          z-index: 1;
        }
        
        .quote-text:after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #60a5fa, #818cf8);
          transition: width 0.3s ease;
          z-index: -1;
        }
        
        .glassmorphism-card:hover .quote-text:after {
          width: 100%;
        }
        
        /* Avatar animation */
        .avatar-circle {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        }
        
        .glassmorphism-card:hover .avatar-circle {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }
        
        /* Background particles */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(96, 165, 250, 0.3);
          border-radius: 50%;
          animation: float 15s infinite linear;
        }
        
        .particle:nth-child(odd) {
          background: rgba(129, 140, 248, 0.3);
          width: 4px;
          height: 4px;
        }
        
        .particle:nth-child(3n) {
          background: rgba(167, 139, 250, 0.3);
          width: 8px;
          height: 8px;
        }
        
        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; animation-duration: 20s; }
        .particle:nth-child(2) { top: 40%; left: 25%; animation-delay: 1s; animation-duration: 25s; }
        .particle:nth-child(3) { top: 60%; left: 40%; animation-delay: 2s; animation-duration: 18s; }
        .particle:nth-child(4) { top: 80%; left: 60%; animation-delay: 3s; animation-duration: 22s; }
        .particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 4s; animation-duration: 23s; }
        .particle:nth-child(6) { top: 30%; left: 85%; animation-delay: 5s; animation-duration: 19s; }
        .particle:nth-child(7) { top: 50%; left: 5%; animation-delay: 6s; animation-duration: 21s; }
        .particle:nth-child(8) { top: 70%; left: 20%; animation-delay: 7s; animation-duration: 24s; }
        .particle:nth-child(9) { top: 90%; left: 35%; animation-delay: 8s; animation-duration: 17s; }
        .particle:nth-child(10) { top: 15%; left: 50%; animation-delay: 9s; animation-duration: 26s; }
        .particle:nth-child(11) { top: 35%; left: 65%; animation-delay: 10s; animation-duration: 20s; }
        .particle:nth-child(12) { top: 55%; left: 80%; animation-delay: 11s; animation-duration: 22s; }
        .particle:nth-child(13) { top: 75%; left: 95%; animation-delay: 12s; animation-duration: 19s; }
        .particle:nth-child(14) { top: 25%; left: 15%; animation-delay: 13s; animation-duration: 23s; }
        .particle:nth-child(15) { top: 45%; left: 30%; animation-delay: 14s; animation-duration: 25s; }
        .particle:nth-child(16) { top: 65%; left: 45%; animation-delay: 15s; animation-duration: 18s; }
        .particle:nth-child(17) { top: 85%; left: 55%; animation-delay: 16s; animation-duration: 21s; }
        .particle:nth-child(18) { top: 5%; left: 75%; animation-delay: 17s; animation-duration: 24s; }
        .particle:nth-child(19) { top: 22%; left: 90%; animation-delay: 18s; animation-duration: 20s; }
        .particle:nth-child(20) { top: 42%; left: 8%; animation-delay: 19s; animation-duration: 23s; }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Clients;