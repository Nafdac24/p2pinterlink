import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EEECFD] text-[#6B5AED] px-3 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#6B5AED] rounded-sm" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">
              Get started
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            Start earning digital asset for free today.
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
            Mining is free and secure with InterLink. Join the network using an invite code from a member.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">

            {/* App Store */}
            <Link to="/wallet" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-gray-300 hover:shadow-sm transition">
              {/* Apple Logo */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap">
                App Store
              </span>
            </Link>

            {/* Google Play */}
            <Link to="/wallet" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-gray-300 hover:shadow-sm transition">
              {/* Google Play Triangle Logo */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.002 1.002 0 01-.61-.926V2.74c0-.4.23-.752.61-.926z" fill="#00D2FF"/>
                <path d="M17.05 8.898L5.716 1.19c-.43-.28-1.008-.027-1.05.507l8.884 10.302 3.5-3.1z" fill="#00F076"/>
                <path d="M13.55 11.999l-8.884 10.302c.042.534.62.787 1.05.507l11.334-7.708-3.5-3.101z" fill="#FF3A44"/>
                <path d="M17.05 8.898l3.824 2.6c.75.51.75 1.494 0 2.004l-3.824 2.6L13.55 12l3.5-3.102z" fill="#FFCE00"/>
              </svg>
              <span className="text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap">
                Google Play
              </span>
            </Link>

            {/* APK Pure */}
            <Link to="/wallet" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-gray-300 hover:shadow-sm transition">
              <Smartphone size={20} className="text-gray-700 flex-shrink-0" strokeWidth={2} />
              <span className="text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap">
                APK Pure
              </span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GetStarted;