import { Link } from 'react-router-dom';
import { Search, Sun, Smartphone, ShieldCheck, Globe, Unlink, Banknote, Zap, RotateCcwClock } from 'lucide-react';
import appMockup1 from '../assets/digital.jpg';
import appMockup2 from '../assets/crypto.jpg';
import appMockup3 from '../assets/building.jpg';

export function DigitalAssets() {
  const features = [
    { icon: <Search size={20} />, text: 'Free to start' },
    { icon: <Sun size={20} />, text: 'No hardware' },
    { icon: <Smartphone size={20} />, text: 'Mobile mining' },
    { icon: <ShieldCheck size={20} />, text: 'No setup needed' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
              <span className="text-xs md:text-sm font-semibold tracking-wide">
                Interlink App
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Digital assets for everyone.
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
              Making digital asset ownership accessible to everyone. InterLink never charges mining fees or sells tokens.
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-4 md:gap-5 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-[#6B5AED] flex-shrink-0">
                    {feature.icon}
                  </span>
                  <span className="text-base md:text-lg font-semibold text-[#6B5AED]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/wallet" className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-black transition">
              Learn more
            </Link>
          </div>

          {/* --- Right Column: Phone Mockup Image --- */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={appMockup1}
              alt="Interlink App mining interface"
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// 
// 
// 

export function CryptoMadeSimple() {
  const features = [
    { icon: <Banknote size={20} />, text: 'Spend crypto like cash' },
    { icon: <Zap size={20} />, text: 'Instant transfer' },
    { icon: <RotateCcwClock size={20} />, text: 'Automated earnings' },
    { icon: <ShieldCheck size={20} />, text: 'Unparalleled security' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
              <span className="text-xs md:text-sm font-semibold tracking-wide">
                ITLX Walle
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Crypto made simple, secure, and seamless.
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
             A non-custodial wallet to store assets, manage payments, and interact with the InterLink ecosystem.
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-4 md:gap-5 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-[#6B5AED] flex-shrink-0">
                    {feature.icon}
                  </span>
                  <span className="text-base md:text-lg font-semibold text-[#6B5AED]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/wallet" className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-black transition">
              Learn more
            </Link>
          </div>

          {/* --- Right Column: Phone Mockup Image --- */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={appMockup2}
              alt="Interlink App mining interface"
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// 
// 
// 
// 

export const BuildingTheInfrastructure = () => {
  const features = [
    { icon: <Banknote size={20} />, text: 'EVM compatible' },
    { icon: <Zap size={20} />, text: 'Instant settlement' },
    { icon: <Globe size={20} />, text: 'Plug into RWA' },
    { icon: <Unlink size={20} />, text: 'Quantum resistant' },
  ];


  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
              <span className="text-xs md:text-sm font-semibold tracking-wide">
                InterlinkChain
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Building the infrastructure for the next billion users.
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
             An EVM Layer 1 designed for real-world payments, tokenized assets, and scalable digital commerce, connecting blockchain technology with the global economy.
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-4 md:gap-5 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-[#6B5AED] flex-shrink-0">
                    {feature.icon}
                  </span>
                  <span className="text-base md:text-lg font-semibold text-[#6B5AED]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/wallet" className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-black transition">
              Learn more
            </Link>
          </div>

          {/* --- Right Column: Phone Mockup Image --- */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={appMockup3}
              alt="Interlink App mining interface"
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};


