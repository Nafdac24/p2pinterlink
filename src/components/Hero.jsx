import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg'; // Replace with your actual image filename

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <img 
        src={heroBg} 
        alt="People using Interlink" 
        className="absolute inset-0 w-full h-full object-fill object-bottom"
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      {/* Location Badge (Top Right) */}
      <div className="absolute top-6 right-4 md:top-10 md:right-10 z-10 bg-gray-200/90 text-gray-800 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
        NG Uyo, Nigeria
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          
          {/* Headline Text */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight mb-8">
            Activating Marketplace on your Interlink wallet allows you to securely trade your ITG assets with other, using Interlink Escrow services
          </h1>

          {/* Floating ITL Pill */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 md:px-5 md:py-2.5 mb-8 shadow-lg">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold text-white">
              $
            </div>
            <span className="text-[#1E8E3E] font-bold text-xs md:text-sm tracking-wide">
              $ITL Activate Marketplace
            </span>
          </div>

          {/* Download Button */}
          <div>
            <Link to="/wallet" className="bg-[#1A1A1A] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-black transition">
              Download
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;